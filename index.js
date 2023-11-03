const express = require("express");
const app = express();
const PORT = 8080;

const { dbConnection } = require("./config/config");
app.use(express.json());

app.use('/products', require('./routes/products'));
app.use('/users', require('./routes/users.js'));
app.use('/orders', require('./routes/orders.js'));

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
