from otree.api import Currency as c, currency_range
from ._builtin import Page, WaitPage
from .models import Constants

class Consent(Page):
    pass

class Instructions(Page):
    def is_displayed(self):
        return self.session.config.get('control', False)


class Instructions2(Page):
    def is_displayed(self):
        return self.session.config.get('control', False)


class Instructions3(Page):
    def is_displayed(self):
        return self.session.config.get('control', False )

    form_model = 'player'
    form_fields = ['q1', 'q2']

class Instructions4(Page):
    def is_displayed(self):
        return self.session.config.get('control', False )
    form_model = 'player'
    form_fields = ['q3']

class Instructions5(Page):
    def is_displayed(self):
        return self.session.config.get('control', False )
    form_model = 'player'
    form_fields = ['q4']


page_sequence = [Consent, Instructions, Instructions2, Instructions3, Instructions4, Instructions5]
