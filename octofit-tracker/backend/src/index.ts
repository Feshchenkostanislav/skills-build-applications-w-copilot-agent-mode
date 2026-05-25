import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { API_BASE_URL, HOST, MONGO_URI, PORT } from './config';
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

mongoose
  .connect(MONGO_URI)
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
