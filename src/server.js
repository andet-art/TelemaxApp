import "dotenv/config";
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import express from 'express';
import { applySecurity } from './middleware/security.js';
import authRoutes from './routes/authRoutes.js';
import twofaRoutes from './routes/twofaRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import adminStatsRoutes from './routes/adminStatsRoutes.js';
import adminOrderRoutes from './routes/adminOrderRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import builderRoutes from './routes/builderRoutes.js';
import adminCatalogRoutes from './routes/adminCatalogRoutes.js';
import adminUserRoutes from './routes/adminUserRoutes.js';
import adminInventoryRoutes from './routes/adminInventoryRoutes.js';
import adminExportRoutes from './routes/adminExportRoutes.js';
import adminContactRoutes from './routes/adminContactRoutes.js';
import adminProductRoutes from './routes/adminProductRoutes.js';

const app = express();
applySecurity(app);

// Health route
app.get('/api/health', (_req, res) => res.json({ ok: true }));

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(helmet());
app.set('trust proxy', 1);
app.use(rateLimit({ windowMs: 15*60*1000, max: 300 }));
app.use(express.json());

// Apply security middleware
applySecurity(app);

// Routes
app.get('/', (_req, res) => res.json({ status: 'OK', service: 'telemax-api' }));
app.use('/api/auth', authRoutes);
app.use('/api/me', profileRoutes);
app.use('/api/twofa', twofaRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/admin/stats', adminStatsRoutes);
app.use('/api/admin', adminOrderRoutes);
app.use('/api/builder', builderRoutes);
app.use('/api/admin', adminCatalogRoutes);
app.use('/api/admin', adminUserRoutes);
app.use('/api/admin', adminInventoryRoutes);
app.use('/api/admin', adminExportRoutes);
app.use('/api/admin', adminContactRoutes);
app.use('/api/admin', adminProductRoutes);

app.listen(process.env.PORT, () => {
  console.log(`✅ API running on port ${process.env.PORT}`);
});
