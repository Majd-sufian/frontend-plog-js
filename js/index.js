const API_URL = "http://localhost:3000/api/posts";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPosts();
}

const getPosts = () => {
  fetch(API_URL, {
    method: 'GET'
  }).then((response) => {
    return response.json()
  }).then((data) => {
    buildPosts(data)
  })
}

const buildPosts = (blogPosts) => {
  let blogPostContent = ''
  for (blogPost of blogPosts){
  let blogPostDate = new Date(parseInt(blogPost.added_date)).toDateString();
  let blogPostImage = API_BASE_URL + blogPost.post_image;
  const postId = `post.html?id=${blogPost.id}`
    blogPostContent += `
      <a href="${postId}" style="text-decoration:none">
        <div class="post">
          <div class="post-image" style="background-image: url(${blogPostImage})"></div>
          <div class="post-content">
            <div class="post-date">${blogPostDate}</div>
            <div class="post-title"><h4>${blogPost.title}</h4></div>
            <div class="post-text">${blogPost.content}</div>
          </div>
        </div>
      </a>
    `
  }
  document.querySelector('.blog-post').innerHTML = blogPostContent
}
