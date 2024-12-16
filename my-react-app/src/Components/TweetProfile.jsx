// Create a new file: TweetProfile.jsx
import React from "react";

const TweetProfile = ({ author, tweet }) => {
  return (
    <div className="tweet-profile">
      <div className="tweet-header">
        <img
          src="/images/profile.jpg" // Using the same image from public/images
          alt={author.name}
          className="tweet-profile-image"
        />
        <div className="tweet-info">
          <h3 className="author-name">{author.name}</h3>
          <span className="author-handle">
            @{author.handle || author.name.toLowerCase()}
          </span>
        </div>
      </div>
      <p className="tweet-content">{tweet}</p>
    </div>
  );
};

export default TweetProfile;
