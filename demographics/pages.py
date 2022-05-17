from otree.api import Currency as c, currency_range
from ._builtin import Page, WaitPage
from .models import Constants


class MyPage(Page):
    form_model = 'player'
    form_fields = ['gender', 'age', 'education', 'work','minesweeper', 'minesweeper2','videogames',
                   'budgetpressure','deviation','measure','notes', 'notesb', 'notesc' ]



page_sequence = [MyPage]
