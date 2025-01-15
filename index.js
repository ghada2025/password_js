const password = document.getElementById("password");
const specialChar = '~`!@#$%^&*()-_+={}[]|;:"<>,./?';
const alphabetmaj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const error = document.getElementById("error");

function generatePassword() {
  const value = password.value;
  if (value.length < 4) {
    error.innerHTML = "Password must be at least 4 characters long";
    error.style.display = "block";
    return;
  } else if (value.length > 12) {
    error.innerHTML = "Password must be less then 12 characters";
    error.style.display = "block";
    return;
  }
  let i = 0;
  let specialCharCount = false;
  while (i < specialChar.length && !specialCharCount) {
    specialCharCount = value.includes(specialChar[i]);
    i++;
  }
  if (!specialCharCount) {
    error.innerHTML = "Password must contain at least one special character.";
    error.style.display = "block";
    return;
  }
  let majCount = false;
  i = 0;
  while (i < alphabetmaj.length && !majCount) {
    console.log(alphabetmaj[i], value)
    majCount = value.includes(alphabetmaj[i]);
    i++;
  }
  console.log(majCount)
  if (!majCount) {
    console.log(value,)
    error.innerHTML = "Password must contain at least one uppercase letter.";
    error.style.display = "block";
    return;
  }
  error.style.display = "none";
  registerUser()
}

// Sélection des éléments HTML
const user = document.getElementById("user"); // Champ input pour le nom d'utilisateur
const register = document.getElementById("register"); //  mot "Register" (h3)
const login = document.getElementById("login"); // Bouton "Login"
const registerbtn = document.getElementById("registerbtn"); // Bouton "Register"
const returnbtn = document.getElementById("Login"); //  mot "Login" (h3)
const registersuite = document.getElementById("registersuite");

// Lorsque l'utilisateur clique sur "Register"
register.addEventListener("click", () => {
  register.classList.add("hidden");
  registersuite.classList.add("hidden");
  login.classList.add("hidden");
  registerbtn.classList.remove("hidden");
  user.classList.remove("hidden");
  returnbtn.classList.remove("hidden");
});

// Lorsque l'utilisateur clique sur "Login"
returnbtn.addEventListener("click", () => {
  register.classList.remove("hidden");
  registersuite.classList.remove("hidden");
  login.classList.remove("hidden");
  registerbtn.classList.add("hidden");
  user.classList.add("hidden");
  returnbtn.classList.add("hidden");
});
