import express from 'express';
import userRouter from './routes/users.routes.js';
import { isLogger } from './middlewares/logged.middleware.js';
import path from 'path';
import {fileURLToPath} from 'url';
import connection from './connection.js';
import { connection2 } from './mongo.connect.js';
import userRouter2 from './routes/users2.routes.js';
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;


// Settings
app.set('title', 'Express Course Pablo España');
app.set('port', port);
// Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(isLogger);
app.use(express.static(__dirname + '/public'));
console.log('Static files are being served from the public directory', __dirname + '/public');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: 'http://127.0.0.1:5500'
}));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.use('/api/users', userRouter);
app.use('/users2/', userRouter2);

app.listen(app.get('port'), () => {
  console.log(`${app.get('title')} app listening at http://localhost:${app.get('port')}`);
});

// exortado por defecto
export default app;