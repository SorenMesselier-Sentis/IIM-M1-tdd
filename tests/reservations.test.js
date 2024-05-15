const { getBookingList } = require("../src/reservations.js");

test("[onUserGetBookingList][Success][ExpectBookingList]", () => {
  const booking = getBookingList();
  const jsonBooking = require("../data/reservation.json");
  expect(booking).toMatchObject(jsonBooking);
});
