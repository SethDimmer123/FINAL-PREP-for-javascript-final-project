// we are rerouting to a new page and remembering the id they clicked

// console.log(localStorage.getItem("id"))

// THIS IS THE END OF API: 1

// HOW DO I GET THE POSTS I WANT ON ID 2

// START OF API: 2

async function main() {
    const id = localStorage.getItem("id")
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData = await posts.json();

    console.log(postsData)
}

main();