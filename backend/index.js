const express = require("express"); // lightweight framework for node (creates http server to listen for requests)
const axios = require("axios"); // library for http requests
const cors = require("cors"); // allows requests from different domains/origins
require("dotenv").config(); // environment variables

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());