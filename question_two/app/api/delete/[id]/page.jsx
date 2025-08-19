export default async function DeletePostPage({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
    method: "DELETE",
  });

  const data = await res.json();

  return (
    <main>
      <h1>DELETE Request - Delete Post</h1>
      <h3>Route: /api/delete/{params.id}</h3>
      <pre style={{ background: "#f4f4f4", padding: "12px", borderRadius: "8px" }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}
