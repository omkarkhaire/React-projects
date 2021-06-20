import React from "react";

const Photo = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  return (
    <div className="real-photo">
      <img src={regular} alt={alt_description} />

      <div className="photo-info">
        <div className="photo-details">
          <h4>{name}</h4>
          <p>{likes} Likes</p>
        </div>
        <div className="link">
          <a href={portfolio_url}>
            <img src={medium} alt={medium} className="pp" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Photo;
