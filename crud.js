//(Create) New Customer
let createcustomer = (Alldetails) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(Alldetails),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
};

let Alldetails = {
  title: "foo",
  body: "bar",
  userId: 1,
};
// createcustomer(Alldetails);
//Fetch All Data  (Read)
let allcustomer = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
};
//allcustomer();

//Fetching Data By using Customer Id
let CustomerDetails = (id) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => {
      if (!res.ok) {
        console.log("There is an error");
      } else {
        return res.json();
      }
    })
    .then((res) => {
      console.log(res);
    });

//CustomerDetails(1);

//Delete Customer by Using Id (Delete)
let Delete = (customerId) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${customerId}`, {
    method: "DELETE",
    // headers: {
    //   "Content-type": "application/json",
    // },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Some Went Wrong");
      } else {
        console.log("Item has been Deleted");
      }
    })
    .catch((error) => {
      console.log("There is an error", error);
    });
};
//Delete(1);

//Update Customer Data (Update)
let update = (Updatedetails, Cid) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${Cid}`, {
    method: "PUT",
    body: JSON.stringify(Updatedetails),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
};

let Updatedetails = {
  id: 1,
  title: "New",
  body: "Newbody",
  userId: 1,
};
update(Updatedetails, 1);
