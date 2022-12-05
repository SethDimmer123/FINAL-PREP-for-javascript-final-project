// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
const userListEl = document.querySelector('.user-list');

async function main() {
    const users = (await fetch("https://jsonplaceholder.typicode.com/users"));
    const usersData = await users.json();
    console.log(usersData);
    userListEl.innerHTML = usersData.map((user) => userHTML(user)) .join("")
}

main();



function userHTML(user) {
    return `<div class="user-card">
    <div class="user-card__container">
    <h3>${user.name}</h4>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Phone:</b> ${user.phone}</p>
        <p><b>Website:</b> <a href="https://${user.website}" target="_blank">
        ${user.website}
        </a></p>
    </div>
</div>`
}

// i now have an array full of objects

// i want an array full of html elements

// use map method to turn array full of objects to html elements

// use .join method to convert it to a string and set the inner html







