import api from "../index.js";

async function getFollowing(userID) {
    const endpointURL = `users/${userID}/following`;

    let userFollowing = []

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

        userFollowing = userFollowing.concat(res.data.data)

    } while(pagination_token)

    return userFollowing; //Array of user
}

export default getFollowing;

//TEST
// getFollowing("userid")