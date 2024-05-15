const express = require("express");
const { getHotelList } = require("./src/hotels.js");
const { getBookingList } = require("./src/reservations.js");
const { getHotelPictures } = require("./src/pictures.js");
const { getBookedList } = require("./src/booking.js");

import { CodeCovOpenTelemetry } from "@codecov/node-codecov-opentelemetry";
import { NodeTracerProvider } from "@opentelemetry/sdk-trace-node";
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-base";
import { SpanKind } from "@opentelemetry/api";

const sampleRate = 1;
const untrackedExportRate = 1;
const code = "production::v0.0.1"; //<environment>::<versionIdentifier>
const provider = new NodeTracerProvider();
provider.register();

const codecov = new CodeCovOpenTelemetry({
  repositoryToken: "", //from repository settings page on Codecov.
  environment: "production", //or others as appropriate
  versionIdentifier: "v0.0.2", //semver, commit SHA, etc
  filters: {
    allowedSpanKinds: [SpanKind.SERVER],
  },
  codecovEndpoint: "api.codecov.io",
  sampleRate,
  untrackedExportRate,
  code,
});

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// EX 1
app.get("/hotels", (req, res) => {
  res.json(getHotelList());
});

// EX 2
app.get("/reservations", (req, res) => {
  res.json(getBookingList());
});

// EX 3
app.get("/hotels/:hotelId/photos", function (req, res) {
  const hotelId = req.params.hotelId;
  try {
    const photos = getHotelPictures(hotelId);
    res.json(photos);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// EX 4
app.get("/booked-hotels", (req, res) => {
  res.json(getBookedList());
});


app.get('/', (req, res) => {
    res.status(200).json(getHotelList());
});

app.get('/healt', (req, res) => {
    res.status(200).send("Hello world")
