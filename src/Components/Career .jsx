import React from "react";

const Career = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Careers at The Dragon News
      </h1>
      <p className="text-gray-600 text-lg">
        Want to make an impact with your work? Join The Dragon News team and
        help shape the future of journalism. We're always looking for passionate
        writers, editors, designers, and developers who believe in the power of
        truth.
      </p>
      <p className="text-gray-600 mt-4 text-lg">
        If you're a creative thinker with a drive for storytelling, we invite
        you to explore opportunities with us. Email us at{" "}
        <a
          href="mailto:careers@dragonnews.com"
          className="text-blue-600 underline"
        >
          careers@dragonnews.com
        </a>{" "}
        to get started.
      </p>
    </div>
  );
};

export default Career;
