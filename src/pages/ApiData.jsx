import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/fetchPosts";
import Card from "../components/Card";
import Button from "../components/Button";

const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchPosts(page);
        setPosts(data);
      } catch (err) {
        setError("Failed to load data");
      }
      setLoading(false);
    };
    load();
  }, [page]);

  const filteredPosts = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Search posts..."
        className="w-full px-3 py-2 border rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && filteredPosts.length === 0 && <p>No results found.</p>}

      <div className="grid md:grid-cols-2 gap-4">
        {filteredPosts.map((post) => (
          <Card key={post.id}>
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.body}</p>
          </Card>
        ))}
      </div>

      <div className="flex gap-4">
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </Button>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </div>
    </div>
  );
};

export default ApiData;