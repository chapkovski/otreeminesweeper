from otree.api import Currency as c, currency_range
from ._builtin import Page, WaitPage
from .models import Constants


class Instructions(Page):
    def is_displayed(self):
        return self.session.config.get('condition2', False)


class Instructions2(Page):
    def is_displayed(self):
        return self.session.config.get('condition2', False)

    form_model = 'player'
    form_fields = ['a1']


class Instructions3(Page):
    def is_displayed(self):
        return self.session.config.get('condition2', False )

    form_model = 'player'
    form_fields = ['q1', 'q2', 'q3']

class Instructions4(Page):
    def is_displayed(self):
        return self.session.config.get('condition2', False )
    form_model = 'player'
    form_fields = ['q4', 'a2']

class Instructions5(Page):
    def is_displayed(self):
        return self.session.config.get('condition2', False )
    form_model = 'player'
    form_fields = ['q5', 'a3']


page_sequence = [Instructions, Instructions2, Instructions3, Instructions4, Instructions5]
