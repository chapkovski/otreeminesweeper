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


class Constants(BaseConstants):
    name_in_url = 'backend'
    players_per_group = None
    num_rounds = 1
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
        for p in self.get_players():
            p.endowment = c.get('endowment')
            p.time_for_practice = c.get('time_for_practice')
            p.left_click_cost = c.get('left_click_cost')
            p.max_clicks = c.get('max_clicks')
            for i in range(1, 7):
                p.grids.create(number=i)


class Group(BaseGroup):
    pass


class Player(BasePlayer):
    total_clicks = models.IntegerField()
    budget_counter = models.IntegerField(initial=0)
    total_penalty = djmodels.DecimalField(null=True, decimal_places=2, max_digits=10)
    endowment = models.IntegerField()
    time_for_practice = models.IntegerField()
    left_click_cost = models.FloatField()
    max_clicks = models.IntegerField()

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
    owner = djmodels.ForeignKey(to=Player, on_delete=djmodels.CASCADE, related_name='grids')
    rows = models.IntegerField()
    columns = models.IntegerField()
    number = models.IntegerField()
    bombs = models.IntegerField()
    total_penalty = models.FloatField()
    used_clicks = models.IntegerField(initial=0)
    clicks80 = models.IntegerField(initial=0)
    clicks100 = models.IntegerField(initial=0)
