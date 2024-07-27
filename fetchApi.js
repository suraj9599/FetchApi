fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network is not responding...");
    }
    return response.json();
  })
  .then((data) => {
    data.forEach((element) => {
      let title = element.title;
      console.log(title);
    });
  })
  .catch((error) => console.log(error));



//Geting a resource

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

//Listing all resources

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));

//Creating a resource

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//Updating a resource

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//Patching a resource

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  body: JSON.stringify({
    title: "foo",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//Deleting a resources

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
});

//Filtering resources

// This will return all the posts that belong to the first user
fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
  .then((response) => response.json())
  .then((json) => console.log(json));

//Lising nested resources

// This is equivalent to /comments?postId=1
fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
  .then((response) => response.json())
  .then((json) => console.log(json));
