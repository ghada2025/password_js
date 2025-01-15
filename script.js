console.log("fjdkslqmfjqsdk")
async function registerUser() {

  // recuperation valeur de name, password , email
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(name, email, password);

  // request with fetch to our api
  const response = await fetch("http://localhost:3000/users/register", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  })

  const data = await response.json()
  console.log(data)
  // redirect dashboard page

}