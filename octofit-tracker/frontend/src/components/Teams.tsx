import { useEffect, useState } from 'react';

const normalizeResponse = (payload: any) => {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (!payload || typeof payload !== 'object') {
    return [];
  }

  return (
    payload.teams ||
    payload.data ||
    payload.items ||
    payload.results ||
    payload.records ||
    []
  );
};

interface TeamsProps {
  apiBaseUrl: string;
}

const Teams = ({ apiBaseUrl }: TeamsProps) => {
  const [teams, setTeams] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const endpoint = `${apiBaseUrl}/api/teams/`;

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setTeams(normalizeResponse(data));
      })
      .catch((err) => {
        setError(`Failed to load teams from ${endpoint}: ${err.message}`);
      });
  }, [apiBaseUrl]);

  return (
    <main>
      <h2>Teams</h2>
      <p>Endpoint: /api/teams/</p>
      {error && <div className="error">{error}</div>}
      <div className="cards">
        {teams.length === 0 ? (
          <div>No teams found.</div>
        ) : (
          teams.map((team) => (
            <article key={team.id ?? team._id ?? team.name} className="card">
              <h3>{team.name}</h3>
              <p>{team.description ?? 'No description available.'}</p>
              <p>Members: {Array.isArray(team.members) ? team.members.length : team.members ?? 'N/A'}</p>
            </article>
          ))
        )}
      </div>
    </main>
  );
};

export default Teams;
