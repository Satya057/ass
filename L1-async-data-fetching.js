 

function fetchUserData(callback) {
  console.log("Fetching user data...");
  setTimeout(() => {
    callback("User data received");
  }, 1000);
}

function fetchUserPosts(callback) {
  console.log("Fetching user posts...");
  setTimeout(() => {
    callback("User posts received");
  }, 1500);
}

fetchUserData((userData) => {
  console.log(userData);
  fetchUserPosts((userPosts) => {
    console.log(userPosts);
    console.log("All data loaded successfully!");
  });
}); 