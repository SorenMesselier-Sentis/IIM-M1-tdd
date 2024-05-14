function getBookedList() {
  const hotels = require("../data/booking.json");
  const bookedHotels = Object.entries(hotels).reduce((acc, [key, value]) => {
    if (value[0].book === "true") {
      acc[key] = value;
    }
    return acc;
  }, {});

  if (Object.keys(bookedHotels).length === 0) {
    return "message attendu: Vous n'avez fait aucune réservation";
  } else {
    return bookedHotels;
  }
}

exports.getBookedList = getBookedList;
