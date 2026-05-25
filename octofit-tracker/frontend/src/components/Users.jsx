import { useEffect, useState } from 'react';

const codespaceName = import.meta.env.VITE_CODESPACE_NAME;

const normalizeResponse = (payload) => {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (!payload || typeof payload !== 'object') {
    return [];
  }

  return (
    payload.users ||
    payload.data ||
    payload.items ||
    payload.results ||
    payload.records ||
    []
  );
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const endpoint = codespaceName
      ? `https://${codespaceName}-8000.app.github.dev/api/users/`
      : 'http://localhost:8000/api/users/';

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setUsers(normalizeResponse(data));
      })
      .catch((err) => {
        setError(`Failed to load users from ${endpoint}: ${err.message}`);
      });
  }, []);

  return (
    <main>
      <h2>Users</h2>
      <p>Endpoint: /api/users/</p>
      {error && <div className="error">{error}</div>}
      <div className="cards">
        {users.length === 0 ? (
          <div>No users found.</div>
        ) : (
          users.map((user) => (
            <article key={user.id ?? user._id ?? user.email} className="card">
              <h3>{user.name || 'Unnamed user'}</h3>
              <p>Email: {user.email ?? 'N/A'}</p>
              <p>Role: {user.role ?? 'member'}</p>
              {user.team && <p>Team: {user.team.name || user.team}</p>}
            </article>
          ))
        )}
      </div>
    </main>
  );
};

export default Users;
