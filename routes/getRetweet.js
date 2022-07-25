import api from "../index.js";

async function getRetweet(tweet_id) {
    const endpointURL = `tweets/${tweet_id}/retweeted_by`;

    let userRetweetedBy = [];

    let pagination_token, result_count;

    do{
        const res = await api.get(endpointURL, {
            params: {
                "pagination_token": pagination_token
            }
        })

        //Update pagination_token and result_count
        result_count = res.data.meta.result_count
        pagination_token = res.data.meta.next_token

        userRetweetedBy = userRetweetedBy.concat(res.data.data)

    } while(result_count != 0)

    //Deleting last undefined page
    userRetweetedBy.pop()

    return userRetweetedBy; //Array of user
}

export default getRetweet;

//TEST
// getRetweet("tweet_id")

//TODO: add params (check description, pfp, banner, created_at, latest_tweet, location, tweets_amount, ...)