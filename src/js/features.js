import React, { useState } from 'react';

function ImageExpand() {
  const [expandedImg, setExpandedImg] = useState(null); // State for expanded image URL
  const [imgText, setImgText] = useState(''); // State for image text

  // Function to handle image click event
  const handleImageClick = (event) => {
    const imgs = event.target;

    // Update states with clicked image data
    setExpandedImg(imgs.src);
    setImgText(imgs.alt);
  };

  return (
    <div className="image-expand-container">
      <div className="expanded-image">
        {expandedImg && (
          <img src={expandedImg} alt={imgText} />
        )}
        {imgText && (
          <p>{imgText}</p>
        )}
      </div>
      <div className="image-grid">
        {/* Replace with your actual image grid */}
        <img src="path_to_your_image" alt="Image Description" onClick={handleImageClick} />
        <img src="path_to_your_image" alt="Image Description" onClick={handleImageClick} />
        {/* Add more images as needed */}
      </div>
    </div>
  );
}

export default ImageExpand;