export default async function UpdatePostPage({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: params.id,
      title: "Updated Title",
      body: "This is the updated body content.",
      userId: 1,
    }),
  });

  const data = await res.json();

  return (
    <main style={{ padding: "20px" }}>
      <h1>PUT Request - Update Post</h1>
      <h3>Route: /api/update/{params.id}</h3>
      <pre style={{ background: "#f4f4f4", padding: "12px", borderRadius: "8px" }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}
