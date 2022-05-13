from otree.api import *

doc = """
Instructions
"""


class C(BaseConstants):
    NAME_IN_URL = 'Instructions'
    PLAYERS_PER_GROUP = None
    NUM_ROUNDS = 1
    


class Subsession(BaseSubsession):
    pass


class Group(BaseGroup):
    pass


class Player(BasePlayer):
    q1 = models.IntegerField(choices=[[1, 'How well you efficiently mark all the bombs on each grid'],
                                     [2, 'How many grids you finish by left-clicking all the squares without bombs'],
                                     [3, 'How well you prioritize the grids of greatest concern and whether '
                                         'you efficiently mark a sufficient number of bombs within those grids  '],
                                     [4,'How well you stay under the recommended budget']], blank=False,
                            label= '1. In Task 1, your overall objective will be evaluated and compensated on')
    q2 = models.IntegerField(choices=[[1, 'When you have used up your 420 clicks limit for that period'],
                                     [2, 'When you have reached the clicks that are recommended in the budget for that specific grid'],
                                     [3, 'When you have used all the clicks for that period that are recommended in the budget']], blank=False,
                            label= '2. For each period in task 1, you will be unable to click a square with the left-mouse button:')
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


def q1_error_message(player, q1):
    if q1 != 3:
        return 'Wrong answer, Please try again'
def q2_error_message(player, q2):
    if q2 != 1:
        return 'Wrong answer, Please try again'
def q3_error_message(player, q3):
    if q3 != 1:
        return 'The correct answer is cost of $0.01 since you already found 80 percent of the bombs, please resubmit the correct answer'
def q4_error_message(player, q4):
    if q4 != 3:
        return 'The correct answer is the 10th bomb, $0.80/.08 = 10 bombs, please resubmit the correct answer'



class PageInherit(Page):
    form_model = 'player'

# PAGES

class Instructions(Page):
    pass
class Instructions2(Page):
    pass
class Instructions3(PageInherit):
    form_model = 'player'
    form_fields = ['q1', 'q2']
class Instructions4(PageInherit):
    form_model = 'player'
    form_fields = ['q3' ]
class Instructions5(PageInherit):
    form_model = 'player'
    form_fields = [ 'q4' ]



page_sequence = [Instructions, Instructions2, Instructions3,Instructions4, Instructions5]