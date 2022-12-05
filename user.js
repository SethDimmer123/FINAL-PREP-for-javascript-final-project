// we are rerouting to a new page and remembering the id they clicked

// console.log(localStorage.getItem("id"))

// THIS IS THE END OF API: 1

// HOW DO I GET THE POSTS I WANT ON ID 2

// START OF API: 2

const postListEl = document.querySelector('.post-list') 
// we are editing the html inside of the post-list container 
// class that is from user.html
// postListEl = document.querySelector('.post-list').innerHTML = 
// we use map method of the html we want to make dynamic inside the array then use the .join method to convert the array to a string

async function main() {
    const id = localStorage.getItem("id")
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData = await posts.json();
    console.log(postsData)
    postListEl .innerHTML = postsData.map(posts => `
    <div class="post">
    <div class="post__title">
      ${posts.title}
    </div>
    <p class="post__body">
      ${posts.body}
    </p>
  </div>
  `).join("") // join method converts the array from html to a string
}

main();