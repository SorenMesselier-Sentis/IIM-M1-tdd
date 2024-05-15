const express = require("express");
const functions = require("@google-cloud/functions-framework");
const { getHotelList } = require("./src/hotels.js");
const { getBookingList } = require("./src/reservations.js");
const { getHotelPictures } = require("./src/pictures.js");
const { getBookedList } = require("./src/booking.js");

const { NodeTracerProvider } = require("@opentelemetry/sdk-trace-node");

const provider = new NodeTracerProvider();
provider.register();

const app = express();

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// EX 1
functions.http("getHotels", (req, res) => {
  res.json(getHotelList());
});

// EX 2
functions.http("getReservations", (req, res) => {
  res.json(getBookingList());
});

// EX 3
functions.http("getHotelPictures", function (req, res) {
  const hotelId = req.params.hotelId;
  try {
    const photos = getHotelPictures(hotelId);
    res.json(photos);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// EX 4
functions.http("getBookedHotels", (req, res) => {
  res.json(getBookedList());
});

functions.http("health", (req, res) => {
  res.status(200).send("Hello world");
});

module.exports = { app };
