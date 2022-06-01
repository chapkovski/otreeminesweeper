from otree.api import Currency as c, currency_range
from ._builtin import Page, WaitPage
from .models import Constants

class Intro(Page):
    pass

class Surrogation1(Page):
    form_model = 'player'
    form_fields = ['s1']


class Surrogation2(Page):
        form_model = 'player'
        form_fields = ['s2']

class Surrogation3(Page):
    form_model = 'player'
    form_fields = ['s3']

class Surrogation4(Page):
    form_model = 'player'
    form_fields = ['s4']

class Surrogation5(Page):
    form_model = 'player'
    form_fields = ['s5']

class Surrogation6(Page):
    form_model = 'player'
    form_fields = ['s6']

class Surrogation7(Page):
    form_model = 'player'
    form_fields = ['s7']
class Surrogation8(Page):
    form_model = 'player'
    form_fields = ['s8']

class Surrogation9(Page):
    form_model = 'player'
    form_fields = ['s9']

class Results(Page):
    def vars_for_template(self):
        self.player.correct = self.player.num_correct()
        self.player.round_payoff = self.player.correct*0.1
        self.participant.payoff += self.player.round_payoff
        print(self.participant.payoff)
        correct = self.player.correct
        return{'correct': correct}


page_sequence = [ Intro, Surrogation2, Surrogation4, Surrogation6, Surrogation9,
                 Surrogation7, Surrogation8, Surrogation3, Surrogation1, Surrogation5, Results]
