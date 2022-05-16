from otree.api import *

doc = """
demographcis
"""


class C(BaseConstants):
    NAME_IN_URL = 'demographics'
    PLAYERS_PER_GROUP = None
    NUM_ROUNDS = 1
    


class Subsession(BaseSubsession):
    pass


class Group(BaseGroup):
    pass


class Player(BasePlayer):
    gender = models.StringField(widget=widgets.RadioSelect,choices=['Female', 'Male'], blank=True)
    age = models.IntegerField(min=15, max=99)
    education = models.IntegerField(min=0, max=20, label='How many years of full-time education have you completed after high school? ')
    work = models.IntegerField(min=0, max=60, label= 'How many years of full-time work experience do you have? ')
    minesweeper = models.IntegerField(widget=widgets.RadioSelect,choices=[[1, "Yes"],
                                               [2, "No"]
                                               ],
                                          label= 'Before Today, have you played minesweeper before?')
    minesweeper2 = models.IntegerField(min=0, max=10000, label='How many total (approximate) hours of minesweeper have you played before (put a 0 if never played)?')
    videogames = models.IntegerField(min=0, max=10000, label='Other than minesweeper, how many hours of video games do you play in a week?')

    budgetpressure = models.IntegerField(widget=widgets.RadioSelectHorizontal, choices=[[1, "1 No Pressure"],
                                                                       [2, "2"],
                                                                       [3, "3 "],
                                                                       [4, "4"],
                                                                       [5, "5"],
                                                                       [6, "6"],
                                                                       [7, "7 A lot of pressure"]
                                                                       ],
                                      label='On a scale 1 to 7, how much pressure did you feel to stay under the recommended budget?')
    deviation = models.IntegerField(widget=widgets.RadioSelectHorizontal, choices=[[1, "1 Strongly Disagree"],
                                                                         [2, "2"],
                                                                         [3, "3 "],
                                                                         [4, "4"],
                                                                         [5, "5"],
                                                                         [6, "6"],
                                                                         [7, "7 Strongly Agree"]
                                                                         ],
                                    label='Please rate this statement on a scale 1 to 7: '
                                          ' "Deviating from the recommended budget at times was helpful for achieving the objective"'
                                    )
    measure = models.IntegerField(widget=widgets.RadioSelect, choices=[[1, "Yes"],
                                                                           [2, "No"]
                                                                           ],
                                      label='During Task 1, did your supervisor measure and provide feedback on your '
                                            'click efficiency (i.e., how well you stayed under the budget)?')
    notes = models.IntegerField(widget=widgets.RadioSelect, choices=[[1, "Yes"],
                                                                       [2, "No"]
                                                                       ],
                                  label='During Task 1, did you take any written notes about the obstacles you faced?')

    notesb = models.IntegerField(min=0, max=10000, label='How many separate notes (approximate) did you take throughout the experiment (put a 0 if none)?')
    notesc = models.IntegerField(widget=widgets.RadioSelect, choices=[[1, "Yes"],
                                                                     [2, "No"]
                                                                     ],
                                label='For Task 1, did your supervisor review your notes to make '
                                      'sure you thought through the objective? ')
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
                             label='Which scenario is best for achieving the main objective?'
                             )

class PageInherit(Page):
    form_model = 'player'

# PAGES

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

class MyPage(PageInherit):
    form_model = 'player'
    form_fields = ['gender', 'age', 'education', 'work','minesweeper', 'minesweeper2','videogames',
                   'budgetpressure','deviation','measure','notes', 'notesb', 'notesc' ]

page_sequence = [ Surrogation1, Surrogation2, Surrogation3, Surrogation4,
                 Surrogation5, Surrogation6, Surrogation7, Surrogation8, Surrogation9, MyPage ]