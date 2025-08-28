import "dotenv/config";
import 'dotenv/config';
import('./src/server.js').catch(err => {
  console.error('Fatal boot error:', err);
  process.exit(1);
});
