import { useEffect, useState } from 'react';

const normalizeResponse = (payload) => {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (!payload || typeof payload !== 'object') {
    return [];
  }

  return (
    payload.workouts ||
    payload.data ||
    payload.items ||
    payload.results ||
    payload.records ||
    []
  );
};

const Workouts = ({ apiBaseUrl }) => {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const endpoint = `${apiBaseUrl}/api/workouts/`;

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setWorkouts(normalizeResponse(data));
      })
      .catch((err) => {
        setError(`Failed to load workouts from ${endpoint}: ${err.message}`);
      });
  }, [apiBaseUrl]);

  return (
    <main>
      <h2>Workouts</h2>
      <p>Endpoint: /api/workouts/</p>
      {error && <div className="error">{error}</div>}
      <div className="cards">
        {workouts.length === 0 ? (
          <div>No workouts found.</div>
        ) : (
          workouts.map((workout) => (
            <article key={workout.id ?? workout._id ?? workout.name} className="card">
              <h3>{workout.name}</h3>
              <p>{workout.description}</p>
              <p>Duration: {workout.durationMinutes ?? 'N/A'} min</p>
              <p>Intensity: {workout.intensity ?? 'N/A'}</p>
              {Array.isArray(workout.exercises) && (
                <div>
                  <strong>Exercises</strong>
                  <ul>
                    {workout.exercises.map((exercise, index) => (
                      <li key={index}>{exercise.name}: {exercise.reps}</li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))
        )}
      </div>
    </main>
  );
};

export default Workouts;
