from os import environ

exp_defaults = dict(num_demo_participants=1,
                    app_sequence=[ 'instructionsA1','instructionsB1', 'instructionsC1','instructionsD1', 'backend', 'surrogation','bret',  'demographics'],
                    time_for_practice=10,
                    max_clicks=10,
                    endowment=20,
                    left_click_cost=0.01,
                    freeze_seconds=5)
SESSION_CONFIGS = [
    dict(
        name='exp1_1',
        display_name="experiment 1; condition 1",
        **exp_defaults,
        control = True
    ),
    dict(
        name='exp1_2',
        display_name="exp 1-2; AND exp 2-1:  performance measure condition",
        **exp_defaults,
        performance=True,
        condition2=True
    ),

    dict(
        name='exp2_2',
        display_name="exp 2; cond 2;  Note Taking (Private)",
        **exp_defaults,
        performance=True,
        notes=True,
        condition3= True,
        public=False,
    ),
    dict(
        name='exp2_3',
        display_name="exp 2; cond 3;  Note Taking (Public)",
        **exp_defaults,
        performance=True,
        notes=True,
        condition4= True,
        public=True,
    ),

]
ROOMS = [
    dict(
        name='1',
        display_name='1'),
    dict(
        name='2',
        display_name='2'
    ),
    dict(
        name='3',
        display_name='3'
    ),
    dict(
        name='4',
        display_name='4'
    ),
    ]


# if you set a property in SESSION_CONFIG_DEFAULTS, it will be inherited by all configs
# in SESSION_CONFIGS, except those that explicitly override it.
# the session config can be accessed from methods in your apps as self.session.config,
# e.g. self.session.config['participation_fee']

SESSION_CONFIG_DEFAULTS = dict(
    real_world_currency_per_point=0.02, participation_fee=0.00, doc=""
)
EXTENSION_APPS = ['backend']
# ISO-639 code
# for example: de, fr, ja, ko, zh-hans
LANGUAGE_CODE = 'en'

# e.g. EUR, GBP, CNY, JPY
REAL_WORLD_CURRENCY_CODE = 'USD'
USE_POINTS = False
POINTS_DECIMAL_PLACES = 2
REAL_WORLD_CURRENCY_DECIMAL_PLACES = 2
ADMIN_USERNAME = 'admin'
# for security, best to set admin password in an environment variable
ADMIN_PASSWORD = environ.get('OTREE_ADMIN_PASSWORD')

DEMO_PAGE_INTRO_HTML = """ """

SECRET_KEY = 'gtk67-^&4^!8rzlcvpbs!)iv8&n#^fy*dyas9z3#(i@0xf3g$q'

# if an app is included in SESSION_CONFIGS, you don't need to list it here
INSTALLED_APPS = ['otree']
