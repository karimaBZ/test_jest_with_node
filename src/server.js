import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes';

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;
