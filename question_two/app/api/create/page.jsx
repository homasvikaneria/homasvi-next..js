export default async function CreatePostPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "Hello",
      body: "Next.js API test",
      userId: 1,
    }),
  });

  const data = await res.json();

  return (
    <main>
      <h1>POST Request - Create Post</h1>
      <h3>Route: /api/create</h3>
      <pre style={{ background: "#f4f4f4", padding: "12px", borderRadius: "8px" }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}
