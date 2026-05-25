import { useEffect, useState } from 'react';

const normalizeResponse = (payload) => {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (!payload || typeof payload !== 'object') {
    return [];
  }

  return (
    payload.activities ||
    payload.data ||
    payload.items ||
    payload.results ||
    payload.records ||
    []
  );
};

const Activities = ({ apiBaseUrl }) => {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const endpoint = `${apiBaseUrl}/api/activities/`;

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setActivities(normalizeResponse(data));
      })
      .catch((err) => {
        setError(`Failed to load activities from ${endpoint}: ${err.message}`);
      });
  }, [apiBaseUrl]);

  return (
    <main>
      <h2>Activities</h2>
      <p>Endpoint: /api/activities/</p>
      {error && <div className="error">{error}</div>}
      <div className="cards">
        {activities.length === 0 ? (
          <div>No activities found.</div>
        ) : (
          activities.map((activity) => (
            <article key={activity.id ?? activity._id ?? `${activity.type}-${activity.date}`} className="card">
              <h3>{activity.type}</h3>
              <p>Duration: {activity.durationMinutes ?? 'N/A'} minutes</p>
              <p>Calories: {activity.caloriesBurned ?? 'N/A'}</p>
              <p>Distance: {activity.distanceKm ?? 0} km</p>
              <p>Date: {activity.date ? new Date(activity.date).toLocaleString() : 'N/A'}</p>
            </article>
          ))
        )}
      </div>
    </main>
  );
};

export default Activities;
