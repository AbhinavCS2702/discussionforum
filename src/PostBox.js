import React, { useState } from "react";
import "./PostBox.css";
import { db } from "./firebase";
import { collection, getDocs, addDoc} from "firebase/firestore";
import { Button } from "@mui/material";
function PostBox({username}) {
  const [tweet, setTweet] = useState("");
  const [upvote,setUpvote]=useState(0);
  const [downvote,setDownvote]=useState(0);
  const usersCollectionRef = collection(db, "posts");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(usersCollectionRef,{
          username:username,
          post:tweet,
          upvote,
          downvote
      })
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <textarea
            value={tweet}
            placeholder="Wanna Ask Something?"
            onChange={(e) => setTweet(e.target.value)}
          />
        </div>
        <Button className="tweetBox__tweetButton" onClick={handleSubmit}>
          Post
        </Button>
      </form>
    </div>
  );
}

export default PostBox;
