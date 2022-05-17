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
    name_in_url = 'instructionsA1'
    players_per_group = None
    num_rounds = 1


class Subsession(BaseSubsession):
    pass


class Group(BaseGroup):
    pass


class Player(BasePlayer):
    q1 = models.IntegerField(choices=[[1, 'How well you efficiently mark all the bombs on each grid'],
                                      [2, 'How many grids you finish by left-clicking all the squares without bombs'],
                                      [3, 'How well you prioritize the grids of greatest concern and whether '
                                          'you efficiently mark a sufficient number of bombs within those grids  '],
                                      [4, 'How well you stay under the recommended budget']], blank=False,
                             label='1. In Task 1, your overall objective will be evaluated and compensated on')
    q2 = models.IntegerField(choices=[[1, 'When you have used up your 420 clicks limit for that period'],
                                      [2,
                                       'When you have reached the clicks that are recommended in the budget for that specific grid'],
                                      [3,
                                       'When you have used all the clicks for that period that are recommended in the budget']],
                             blank=False,
                             label='2. For each period in task 1, you will be unable to click a square with the left-mouse button:')
    q3 = models.IntegerField(choices=[[1, 'Cost of $0.01'],
                                      [2, 'Benefit of $0.10'],
                                      [3, 'Benefit of $0.11'],
                                      [4, 'No benefit or cost']], blank=False,
                             label='3. As described in the game directions, '
                                   'each click costs $0.01 and the penalty for a bomb not found is $0.11. '
                                   'Using the rules of the game, how would your financial compensation be affected '
                                   'by using one click to find one more bomb if there were 10 total bombs on the '
                                   'grid and you had already found 8?')
    q4 = models.IntegerField(choices=[[1, '15th Bomb'],
                                      [2, '12th Bomb'],
                                      [3, '10th Bomb'],
                                      [4, '8th Bomb']], blank=False,
                             label='4.  Pretend that the max penalty you could receive for not marking a single bomb on a '
                                   'grid is $0.80. If each bomb was assigned a $0.08 penalty on that grid, after marking '
                                   'which bomb would you stop receiving penalties for unmarked bombs:')
