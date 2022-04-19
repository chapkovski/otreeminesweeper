from otree.api import Currency as c, currency_range
from ._builtin import Page, WaitPage
from .models import Constants, Grid
import json
from pprint import pprint
class Practice(Page):
    live_method = 'register_event'

class Trade(Page):
    live_method = 'register_event'

    def post(self):
        print(self.request.POST)
        data = self.request.POST.dict()
        if data:
            data = {k: int(v) for k, v in data.items() if v != '' and k!='csrfmiddlewaretoken'}
            total_clicks = data.get('total_clicks', None)
            if total_clicks:
                self.player.total_clicks = int(total_clicks)
                self.player.save()
            grids = self.player.grids.all()
            for g in grids:
                g.used_clicks = data.get(f'used_clicks_{g.number}', None)
                g.clicks100 = data.get(f'clicks100_{g.number}', None)
                g.clicks80 = data.get(f'clicks80_{g.number}', None)
            Grid.objects.bulk_update(grids, ['used_clicks', 'clicks80','clicks100'])
        return super().post()


class Results(Page):
    pass


page_sequence = [
    Practice,

    Trade,
    # Results

]
