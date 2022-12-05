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

// the onsearchchange async function was copied and pasted from the other async function down below to be able to rerender each time we changed the id value for dynamic purposes

async function onSearchChange(event) {
    const id = event.target.value;
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData = await posts.json();

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


// we get an event in the console we can work with
// target has a value that i want

async function main() {
    const id = localStorage.getItem("id")// we want to console log the value we get in the input textarea which is the id
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








