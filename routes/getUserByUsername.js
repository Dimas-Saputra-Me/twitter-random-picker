import api from "../index.js";

async function getUserByUsername(username) {
  const endpointURL = `users/by/username/${username}`;

  const res = await api.get(endpointURL);

  return res.data.data; // User
}

export default getUserByUsername;

// TEST
// getUserByUsername("username")
