import api from "../index.js";

async function getReply(tweet_id) {
  const endpointURL = "tweets/search/recent";

  let tweetReply = [];

  let pagination_token;

  do {
    const res = await api.get(endpointURL, {
      params: {
        "query": `conversation_id:${tweet_id}`,
        "tweet.fields": "author_id",
        "pagination_token": pagination_token,
      },
    });

    // Update pagination_token and result_count
    pagination_token = res.data.meta.next_token;

    tweetReply = tweetReply.concat(res.data.data);
  } while (pagination_token);

  return tweetReply; // Array of tweet reply
}

export default getReply;

// TEST
// getReply("twitter_id")
