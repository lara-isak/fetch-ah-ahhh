const blogPost = document.querySelector('.blogPost');
const url = 'https://jsonplaceholder.typicode.com/posts';
let posts = [];

async function getBlogPost() {
  const response = await fetch(url);
  const blogs = await response.json();

  console.log(blogs);

  blogs.forEach((blog) => {
    let post = document.createElement('div');
    let postTitle = document.createElement('h1');
    let postText = document.createElement('p');
    let postMaker = document.createElement('p');

    postTitle.innerHTML = blog.title;
    postText.innerHTML = blog.body;
    postMaker.innerHTML = `By: ${blog.userId}`;

    post.appendChild(postTitle);
    post.appendChild(postText);
    post.appendChild(postMaker);
    blogPost.appendChild(post);
  });

  console.log(blogPost);
};


getBlogPost();

