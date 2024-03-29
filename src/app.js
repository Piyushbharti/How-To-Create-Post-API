const express = require("express");
require("./db/conn");

const Student = require("./models/user");
const Studentrouter = require("./router/user")

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(Studentrouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
