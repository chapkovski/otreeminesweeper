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


author = 'Your name here'

doc = """
Your app description
"""


class Constants(BaseConstants):
    name_in_url = 'surrogation'
    players_per_group = None
    num_rounds = 1


class Subsession(BaseSubsession):
    pass


class Group(BaseGroup):
    pass


class Player(BasePlayer):
    round_payoff = models.CurrencyField()

    s1 = models.IntegerField(choices=[[1, 'Scenario A'],
                                      [2, 'Scenario B'],
                                      ],
                             blank=False,
                             label='Which scenario is best for achieving the main objective?'
                             )
    s2 = models.IntegerField(choices=[[1, 'Scenario A'],
                                      [2, 'Scenario B'],
                                      ],
                             blank=False,
                             label='Which scenario is best for achieving the main objective?'
                             )
    s3 = models.IntegerField(choices=[[1, 'Scenario A'],
                                      [2, 'Scenario B'],
                                      ],
                             blank=False,
                             label='Which scenario is best for achieving the main objective?'
                             )
    s4 = models.IntegerField(choices=[[1, 'Scenario A'],
                                      [2, 'Scenario B'],
                                      ],
                             blank=False,
                             label='Which scenario is best for achieving the main objective?'
                             )
    s5 = models.IntegerField(choices=[[1, 'Scenario A'],
                                      [2, 'Scenario B'],
                                      ],
                             blank=False,
                             label='Which scenario is best for achieving the main objective?'
                             )
    s6 = models.IntegerField(choices=[[1, 'Scenario A'],
                                      [2, 'Scenario B'],
                                      ],
                             blank=False,
                             label='Which scenario is best for achieving the main objective?'
                             )
    s7 = models.IntegerField(choices=[[1, 'Scenario A'],
                                      [2, 'Scenario B'],
                                      ],
                             blank=False,
                             label='Which scenario is best for achieving the main objective?'
                             )
    s8 = models.IntegerField(choices=[[1, 'Scenario A'],
                                      [2, 'Scenario B'],
                                      ],
                             blank=False,
                             label='Which scenario is best for achieving the main objective?'
                             )
    s9 = models.IntegerField(choices=[[1, 'Scenario A'],
                                      [2, 'Scenario B'],
                                      ],
                             blank=False,
                             label='Which scenario is best for achieving the main objective?')

    correct = models.IntegerField()
    correct_1 = models.IntegerField()
    correct_2 = models.IntegerField()
    correct_3 = models.IntegerField()
    correct_4 = models.IntegerField()
    correct_5 = models.IntegerField()


    def num_correct(self):
        if self.s1 == 2:
            self.correct_1 = 1
        else:
            self.correct_1 = 0
        if self.s2 == 1:
            self.correct_2 = 1
        else:
            self.correct_2 = 0
        if self.s3 == 2:
            self.correct_3 = 1
        else:
            self.correct_3 = 0
        if self.s4 == 1:
            self.correct_4 = 1
        else:
            self.correct_4 = 0
        if self.s9 == 2:
            self.correct_5 = 1
        else:
            self.correct_5 = 0


        self.correct = self.correct_1 + self.correct_2 + self.correct_3 + self.correct_4 + self.correct_5+ 4
        return self.correct


