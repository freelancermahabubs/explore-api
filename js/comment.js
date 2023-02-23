function userComment(){
  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(res => res.json())
  .then(data => displayComment(data))
}

function displayComment(comments){
  const commentContainer = document.getElementById('comment-container')
 for(const comment of comments){
  const commentDiv = document.createElement('div');
  commentDiv.classList.add("comment");
  commentDiv.innerHTML = `
  <h4>Post Id: ${comment.postId}</h4>
  <h5>User Id: ${comment.id}</h5>
  <p>User Email: ${comment.email}</p>
  <p>User Description: ${comment.body}</p>
  `;
  commentContainer.appendChild(commentDiv);
}

}

userComment()