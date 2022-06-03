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

import random
author = 'Your name here'

doc = """
Your app description
"""

condition_correspondence = dict(
    condition1= dict(public=False, notes=False, performance=False),
    condition2= dict(public=False, notes=False, performance=True),
    condition3= dict(public=False, notes=True, performance=True),
    condition4= dict(public=True, notes=True, performance=True),
)

class Constants(BaseConstants):
    name_in_url = 'intro'
    players_per_group = None
    num_rounds = 1


class Subsession(BaseSubsession):
    def creating_session(self):

        for p in self.get_players():
            if self.session.config['name'] == 'random':
                condition = random.choice(list(condition_correspondence.keys()))
            else:
                condition = self.session.config.get('condition')
            p.condition = condition
            conditions = condition_correspondence[condition]
            for k, v in conditions.items():
                setattr(p, k, v)
            keys = ['condition', 'public', 'notes', 'performance']
            for k in keys:
                p.participant.vars[k] = getattr(p, k)

class Group(BaseGroup):
    pass


class Player(BasePlayer):
    condition = models.StringField()
    public = models.BooleanField()
    notes =  models.BooleanField()
    performance =  models.BooleanField()
