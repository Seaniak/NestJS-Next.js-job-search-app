const express = require('express');
global.userData = require('./Users-mockdata');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const Api = require('./routes/api/api');
new Api(app);

app.use('/api/users', require('./routes/api/api'));

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));