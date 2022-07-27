import api from "../index.js";

async function getQuoteTweet(tweet_id) {
  const endpointURL = `tweets/${tweet_id}/quote_tweets`;

  let quoteTweet = [];

  let pagination_token;

  do {
    const res = await api.get(endpointURL, {
      params: {
        "pagination_token": pagination_token,
      },
    });

    // Update pagination_token and result_count
    pagination_token = res.data.meta.next_token;

    quoteTweet = quoteTweet.concat(res.data.data);
  } while (pagination_token);

  return quoteTweet; // array of user
}

export default getQuoteTweet;

// TEST
// getQuoteTweet("tweet_id")
