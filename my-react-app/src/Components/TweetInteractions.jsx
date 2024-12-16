// TweetInteractions component: TweetInteractions.jsx
import React from "react";

const TweetInteractions = ({ likes, onLike }) => {
  return (
    <div className="tweet-interactions">
      <button className="like-button" onClick={onLike}>
        Like {likes}
      </button>
      <button className="retweet-button">Retweet</button>
      <button>Reply</button>
    </div>
  );
};

export default TweetInteractions;
