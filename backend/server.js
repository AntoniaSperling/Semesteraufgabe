const express = require('express');
const cors = require('cors');
const db = require('./db');
const routesDienste = require('./routes/dienste.routes');
const routesUsers = require('./routes/users.routes')

const app = express();
const PORT = 3000;

app.use(express.json());
// enable cors for all requests
app.use(cors());
app.use('/dienste', routesDienste);
app.use('/users', routesUsers);

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server started and listening on port ${PORT} ... `);
    }
});
