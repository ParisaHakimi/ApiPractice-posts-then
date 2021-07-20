let html = '';
fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(
        (response) => {
            return response.json();
        }
    )
    .then((posts) => {
        posts.forEach((post) => {
            html += ` <div class="post" data-id="${post.id}">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>`;
        });
        document.querySelector(".wrapper").innerHTML = html
    })