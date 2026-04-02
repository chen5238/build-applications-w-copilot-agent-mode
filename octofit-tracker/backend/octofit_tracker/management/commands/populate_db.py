from django.core.management.base import BaseCommand
from octofit_tracker.models import Team, User, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # MongoDBコレクションを直接drop
        from pymongo import MongoClient
        client = MongoClient('mongodb://localhost:27017')
        db = client['octofit_db']
        db.users.drop()
        db.teams.drop()
        db.activities.drop()
        db.leaderboard.drop()
        db.workouts.drop()
        # emailユニークインデックス作成
        db.users.create_index('email', unique=True)

        # チーム作成
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # ユーザー作成
        ironman = User.objects.create(name='ironman', email='ironman@marvel.com', team=marvel)
        spiderman = User.objects.create(name='spiderman', email='spiderman@marvel.com', team=marvel)
        batman = User.objects.create(name='batman', email='batman@dc.com', team=dc)
        superman = User.objects.create(name='superman', email='superman@dc.com', team=dc)

        # アクティビティ作成
        from datetime import date
        Activity.objects.create(user=ironman, type='run', duration=30, date=date.today())
        Activity.objects.create(user=spiderman, type='cycle', duration=45, date=date.today())
        Activity.objects.create(user=batman, type='swim', duration=25, date=date.today())
        Activity.objects.create(user=superman, type='run', duration=60, date=date.today())

        # ワークアウト作成
        w1 = Workout.objects.create(name='Morning Cardio', description='Cardio for all heroes')
        w2 = Workout.objects.create(name='Strength Training', description='Strength for DC')
        w3 = Workout.objects.create(name='Agility Training', description='Agility for Marvel')
        w1.suggested_for.set([ironman, spiderman, batman, superman])
        w2.suggested_for.set([batman, superman])
        w3.suggested_for.set([ironman, spiderman])

        # リーダーボード作成
        Leaderboard.objects.create(user=ironman, score=100)
        Leaderboard.objects.create(user=spiderman, score=90)
        Leaderboard.objects.create(user=batman, score=95)
        Leaderboard.objects.create(user=superman, score=110)

        self.stdout.write(self.style.SUCCESS('Test data populated successfully.'))
