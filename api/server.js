// Load .env trước tất cả mọi thứ

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const rootRouter = require("./src/router");
const responseHandle = require("./src/middlewares/responseHandle");
const notFoundHandle = require("./src/middlewares/notFoundHandle");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// parse JSON
app.use(express.json());

// parse form-urlencoded
app.use(express.urlencoded({ extended: true }));

// custom response
app.use(responseHandle);

// routes
app.use("/api", rootRouter);

// 404 handler
app.use(notFoundHandle);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
