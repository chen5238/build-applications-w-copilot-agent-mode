
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">OctoFit Tracker</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/teams">Teams</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/workouts">Workouts</Link></li>
            return (
              <Router>
                <nav className="navbar navbar-expand-lg navbar-dark shadow">
                  <div className="container-fluid">
                    <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
                      <img src={process.env.PUBLIC_URL + "/octofitapp-small.png"} alt="OctoFit Logo" className="octofit-logo" />
                      OctoFit Tracker
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                          <Link className="nav-link" to="/activities">Activities</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/teams">Teams</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/users">Users</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/workouts">Workouts</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                <div className="container mt-5">
                  <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                      <Routes>
                        <Route path="/" element={
                          <div className="card shadow text-center p-5 bg-light">
                            <h1 className="display-5 mb-3">Welcome to <span className="text-primary">OctoFit Tracker</span>!</h1>
                            <p className="lead">あなたのフィットネス活動を記録し、チームで競い合い、リーダーボードで順位を確認しましょう。</p>
                            <div className="d-flex justify-content-center gap-2 mt-4">
                              <Link to="/activities" className="btn btn-info">Activities</Link>
                              <Link to="/leaderboard" className="btn btn-success">Leaderboard</Link>
                              <Link to="/teams" className="btn btn-warning">Teams</Link>
                              <Link to="/users" className="btn btn-secondary">Users</Link>
                              <Link to="/workouts" className="btn btn-primary">Workouts</Link>
                            </div>
                          </div>
                        } />
                        <Route path="/activities" element={<Activities />} />
                        <Route path="/leaderboard" element={<Leaderboard />} />
                        <Route path="/teams" element={<Teams />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/workouts" element={<Workouts />} />
                      </Routes>
                    </div>
                  </div>
                </div>
              </Router>
            );
