import { useEffect, useState } from 'react';

const normalizeResponse = (payload: any) => {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (!payload || typeof payload !== 'object') {
    return [];
  }

  return (
    payload.leaderboard ||
    payload.data ||
    payload.items ||
    payload.results ||
    payload.records ||
    []
  );
};

interface LeaderboardProps {
  apiBaseUrl: string;
}

const Leaderboard = ({ apiBaseUrl }: LeaderboardProps) => {
  const [entries, setEntries] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const endpoint = `${apiBaseUrl}/api/leaderboard/`;

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setEntries(normalizeResponse(data));
      })
      .catch((err) => {
        setError(`Failed to load leaderboard from ${endpoint}: ${err.message}`);
      });
  }, [apiBaseUrl]);

  return (
    <main>
      <h2>Leaderboard</h2>
      <p>Endpoint: /api/leaderboard/</p>
      {error && <div className="error">{error}</div>}
      <div className="cards">
        {entries.length === 0 ? (
          <div>No leaderboard entries found.</div>
        ) : (
          entries.map((entry) => (
            <article key={entry.rank ?? entry.userName ?? entry._id} className="card">
              <h3>{entry.userName ?? entry.name}</h3>
              <p>Team: {entry.teamName}</p>
              <p>Score: {entry.score}</p>
              <p>Rank: {entry.rank}</p>
              <p>Period: {entry.period}</p>
            </article>
          ))
        )}
      </div>
    </main>
  );
};

export default Leaderboard;
