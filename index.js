const express = require("express");
const app = express();
const PORT = 3001;
const cors = require('cors');
const { handleTypeError }= require('./middleware/errors');
const { dbConnection } = require("./config/config");

app.use(express.json());
app.use(cors());
dbConnection();

app.use('/products', require('./routes/products'));
app.use('/users', require('./routes/users.js'));
app.use('/orders', require('./routes/orders.js'));

app.use(handleTypeError)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
