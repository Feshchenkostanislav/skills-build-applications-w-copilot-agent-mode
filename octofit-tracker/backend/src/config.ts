export const PORT = Number(process.env.PORT ?? 8000);
export const HOST = process.env.HOST ?? '0.0.0.0';
export const CODESPACE_NAME = process.env.CODESPACE_NAME;
export const MONGO_URI = process.env.MONGO_URI ?? 'mongodb://localhost:27017/octofit_db';

export const API_BASE_URL = CODESPACE_NAME
  ? `https://${CODESPACE_NAME}-8000.githubpreview.dev`
  : `http://localhost:${PORT}`;
