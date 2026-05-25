import express from 'express';
import cors from 'cors';
import { API_BASE_URL, HOST, PORT } from './config';
import { connectDatabase } from './database';
import { registerRoutes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/config', (_req, res) => {
  res.json({
    apiUrl: API_BASE_URL,
    port: PORT,
  });
});

registerRoutes(app);

connectDatabase()
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, HOST, () => {
      console.log(`Backend running on http://localhost:${PORT}`);
      console.log(`API base URL: ${API_BASE_URL}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
