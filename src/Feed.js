import React, { useState, useEffect } from "react";
import Post from "./Post";
import PostBox from "./PostBox";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
function Feed({ username = "rakeshhotker" }) {
  const [tweets, setTweets] = useState([]);
  const usersCollectionRef = collection(db, "posts");
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(usersCollectionRef);
      setTweets(
        data.docs.map((doc) => ({
          ...doc.data(),
        }))
      );
    };
    getPosts();
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Welcome {username}</h2>
      </div>
      <PostBox username={username} />
      {tweets &&
        tweets.map((tweet) => {
          return (
            <Post
              username={tweet.username}
              key={tweet.id}
              tweetid={tweet.id}
              tweetText={tweet.post}
              upvote={tweet.upvote}
              downvote={tweet.downvote}
            />
          );
        })}
    </div>
  );
}

export default Feed;
