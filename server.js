const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const userRoutes = require('./routes/userRoutes');

app.use('/api', userRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});