// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getDatabase();

// ================= Sign Up Work ============================

var signUpBtn = document.getElementById("signUpBtn");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var userNameInput = document.getElementById("userName");
var userAddressInput = document.getElementById("userAddress");

function submitForm() {
  var obj = {
    email: emailInput.value,
    password: passwordInput.value,
    userName: userNameInput.value,
    userAddress: userAddressInput.value,
  };
  // AndPassword
  // , obj.password //there
  createUserWithEmail(auth, obj.email)//here
    .then(function (succes) {
      console.log("Successfully Register");
      console.log(succes.user.uid);
      obj.uid = succes.user.uid;
      const refrence = ref(db, "users/" + obj.uid);
      set(refrence, obj);
    })
    .catch(function (err) {
      console.log("Registration Rejected");
      console.log(err.code);
      console.log(err.message);
    });

  console.log(obj);
}
// 
signUpBtn.addEventListener("click", function () {
  submitForm();
});

