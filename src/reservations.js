function getBookingList() {
  const booking = require("../data/reservation.json");
  if (booking.length === 0) {
    return { error: "message attendu: Vous n'avez fait aucune réservation" };
  }

  return booking;
}

module.exports = { getBookingList };
