const functions = require("@google-cloud/functions-framework");
const hotels = require("../data/hotel.json");

function getHotelList() {
  if (hotels.lenght === 0) {
    return { error: "message attendu: Aucun hotels disponible" };
  }

  return hotels;
}

functions.http("getHotels", (req, res) => {
  try {
    const data = getHotelList();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = { getHotelList };
