#!/usr/bin/env node
"use strict";
const express = require("express");
const body = require("body");
const colors = require("colors");
let port = 5000;

if (process.argv[2]) {
  port = process.argv[2];
}

let app = express();

app.use(
  (req, res, next) => {
    body(req, res, (err, body) => {
      if (err) {
        console.log(`Error parsing body: ${err}`.rainbow);
      }
      req.body = body;
      return next();
    });
  }
);

app.get("*", (req, res) => {
  console.log(`[GET] `.green);
  console.log(`Body: ${JSON.stringify(req.body)}`.green);
  console.log(`Params: ${JSON.stringify(req.params)}`.green);
  console.log(`Query: ${JSON.stringify(req.query)}`.green);
  res.status(200).send("ok");
});

app.post("*", (req, res) => {
  console.log(`[POST]`.blue);
  console.log(`Body: ${JSON.stringify(req.body)}`.blue);
  console.log(`Params: ${JSON.stringify(req.params)}`.blue);
  console.log(`Query: ${JSON.stringify(req.query)}`.blue);
  res.status(200).send("ok");
});

app.put("*", (req, res) => {
  console.log(`[PUT]`.yellow);
  console.log(`Body: ${JSON.stringify(req.body)}`.yellow);
  console.log(`Params: ${JSON.stringify(req.params)}`.yellow);
  console.log(`Query: ${JSON.stringify(req.query)}`.yellow);
  res.status(200).send("ok");
});

app.delete("*", (req, res) => {
  console.log(`[DELETE]`.red);
  console.log(`Body: ${JSON.stringify(req.body)}`.red);
  console.log(`Params: ${JSON.stringify(req.params)}`.red);
  console.log(`Query: ${JSON.stringify(req.query)}`.red);
  res.status(200).send("ok");
});

app.listen(port, () => console.log("Fake endpoint listening on port "+port));
