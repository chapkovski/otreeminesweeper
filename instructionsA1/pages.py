from otree.api import Currency as c, currency_range
from ._builtin import Page, WaitPage
from .models import Constants


class Instructions(Page):
    pass


class Instructions2(Page):
    pass


class Instructions3(Page):
    form_model = 'player'
    form_fields = ['q1', 'q2']

class Instructions4(Page):
    form_model = 'player'
    form_fields = ['q3']

class Instructions5(Page):
    form_model = 'player'
    form_fields = ['q4']


page_sequence = [Instructions, Instructions2, Instructions3, Instructions4, Instructions5]
