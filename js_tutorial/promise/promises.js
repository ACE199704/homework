/**
 * 动态往DOM 中添加内容
 * 回调
 */

const posts = [{
    title: "Post One",
    body: "this is post one"
  },
  {
    title: "Post Two",
    body: "this is post two"
  }
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// getPosts();
// console.log("test");
function createPost(post) {
  //实例化promise参数
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      // console.log(posts);
      const error = false;
      if (!error) {
        resolve();
      }
      if (error) {
        reject("Error:something went wrong!");
      }
    }, 2000);
  })
}

// createPost({
//     title: "Post Three",
//     body: "this is post three"
//   }).then(getPosts)
//   .catch(err => console.log(err));

// const promise1 = Promise.resolve("Hello World");
// const promise2 = Promise.resolve(20);
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "goodbye");
// })

// const promise4 = fetch("http://jsonplaceholder.typicode.com/users").then(res => res.json());
// Promise.all([promise1, promise2, promise3, promise4]).then(values => {
//   console.log(values);
// })

//asycn /await 

async function init() {
  await createPost({
    title: "Post Three",
    body: "this is post three"
  })
  getPosts();
}
// init(); 

async function fetchUsers() {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}
fetchUsers();