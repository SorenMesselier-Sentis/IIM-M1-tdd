const express = require("express");
const { getHotelList } = require("./src/hotels.js");
const { getBookingList } = require("./src/reservations.js");
const { getHotelPictures } = require("./src/pictures.js");
const { getBookedList } = require("./src/booking.js");

import { NodeTracerProvider } from "@opentelemetry/sdk-trace-node";

const provider = new NodeTracerProvider();
provider.register();

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

app.get("/", (req, res) => {
  res.status(200).json(getHotelList());
});

app.get("/healt", (req, res) => {
  res.status(200).send("Hello world");
});

module.exports = { app };
