from django.views.generic import View
from django.http import HttpResponse, JsonResponse

from .models import Grid

from django.shortcuts import redirect, reverse
import pandas as pd

from django.utils import timezone


class PandasExport(View):
    display_name = 'Grid data export'
    url_name = 'export_grid_data'
    url_pattern = fr'grids/export'
    content_type = 'text/csv'

    def get(self, request, *args, **kwargs):
        grids = Grid.objects.filter(clicks80__isnull=False).values('owner__participant__code', 'owner__session__code', 'owner__round_number',
                                          'number', 'used_clicks', 'clicks80', 'clicks100')
        df = pd.DataFrame(data=grids)
        if df is not None and not df.empty:
            timestamp = timezone.now()
            curtime = timestamp.strftime('%m_%d_%Y_%H_%M_%S')
            csv_data = df.to_csv(index=False)
            response = HttpResponse(csv_data, content_type=self.content_type)
            filename = f'grids_{curtime}.csv'
            response['Content-Disposition'] = f'attachment; filename={filename}'
            return response
        else:
            return redirect(reverse('ExportIndex'))
