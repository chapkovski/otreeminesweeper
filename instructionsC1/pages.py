from otree.api import Currency as c, currency_range
from ._builtin import Page, WaitPage
from .models import Constants


class Instructions(Page):
    def is_displayed(self):
        return self.session.config.get('condition3', False)
class Instructions2(Page):
    def is_displayed(self):
        return self.session.config.get('condition3', False)
class Instructions3(Page):
    def is_displayed(self):
        return self.session.config.get('condition3', False)
    form_model = 'player'
    form_fields = ['q1', 'q2', 'q3']
class Instructions4(Page):
    def is_displayed(self):
        return self.session.config.get('condition3', False)
    form_model = 'player'
    form_fields = ['q4', 'q5' ]
class Instructions5(Page):
    def is_displayed(self):
        return self.session.config.get('condition3', False)
    form_model = 'player'
    form_fields = [ 'q6' ]


page_sequence = [Instructions, Instructions2, Instructions3,Instructions4, Instructions5]