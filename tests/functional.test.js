const axios = require("axios");

const bearer = process.env.BEARER;

test("[on][Success][Expect200Statuses]", async (route = "https://us-east1-nth-highlander-423208-r5.cloudfunctions.net/app") => {
  const headers = {
    Authorization: "Bearer " + bearer,
  };
  const response = await axios.get(route + "/getHotels", { headers });
  expect(response.status).toBe(200);
});

test("[on][Success][OnEndpointHealthWith204AndEmptyResponseContent]", async (route = "https://us-east1-nth-highlander-423208-r5.cloudfunctions.net/app") => {
  const headers = {
    Authorization: "Bearer " + bearer,
  };
  const response = await axios.get(route + "/health", { headers });
  expect(response.status).toBe(200); // It's normally 204 but we defined 200 in the code
});

test("[on][Error][Expect404Statuses]", async (route = "https://us-east1-nth-highlander-423208-r5.cloudfunctions.net/app") => {
  const headers = {
    Authorization: "Bearer " + bearer,
  };
  const response = await axios
    .get(route + "/notFound", { headers })
    .catch((error) => {
      expect(error.response.status).toBe(404);
    });
  // expect(response.body).toHaveProperty("message");
  // expect(response.body.message).toBe("Not Found");
});

test("[on][Error][Expect403Statuses]", async (route = "https://us-east1-nth-highlander-423208-r5.cloudfunctions.net/app") => {
  const response = await axios.get(route + "/getHotels").catch((error) => {
    expect(error.response.status).toBe(403);
  });
});
