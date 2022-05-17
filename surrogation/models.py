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
                             label='Which scenario is best for achieving the motain objective?')