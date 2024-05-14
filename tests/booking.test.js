const getBookedList = require("../src/booking.js");

test("Je suis un utilisateur, qui veux afficher uniquement la liste des hotels sur lequel j'ai booker une chambre, (photo et nom compris).", () => {
  const bookedHotels = getBookedList();
  const bookingMock = {
    hotel3: [
      {
        name: "cccccccccccccccccccc",
        pictures: {
          photo1: "HHHHHHHHHHHH.png",
          photo2: "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIII.png",
        },
        book: "true",
      },
    ],
  };
  expect(bookedHotels).toEqual(bookingMock);
});
