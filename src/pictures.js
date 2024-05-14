function getHotelPictures(hotelName) {
  const picturesData = require("../data/picture.json");
  return picturesData[hotelName];
}

module.exports = { getHotelPictures };
