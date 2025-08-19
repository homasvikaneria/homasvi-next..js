export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <main>
      <h1>GET Request - List of Posts</h1>
      <h3>Route: /api/posts</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id} style={{ marginBottom: "16px", padding: "12px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
