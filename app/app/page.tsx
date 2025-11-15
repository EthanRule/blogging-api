"use client";

import Image from "next/image";
import { useState } from "react";

/* Requirements:
    Create a new blog post

    Delete an existing blog post

    Get a single blog post

    Update an existing blog post

    Get all blog posts

    Filter blog posts by a search term
*/
export default function Home() {
  const [input, setInput] = useState("");

  const handleInputChange = (event: any) => {
    setInput(event.target.value);
  };

  return (
    <div className="flex flex-col items-center text-4xl mb-4 font-bold">
      BLOG
      <div className="flex flex-col">
        <input
          type="text"
          value={input}
          className="bg-zinc-800"
          onChange={handleInputChange}
        />
        <div className="flex flex-row gap-4">
          <CreateBlogPost setInput={setInput} />
          <GetBlogPost setInput={setInput} />
        </div>
      </div>
    </div>
  );
}

// TODO: replace any
const CreateBlogPost = ({ setInput }: any) => {
  const handleClick = () => {
    try {
      const res = fetch(`../app/api/create-blog-post/`);
    } catch (error) {
      console.log(`error: ${error}`);
      setInput(error);
    }
  };
  return (
    <button
      onClick={handleClick}
      className="p-2 bg-zinc-400 hover:bg-zinc-600 border border-zinc-200"
    >
      Create Post
    </button>
  );
};

const GetBlogPost = ({ setInput }: any) => {
  const handleClick = () => {
    try {
      const res = fetch(`../app/api/get-blog-post/`);
    } catch (error) {
      console.log(`error: ${error}`);
      setInput(error);
    }
  };
  return (
    <button
      onClick={handleClick}
      className="p-2 bg-zinc-400 border border-zinc-200 hover:bg-zinc-600"
    >
      Get Post
    </button>
  );
};
