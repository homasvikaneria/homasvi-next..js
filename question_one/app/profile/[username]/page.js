// question_one/app/profile/[username]/page.js
// question_one/app/profile/username/page.js
"use client";

export default function ProfilePage({ params }) {
  const { username } = params;

  return (
    <div>
      <h1>Profile Page: {username}</h1>
    </div>
  );
}
