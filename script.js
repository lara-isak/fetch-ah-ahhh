const blogPost = document.querySelector('.blogPost');
const url = 'https://jsonplaceholder.typicode.com/posts?userId=1&userId=2&userId=3';
let posts = [];
let currentPosts = 10;
const loadBtn = document.querySelector('.loadMore');

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


loadBtn.addEventListener('click', () => {
  const postList = [...document.querySelectorAll('.blogPost div')];

  for(let i = currentPosts; i < currentPosts + 10; i++) {
    if(postList[i]) {
      postList[i].style.display = 'flex';
    }
  }
  currentPosts += 10;

  if(currentPosts >= postList.length) {
    loadBtn.style.display = 'none';
  }
});

