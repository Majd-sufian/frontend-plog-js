

const API_URL = "http://localhost:3000/api/posts";

const submitNewPost = () => {
    // first of all lets get the value 
    const input = document.getElementById('form-post-image')
    const title = document.getElementById('form-post-title').value
    const content = document.getElementById('form-post-content').value

    // let create a formdata
    let data = new FormData();
    data.append('post-image', input.files[0]);
    data.append('title', title );
    data.append('content', content);

    // lets fetch the api and create a post method
    fetch(API_URL, {
    	method: 'POST',
    	body: data
    }).then(() => {
	// we set a timer after you click sumbit it takes you back to index.html
        setTimeout(()=>{
            window.location.href = "index.html";
        }, 1000)
    })

}


