import express from 'express';
import path from 'path';

import { droidRoutes } from './api/radar.routes';

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 8888);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public'), { maxAge: 31557600000 }));

droidRoutes(app);

export default app;
