import express from 'express';
import morgan from 'morgan';


// Create Express server
const app = express();

// Express configuration
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


export { app };
