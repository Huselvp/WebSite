import React from 'react';
import './Post.css';

function Post({ image, text, isImageRight, index }) {
  return (
    <div className={`post ${isImageRight ? 'image-right' : 'text-right'}`}>
      <div className="post__content">
        <h2 className="post__title">{text.title}</h2>
        <div className="post__text">{text.text}</div>
      </div>
      <img src={image} alt={`Post_Image_${index}`} className="post__image" />
    </div>
  );
}

export default Post;
