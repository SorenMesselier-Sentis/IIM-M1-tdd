const { getHotelList } = require("../src/hotels.js");

test("Je suis un utilisateur, je veux réserver un hôtel", () => {
  const hotels = getHotelList();
  const jsonHotels = require("../data/hotel.json");
  expect(hotels).toMatchObject(jsonHotels);
});
