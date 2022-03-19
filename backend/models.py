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
import numpy as np
from scipy.stats import norm
import random
import json
from pprint import pprint

author = 'Your name here'

doc = """
Your app description
"""


class Constants(BaseConstants):
    name_in_url = 'backend'
    players_per_group = None
    num_rounds = 1

class Subsession(BaseSubsession):
    pass


class Group(BaseGroup):
    pass


class Player(BasePlayer):


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
        self.paying_round = self.session.vars['paying_round']
        self.final_payoff = self.in_round(self.paying_round).exit_price
        self.payoff = self.final_payoff


class Event(djmodels.Model):
    class Meta:
        ordering = ['timestamp']
        get_latest_by = 'timestamp'

    owner = djmodels.ForeignKey(to=Player, on_delete=djmodels.CASCADE, related_name='events')
    name = models.StringField()
    timestamp = djmodels.DateTimeField(null=True, blank=True)
    unix_timestamp = models.IntegerField()
    body = models.StringField()
    current_price = models.FloatField()
    price_index = models.IntegerField()
    slider_value = models.IntegerField()
    secs_since_round_starts = models.IntegerField()
    clicked_volatility = models.FloatField()
