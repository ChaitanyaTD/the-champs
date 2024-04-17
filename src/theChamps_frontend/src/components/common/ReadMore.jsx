import React, { useState } from "react";

const ReadMore = ({ text, maxLength, readmore }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div>
      {isTruncated ? (
        <>
          {text?.slice(0, maxLength)}
          {text.length > maxLength && "... "}
          {readmore && (
            <button
              onClick={toggleTruncate}
              className="text-sm text-[#FC001E] font-bold"
            >
              Read More
            </button>
          )}
        </>
      ) : (
        <>
          {text}{" "}
          <button
            onClick={toggleTruncate}
            className="text-sm text-[#FC001E] font-bold"
          >
            Read Less
          </button>
        </>
      )}
    </div>
  );
};

export default ReadMore;