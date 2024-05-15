const { getHotelList } = require("../src/hotels.js");

test("[onUserGetHotelList][Success][ExpectHotelListWithPhotos]", () => {
  const hotels = getHotelList();
  const jsonHotels = require("../data/hotel.json");
  expect(hotels).toMatchObject(jsonHotels);
});
