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
