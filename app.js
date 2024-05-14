const express = require("express");
const { getHotelList } = require("./src/hotels.js");
const { getBookingList } = require("./src/reservations.js");
const { getHotelPictures } = require("./src/pictures.js");
const { getBookedList } = require("./src/booking.js");

const app = express();
app.use(express.json());

// Route pour lister tous les hôtels
app.get("/hotels", (req, res) => {
  res.json(getHotelList());
});

// Route pour lister toutes les réservations
app.get("/reservations", (req, res) => {
  res.json(getBookingList());
});

// Route pour afficher les photos d'un hôtel spécifique
app.get("/hotels/:hotelId/photos", function (req, res) {
  const hotelId = req.params.hotelId;
  try {
    const photos = getHotelPictures(hotelId);
    res.json(photos);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// Route pour afficher uniquement les hôtels où une chambre a été réservée
app.get("/booked-hotels", (req, res) => {
  res.json(getBookedList());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
