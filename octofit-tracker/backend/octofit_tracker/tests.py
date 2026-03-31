from django.test import TestCase
from rest_framework.test import APIClient
from .models import User, Team, Activity, Workout, Leaderboard


class ApiRootTest(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_api_root(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIn('users', data)
        self.assertIn('teams', data)
        self.assertIn('activities', data)
        self.assertIn('leaderboard', data)
        self.assertIn('workouts', data)


class UserModelTest(TestCase):
    def test_create_user(self):
        team = Team.objects.create(name='Marvel')
        user = User.objects.create(name='Tony Stark', email='tony@stark.com', team=team)
        self.assertEqual(user.name, 'Tony Stark')
        self.assertEqual(user.team.name, 'Marvel')

class TeamModelTest(TestCase):
    def test_create_team(self):
        team = Team.objects.create(name='DC')
        self.assertEqual(team.name, 'DC')

class ActivityModelTest(TestCase):
    def test_create_activity(self):
        team = Team.objects.create(name='Marvel')
        user = User.objects.create(name='Bruce Banner', email='bruce@hulk.com', team=team)
        activity = Activity.objects.create(user=user, type='Running', duration=30, date='2026-03-25')
        self.assertEqual(activity.type, 'Running')

class WorkoutModelTest(TestCase):
    def test_create_workout(self):
        workout = Workout.objects.create(name='Pushups', description='Do 20 pushups')
        self.assertEqual(workout.name, 'Pushups')

class LeaderboardModelTest(TestCase):
    def test_create_leaderboard(self):
        team = Team.objects.create(name='Marvel')
        user = User.objects.create(name='Steve Rogers', email='steve@cap.com', team=team)
        leaderboard = Leaderboard.objects.create(user=user, score=100)
        self.assertEqual(leaderboard.score, 100)
