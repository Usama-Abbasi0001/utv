import React, { useState } from "react";

function ViewCommintSec() {
  // Read more toggle
  const [showMore, setShowMore] = useState(false);

  // Comment state
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([
    {
      name: "Ferdinand",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
    },
    {
      name: "Roy Maretho",
      text: "Far far away, behind the word mountains, far from the countries Vokalia",
    },
    {
      name: "Decker Jay",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    },
  ]);

  // Add comment function
  const handleAddComment = () => {
    if (commentText.trim() === "") return;

    const newComment = {
      name: "You",
      text: commentText,
    };

    setComments([newComment, ...comments]);
    setCommentText("");
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 mt-5">

      {/* Description Section */}
      <div className="bg-[#2a2a2a] rounded-xl p-5 text-gray-300">
        <p className="text-sm text-gray-400 mb-2">
          3.9 Million Views · 4 Hours Ago
        </p>

        <h3 className="text-white font-semibold mb-1">
          Description
        </h3>

        <p className="text-sm leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
          Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
          {showMore && (
            <>
              {" "}
              Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco
              Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse.
            </>
          )}

          <span
            onClick={() => setShowMore(!showMore)}
            className="text-sky-400 cursor-pointer ml-1"
          >
            {showMore ? "See Less" : "See More"}
          </span>
        </p>
      </div>

      {/* Comments Section */}
      <div className="bg-[#1f1f1f] rounded-xl p-5 text-gray-300">

        {/* Header */}
        <p className="text-sm text-gray-400 mb-3">
          {comments.length} Comments
        </p>

        {/* Write Comment */}
        <div className="flex gap-2 mb-5">
          <input
            type="text"
            placeholder="Write a Comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddComment()}
            className="flex-1 bg-[#2a2a2a] rounded-full px-5 py-2 text-sm text-gray-300 outline-none focus:ring-1 focus:ring-gray-500"
          />

          <button
            onClick={handleAddComment}
            className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-full text-sm"
          >
            Post
          </button>
        </div>

        {/* Comment List */}
        {comments.map((comment, index) => (
          <div key={index} className="flex gap-4 mb-4">

            {/* Avatar */}
            <div className="w-10 h-10 bg-gray-600 rounded-md flex-shrink-0" />

            {/* Content */}
            <div>
              <h4 className="text-sm font-semibold text-white">
                {comment.name}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {comment.text}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewCommintSec;
