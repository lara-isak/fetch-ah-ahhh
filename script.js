const blogPost = document.querySelector('[data-id="blog-post"]');
const url = 'https://jsonplaceholder.typicode.com/posts?userId=1&userId=2&userId=3';
let posts = [];
let currentPosts = 6;
const loadBtn = document.querySelector('[data-id="load-more"]');

async function getBlogPost() {
  const response = await fetch(url);
  const blogs = await response.json();

  console.log(blogs);

  blogs.forEach((blog) => {
    let post = document.createElement('article');
    let postTitle = document.createElement('h2');
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


loadBtn.addEventListener('click', () => {
  let displayedPosts = document.querySelectorAll('[data-id="blog-post"] article');
  const postList = [...displayedPosts];

  for(let i = currentPosts; i < currentPosts + 6; i++) {
    if(postList[i]) {
      postList[i].style.display = 'flex';
    }
  }
  currentPosts += 6;

  if(currentPosts >= postList.length) {
    loadBtn.style.display = 'none';
  }
});

