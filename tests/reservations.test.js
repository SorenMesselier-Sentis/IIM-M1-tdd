const getBookingList = require("../src/reservations.js");

test("Je suis un utilisateur, qui veux afficher la liste des réservations", () => {
  const booking = getBookingList();
  const jsonBooking = require("../data/reservation.json");
  expect(booking).toMatchObject(jsonBooking);
});
