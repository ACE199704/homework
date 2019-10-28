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
function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    // console.log(posts);
    callback();
  }, 2000);
}

createPost({
    title: "Post Three",
    body: "this is post three"
  },
  getPosts
);