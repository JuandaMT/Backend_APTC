const express = require("express");
const app = express();
const PORT = 8080;

const { handleTypeError }= require('./middleware/errors');
const { dbConnection } = require("./config/config");

app.use(express.json());
dbConnection();

app.use('/products', require('./routes/products'));
app.use('/users', require('./routes/users.js'));
app.use('/orders', require('./routes/orders.js'));

app.use(handleTypeError)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
