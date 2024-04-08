// ============== CODECODECODECODECODECODE:v1 ================
// let ul = document.getElementById("ul");
// let button = document.getElementById("submit");

// if (button) {
//   button.addEventListener("click", function () {
//     fetch("http://192.168.0.105:5000/users")
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         data.users.map((i) => {
//           console.log(i.name);
//         });
//       })
//       .catch(function (error) {
//         console.log("Error:", error);
//       });
//   });
// }

// ============== CODECODECODECODECODECODE:v2 ================
let ul = document.getElementById("ul");
let button = document.getElementById("submit");

// Function to fetch users and render them
function fetchUsers() {
  // fetch("http://192.168.0.105:5000/users")
  fetch("http://localhost:5000/users")
    .then((response) => response.json())
    .then((data) => {
      // Clear previous list items
      ul.innerHTML = "";
      // Render users
      data.users.forEach((user) => {
        let li = document.createElement("li");
        li.textContent = user.name;
        ul.appendChild(li);
      });
    })
    .catch((error) => console.log("Error:", error));
}
fetchUsers();

if (button) {
  button.addEventListener("click", function () {
    let fullName = document.getElementById("full-name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // Create user object
    let newUser = {
      name: fullName,
      email: email,
      password: password,
    };
    // Send POST request to add new user
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        if (response.ok) {
          // Show success alert
          alert("User added successfully!");
          // Fetch users to update the list
          fetchUsers();
        } else {
          // Show error alert
          alert("Failed to add user.");
        }
      })
      .catch((error) => console.log("Error:", error));
  });
}
