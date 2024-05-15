const express = require("express");
const functions = require("@google-cloud/functions-framework");
const { getHotelList } = require("./src/hotels.js");
const { getBookingList } = require("./src/reservations.js");
const { getHotelPictures } = require("./src/pictures.js");
const { getBookedList } = require("./src/booking.js");

const { CodeCovOpenTelemetry } = require("@codecov/node-codecov-opentelemetry");
const { NodeTracerProvider } = require("@opentelemetry/sdk-trace-node");
const { BatchSpanProcessor } = require("@opentelemetry/sdk-trace-base");
const { SpanKind } = require("@opentelemetry/api");

const sampleRate = 1;
const untrackedExportRate = 1;
const code = "production::v0.0.1"; //<environment>::<versionIdentifier>
const provider = new NodeTracerProvider();
provider.register();

const codecov = new CodeCovOpenTelemetry({
  repositoryToken: "af3846a3-b80f-4937-8b5d-17459b287fdb", //from repository settings page on Codecov.
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

const PORT = 5555;

app.listen(5555, () => {
  console.log(`Server running on port ${PORT}`);
});

// EX 1
app.get("/getHotels", (req, res) => {
  res.json(getHotelList());
});

// EX 2
app.get("/getReservations", (req, res) => {
  res.json(getBookingList());
});

// EX 3
app.get("/getHotelPictures", function (req, res) {
  const hotelId = req.params.hotelId;
  try {
    const photos = getHotelPictures(hotelId);
    res.json(photos);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// EX 4
app.get("/getBookedHotels", (req, res) => {
  res.json(getBookedList());
});

app.get("/health", (req, res) => {
  res.status(200).send("Hello world");
});

module.exports = { app };
