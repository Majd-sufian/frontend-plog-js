/**
 * TODO (Together): Create getPostIdParam to get the id of the post to use in the request later
 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPost();
}

const getPostIdParam = () => {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  // we write this 2 lines to the id from window.location
  return urlParams.get('id')
}


const getPost = () => {
  // CODE GOES HERE
  const postId = getPostIdParam()
  const postUrl = API_URL + postId
  fetch(postUrl, {
    method: 'GET'
  }).then((response) => {
    return response.json()
  }).then((data) => {
    buildPost(data)
  })
}

const buildPost = (blogIndividualPost) => {
    // HINT: Convert the date number to a Date string
    let blogPostDate = new Date(parseInt(blogIndividualPost.added_date)).toDateString();
    const blogBackgroundImage = API_BASE_URL + blogIndividualPost.post_image;
    document.querySelector('header').style.backgroundImage = `url(${blogBackgroundImage})`;
    let blogIndividualPostContent = `
      <div id="individual-post-title">${blogIndividualPost.title}</div>
      <div id="individual-post-date">${blogPostDate}</div>
      <div id="individual-post-content">${blogIndividualPost.content}</div>
    `
    document.querySelector('.post-container').innerHTML = blogIndividualPostContent
}

