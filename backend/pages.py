from otree.api import Currency as c, currency_range
from ._builtin import Page, WaitPage
from .models import Constants, Grid
import json
from pprint import pprint


class Trade(Page):
    live_method = 'register_event'

    def post(self):
        data = self.request.POST.dict()
        if data:
            total_clicks = data.get('total_clicks')
            if total_clicks:
                self.player.total_clicks = int(total_clicks)
                self.player.save()
            grids = self.player.grids.all()
            for g in grids:
                g.clicks = data.get(f'clicks_{g.number}')
                g.clicks80 = data.get(f'clicks80_{g.number}')
            Grid.objects.bulk_update(grids, ['clicks', 'clicks80'])
        return super().post()


class Results(Page):
    pass


page_sequence = [

    Trade,
    Results

]
