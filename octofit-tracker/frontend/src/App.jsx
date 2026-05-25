import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Activities from './components/Activities.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import Teams from './components/Teams.jsx';
import Users from './components/Users.jsx';
import Workouts from './components/Workouts.jsx';

const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <h1>OctoFit Tracker</h1>
          <p>
            Define <strong>VITE_CODESPACE_NAME</strong> in <code>.env.local</code>{' '}
            for the Codespaces API URL.
          </p>
          <p className="app-note">
            API base: <code>{apiBaseUrl}</code>
          </p>
        </div>
        <nav>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/teams">Teams</NavLink>
          <NavLink to="/activities">Activities</NavLink>
          <NavLink to="/workouts">Workouts</NavLink>
          <NavLink to="/leaderboard">Leaderboard</NavLink>
        </nav>
      </header>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Users apiBaseUrl={apiBaseUrl} />} />
          <Route path="/users" element={<Users apiBaseUrl={apiBaseUrl} />} />
          <Route path="/teams" element={<Teams apiBaseUrl={apiBaseUrl} />} />
          <Route path="/activities" element={<Activities apiBaseUrl={apiBaseUrl} />} />
          <Route path="/workouts" element={<Workouts apiBaseUrl={apiBaseUrl} />} />
          <Route path="/leaderboard" element={<Leaderboard apiBaseUrl={apiBaseUrl} />} />
          <Route path="*" element={<Users apiBaseUrl={apiBaseUrl} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
