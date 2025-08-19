export default async function SinglePostPage({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return (
    <main>
      <h1>GET Request - Single Post</h1>
      <h3>Route: /api/posts/{params.id}</h3>
      <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
    </main>
  );
}
