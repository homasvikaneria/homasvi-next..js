// question_one/app/blog/[id]/page.js
"use client";

export default function BlogPost({ params }) {
  const { id } = params;

  return (
    <div>
      <h1>Blog Post ID: {id}</h1>
    </div>
  );
}
