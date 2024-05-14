const { getHotelPictures } = require("../src/pictures.js");

test("Je suis un utilisateur, qui veux uniquement afficher la liste des photos d'un hotel (ex: hotel1)", () => {
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
