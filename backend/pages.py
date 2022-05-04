from otree.api import Currency as c, currency_range
from ._builtin import Page, WaitPage
from .models import Constants, Grid
import json
from pprint import pprint
from django.db.models import Sum


class Practice(Page):
    live_method = 'register_event'


class BudgetRecommendations(Page):
    pass


class Trade(Page):
    live_method = 'register_event'

    def vars_for_template(self):
        c = self.session.config
        notes = c.get('notes', False)
        if not notes:
            notes_message = ''
        else:
            if c.get('public'):
                notes_message = "Please type notes in this box about obstacles and your approach for achieving the objective. Your supervisor will review the notes to make sure you thought through your approach sufficiently. "
            else:
                notes_message = " Please type notes in this box about obstacles and your approach for achieving the objective. These notes are for your own benefit and will not be reviewed by anyone. You may refer to them in the future to make adjustments."
        return dict(notes=notes, notes_message=notes_message)

    def post(self):
        print(self.request.POST)
        data = self.request.POST.dict()
        if data:
            data = {k: v for k, v in data.items() if v != '' and k != 'csrfmiddlewaretoken'}
            total_clicks = data.get('total_clicks', None)
            if total_clicks:
                self.player.total_clicks = int(total_clicks)

            budget_counter = data.get('budget_counter', None)
            if budget_counter:
                self.player.budget_counter = int(budget_counter)

            grids = self.player.grids.filter(practice=False)
            for g in grids:
                g.used_clicks = int(data.get(f'used_clicks_{g.number}', 0))
                g.total_penalty = float(data.get(f'total_penalty_{g.number}', None))
                g.clicks100 = int(data.get(f'clicks100_{g.number}', 0))
                g.clicks80 = int(data.get(f'clicks80_{g.number}', 0))
                g.note = data.get(f'note_{g.number}')
            Grid.objects.bulk_update(grids, ['used_clicks', 'clicks80', 'clicks100', 'total_penalty', 'note'])
            self.player.total_penalty = round(
                self.player.grids.filter(practice=False).aggregate(Sum('total_penalty')).get('total_penalty__sum', 0),
                2)
        return super().post()

    def before_next_page(self):
        self.player.set_payoff()


class Performance(Page):
    def is_displayed(self):
        return self.session.config.get('performance', False)


page_sequence = [
    # Practice,
    # BudgetRecommendations,
    Trade,
    Performance

]
