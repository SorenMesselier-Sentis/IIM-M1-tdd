function getHotelList() {
  const hotels = require("../data/hotel.json");
  if (hotels.lenght === 0) {
    return { error: "message attendu: Aucun hotels disponible" };
  }

  return hotels;
}

module.exports = { getHotelList };
