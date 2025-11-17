export const fetchPosts = async (page = 1) => {
  const limit = 10;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );
  if (!response.ok) throw new Error("Error fetching posts");
  return response.json();
};
