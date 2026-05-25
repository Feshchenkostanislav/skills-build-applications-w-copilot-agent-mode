import express from 'express';
import cors from 'cors';
import { API_BASE_URL, CODESPACE_NAME, HOST, PORT } from './config';
import { connectDatabase } from './config/database';
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
    codespaceName: CODESPACE_NAME ?? null,
  });
});

registerRoutes(app);

export const startServer = async () => {
  await connectDatabase();
  console.log('Connected to MongoDB');
  console.log(`Codespace URL base: ${API_BASE_URL}`);

  app.listen(PORT, HOST, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
    console.log(`API base URL: ${API_BASE_URL}`);
  });
};

export default app;
