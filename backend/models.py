from otree.api import (
    models,
    widgets,
    BaseConstants,
    BaseSubsession,
    BaseGroup,
    BasePlayer,
    Currency as c,
    currency_range,
)

from django.utils.dateformat import format
from django.utils import timezone
from django.db import models as djmodels
import math
import yaml
import json
from pprint import pprint
from django.utils.safestring import mark_safe

author = 'Philipp Chapkovski, Ph.D. chapkovski@gmail.com'

doc = """
minesweeper game
"""

addendum = dict(
    used_clicks=0,
    right_clicks=0,
    done=False,
    bombs_blown=0,
    bombs_marked_correctly=0,

)

pl = lambda i: math.ceil(i.get('bombs', 0) * 0.8) * i.get('penalty', 0)


def grid_cleaner(g):
    g = g.copy()
    for i in addendum.keys():
        g.pop(i)
    g.pop('bombs_non_revealed')
    return g


class Constants(BaseConstants):
    name_in_url = 'backend'
    players_per_group = None
    num_rounds = 2
    max_clicks = 10
    endowment = 20
    left_click_cost = 0.01
    with open(r'./data/main.yaml') as file:
        MAIN_GRIDS = yaml.load(file, Loader=yaml.FullLoader)
    with open(r'./data/practice.yaml') as file:
        PRACTICE_GRIDS = yaml.load(file, Loader=yaml.FullLoader)
    main_grids = [{**i, **addendum} for i in MAIN_GRIDS]
    practice_grids = [{**i, **addendum} for i in PRACTICE_GRIDS]
    for i in main_grids:
        i['bombs_non_revealed'] = i.get('bombs')
        i['potential_loss'] = pl(i)
    for i in practice_grids:
        i['bombs_non_revealed'] = i.get('bombs')
        i['potential_loss'] = pl(i)


class Subsession(BaseSubsession):
    def creating_session(self):
        c = self.session.config
        grids = []
        for p in self.get_players():
            p.endowment = c.get('endowment')
            p.time_for_practice = c.get('time_for_practice')
            p.left_click_cost = c.get('left_click_cost')
            p.max_clicks = c.get('max_clicks')
            for i, g in enumerate(Constants.main_grids, start=1):
                _g = grid_cleaner(g)
                grids.append(Grid(**_g, owner=p, number=i, practice=False))
            for i, g in enumerate(Constants.practice_grids, start=1):
                _g = grid_cleaner(g)
                grids.append(Grid(**_g, owner=p, number=i, practice=True))
        Grid.objects.bulk_create(grids)


class Group(BaseGroup):
    pass


class Player(BasePlayer):

    ego_priority = models.StringField()
    ego_click_stop= models.StringField()
    total_clicks = models.IntegerField()
    budget_counter = models.IntegerField(initial=0)
    total_penalty = djmodels.DecimalField(null=True, decimal_places=2, max_digits=10)
    endowment = models.IntegerField()
    time_for_practice = models.IntegerField()
    left_click_cost = models.FloatField()
    max_clicks = models.IntegerField()
    deviation = models.LongStringField()
    explanation = models.LongStringField()
    adjustment = models.LongStringField()
    return_to_frozen = models.BooleanField()

    def get_practice_grids(self):
        return self.get_json_grids(practice=True)

    def get_main_grids(self):
        return self.get_json_grids(practice=False)

    def get_json_grids(self, practice=False):
        res = self.grids.filter(practice=practice).order_by('number').values()
        b80 = lambda x: math.ceil(x.get('bombs') * 0.8)
        res = [{**i, 'bombs80': b80(i), **addendum, 'bombs_non_revealed': i.get('bombs')} for i in res]
        return res

    def get_reversed_grids(self):
        if self.session.config.get('notes'):
            self.grids.filter(practice=False).order_by('number')
        return self.grids.filter(practice=False).order_by('-number')

    def register_event(self, data):
        timestamp = timezone.now()

        self.events.create(
            owner=self,
            timestamp=timestamp,
            unix_timestamp=format(timestamp, 'U'),
            name=data.pop('name', ''),
            body=json.dumps(data),
            current_price=data.get('currentPrice'),
            price_index=data.get('priceIndex'),
            slider_value=data.get('sliderValue'),
            secs_since_round_starts=data.get('secs_since_round_starts'),
            clicked_volatility=data.get('volatility')
        )

        return {
            self.id_in_group: dict(timestamp=timestamp.strftime('%m_%d_%Y_%H_%M_%S'), action='getServerConfirmation')}

    def set_payoff(self):
        self.payoff = self.endowment - self.total_penalty - self.get_clicks_fine()

    def get_clicks_fine(self):
        return self.total_clicks * Constants.left_click_cost


class Grid(djmodels.Model):
    flags = models.IntegerField(initial=0)
    freezable = models.BooleanField()
    freeze_when = models.IntegerField()
    practice = models.BooleanField()
    owner = djmodels.ForeignKey(to=Player, on_delete=djmodels.CASCADE, related_name='grids')
    rows = models.IntegerField()
    columns = models.IntegerField()
    number = models.IntegerField()
    bombs = models.IntegerField()
    total_penalty = models.FloatField()
    potential_loss = models.FloatField()
    penalty = models.FloatField()
    recommended_clicks = models.IntegerField()
    used_clicks = models.IntegerField(initial=0)
    clicks80 = models.IntegerField(initial=0)
    clicks100 = models.IntegerField(initial=0)
    note = models.LongStringField()
    ego_number = models.IntegerField()
    ego_clicks = models.IntegerField()

    def efficiency(self):
        if not self.recommended_clicks or self.recommended_clicks == 0:
            return
        diff = int((self.used_clicks / self.recommended_clicks - 1) * 100)
        absdiff = abs(diff)
        if diff > 0:
            return mark_safe(f'<red>You were {absdiff} percent over budget!</red>')
        else:
            return mark_safe(f'<green>You were {absdiff} percent under budget!</green>')
