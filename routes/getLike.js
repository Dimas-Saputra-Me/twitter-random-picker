import api from "../index.js";

async function getLike(tweet_id) {
  const endpointURL = `tweets/${tweet_id}/liking_users`;

  let userLiked = [];

  let pagination_token; let result_count;

  do {
    const res = await api.get(endpointURL, {
      params: {
        "pagination_token": pagination_token,
      },
    });

    // Update pagination_token and result_count
    result_count = res.data.meta.result_count;
    pagination_token = res.data.meta.next_token;

    userLiked = userLiked.concat(res.data.data);
  } while (result_count != 0);

  // Deleting last undefined page
  userLiked.pop();

  return userLiked; // Array of user
}

export default getLike;

// TEST
// getLike("tweet_id")
