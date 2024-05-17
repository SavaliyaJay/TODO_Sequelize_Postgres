// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// require('dotenv').config();
// const cors = require('cors');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

// const Router = require('./routers/index');

// app.use(Router);

// require('./config/db');

// // connectToDatabase();

// app.listen(process.env.PORT, () => {
//     console.log('server started');
//     }
// );

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const Router = require('./routers/index');
app.use(Router);

const { connectDB } = require('./config/db');

connectDB();

app.listen(process.env.PORT, () => {
    console.log('server started');
    }
);
