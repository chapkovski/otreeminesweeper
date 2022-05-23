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
    name_in_url = 'demographics'
    players_per_group = None
    num_rounds = 1


class Subsession(BaseSubsession):
    pass


class Group(BaseGroup):
    pass


class Player(BasePlayer):
    name = models.StringField(blank=False,
                              label='Please type your First and Last name to receive extra credit for participating')
    age = models.IntegerField(min=15, max=99)
    education = models.IntegerField(min=0, max=20,
                                    label='How many years of full-time education have you completed after high school? ')
    work = models.IntegerField(min=0, max=60, label='How many years of full-time work experience do you have? ')
    minesweeper = models.IntegerField(widget=widgets.RadioSelect, choices=[[1, "Yes"],
                                                                           [2, "No"]
                                                                           ],
                                      label='Before Today, have you played minesweeper before?')
    gender = models.IntegerField(widget=widgets.RadioSelect, choices=[[1, "Female"],
                                                                      [2, "Male"],
                                                                      [3, "Prefer not to Say"]
                                                                           ],
                                      label='Please select your gender')

    minesweeper2 = models.IntegerField(min=0, max=10000,
                                       label='How many total (approximate) hours of minesweeper have you played before (put a 0 if never played)?')
    videogames = models.IntegerField(min=0, max=1000,
                                     label='Other than minesweeper, how many hours of video games do you play in a week?')

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

    notesb = models.IntegerField(min=0, max=100,
                                 label='How many separate notes (approximate) did you take throughout the experiment (put a 0 if none)?')
    notesc = models.IntegerField(widget=widgets.RadioSelect, choices=[[1, "Yes"],
                                                                      [2, "No"]
                                                                      ],
                                 label='For Task 1, did your supervisor review your notes to make '
                                       'sure you thought through the objective? ')
