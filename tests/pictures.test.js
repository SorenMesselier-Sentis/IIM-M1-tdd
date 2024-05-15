const { getHotelPictures } = require("../src/pictures.js");

test("[onUserGetHotelPictures][Success][ExpectHotelPictures]", () => {
  const hotelName = "hotel1";
  const pictures = getHotelPictures(hotelName);
  const expectedPictures = [
    {
      name: "aaaaaaaaaaa",
      pictures: {
        photo1: "EEEEEEEEEEE.png",
        photo2: "DDDDDDDDDDD.png",
      },
    },
  ];
  expect(pictures).toEqual(expectedPictures);
});
