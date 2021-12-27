import React from "react";
import "./Post.css";
import { db } from "./firebase";
import { deleteDoc, doc } from "firebase/firestore";
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
function Post({ username, tweetid, tweetText,upvote,downvote}) {
  const handleDelete = async (tweetid) => {
    try {
      const userDoc = doc(db, "posts", tweetid);
      await deleteDoc(userDoc);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div>
      <div className="tweet">
        <div className="tweet__body">
          <div className="tweet_header">
            <div className="tweet_headerText">
              <h3>{username}</h3>
            </div>
            <div className="tweet__headerDescription">
              <p>{tweetText}</p>
            </div>
          </div>
        </div>
        <div className="reactions">
          <div className="tweet__footer">
            <DeleteIcon
              className="tweet__deleteButton"
              onClick={() => {
                handleDelete(tweetid);
              }}
            />
          </div>
          <div className="upvote">
            <ThumbUpIcon /><span>{upvote}</span>
          </div>
          <div className="downvote">
            <ThumbDownIcon /><span>{downvote}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
