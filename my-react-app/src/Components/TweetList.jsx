// TweetList component: TweetList.jsx
import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ tweets }) => {
  return (
    <ul>
      {tweets.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} />
      ))}
    </ul>
  );
};

export default TweetList;
