/* eslint-disable no-unused-vars */
import * as fs from "fs";
import getRetweet from "../routes/getRetweet.js";
import getUserByUsername from "../routes/getUserByUsername.js";
import getQuoteTweet from "../routes/getQuoteTweet.js";
import getLike from "../routes/getLike.js";
import getFollowing from "../routes/getFollowing.js";
import getReply from "../routes/getReply.js";

// FIXME: fix route (add main route >> access subroute)

// Get user By Username
// getUserByUsername('username')
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => console.error(err))

// Get retweet
// getRetweet("tweet_id")
//     .then((res) => {
//         //Convert array of object to string
//         res = res.map((obj) => JSON.stringify(obj)).join("\n");
//         write(res);
//     }).catch((err) => console.error(err))

// Get quoute tweet
// getQuoteTweet("tweet_id")
//     .then((res) => {
//         //Convert array of object to string
//         res = res.map((obj) => JSON.stringify(obj)).join("\n");
//         write(res);
//     }).catch((err) => console.error(err))

// Get like
// getLike("tweet_id")
//     .then((res) => {
//         //Convert array of object to string
//         res = res.map((obj) => JSON.stringify(obj)).join("\n");
//         write(res);
//     }).catch((err) => console.error(err))

// Get following
// getFollowing("userid")
//     .then((res) => {
//         //Convert array of object to string
//         res = res.map((obj) => JSON.stringify(obj)).join("\n");
//         write(res);
//     }).catch((err) => console.error(err))

// Get reply
// getReply("tweet_id")
//     .then((res) => {
//         //Convert array of object to string
//         res = res.map((obj) => JSON.stringify(obj)).join("\n");
//         write(res);
//     }).catch((err) => console.error(err))


// ADDITIONAL FUNCTION
// Write in a file
function write(text) {
  fs.writeFile("./output.txt", text, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
}
