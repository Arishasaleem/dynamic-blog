'use client'
import { useState } from "react";

function CommentSection() {

  const [comments, setComments] = useState<{ name: string; text: string }[]>([]);

  const [name, setName] = useState<string>(""); 
  const [comment, setComment] = useState<string>("");

  const handleSubmit = () => {
    if (!name.trim() || !comment.trim()) {
      alert("Name and comment are required!");
      return;
    }

    // Add the new comment to the comments array
    setComments((prevComments) => [
      ...prevComments,
      { name: name.trim(), text: comment.trim() },
    ]);

    // Clear the input fields
    setName("");
    setComment("");
  };

  return (
    <div className="bg-slate-800 min-h-screen py-10 px-4">
      <h1 className="text-5xl font-semibold text-center text-white mb-8">
        Comments Section
      </h1>

      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Leave a Comment
        </h2>

        {/* Input for Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        {/* Textarea for Comment */}
        <div className="mb-4">
          <label
            htmlFor="comment"
            className="block text-gray-700 font-medium mb-2"
          >
            Comment
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your comment"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Post Comment
        </button>
      </div>

      {/* Display Comments */}
      <div className="max-w-xl mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          All Comments
        </h2>

        {comments.length === 0 ? (
          <p className="text-gray-600">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 mb-4"
            >
              <p className="text-gray-800 font-bold">{comment.name}</p>
              <p className="text-gray-600 mt-1">{comment.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CommentSection;
