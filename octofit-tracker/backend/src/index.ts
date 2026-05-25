import { startServer } from './server';

startServer().catch((err) => {
  console.error('Server startup failed:', err);
  process.exit(1);
});
