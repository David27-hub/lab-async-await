// Function to display posts
function displayPosts(posts) {
  const postList = document.getElementById("post-list");

  posts.forEach(post => {
    // Create li
    const li = document.createElement("li");

    // Create h1 for title
    const h1 = document.createElement("h1");
    h1.textContent = post.title;

    // Create p for body
    const p = document.createElement("p");
    p.textContent = post.body;

    // Append h1 and p to li
    li.appendChild(h1);
    li.appendChild(p);

    // Append li to ul
    postList.appendChild(li);
  });
}

// Async function to fetch posts
async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    // Call displayPosts after fetch
    displayPosts(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// Automatically run on page load
fetchPosts();
// Write your code here!
