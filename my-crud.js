let ul = document.getElementById("ul");
let button = document.getElementById("submit");

if (button) {
  button.addEventListener("click", function () {
    fetch("http://192.168.0.105:5000/users")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        data.users.map((i) => {
          console.log(i.name);
        });
      })
      .catch(function (error) {
        console.log("Error:", error);
      });
  });
}
