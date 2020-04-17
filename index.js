require('./database/mongoClient');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

app.use('/api/v1', require('./router'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

console.log('CORS-enabled web server listening on port 80');