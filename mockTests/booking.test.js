const { getBookedList } = require("../src/booking.js");
const { connectDB, disconnectDB } = require("../database/database.js");

beforeAll(() => {
  connectDB();
});

afterAll(() => {
  disconnectDB();
});

test("[onUserGetBookedList][Success][ExpectBookedHotelsWithPhotos]", () => {
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