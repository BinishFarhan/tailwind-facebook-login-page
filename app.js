function createNewAcc() {
    location.href = './signup.html'
}

let allUsers = [];

let users = localStorage.getItem('user')

if (users !== null) {
    allUsers = JSON.parse(users)

}

function signUp() {
    var name = document.querySelector("#signup-firstName")
    var surname = document.querySelector("#signup-surName")
    var email = document.querySelector("#signup-email")
    var pass = document.querySelector("#signup-pass")
    var user = {
        name: name.value,
        surname: surname.value,
        email: email.value,
        pass: pass.value,
    }
    allUsers.push(user)
    localStorage.setItem('user', JSON.stringify(allUsers))
    // location.href = "./index.html"

}

var flag = true
var email = document.querySelector("#login-email");
var pass = document.querySelector("#login-pass");

function logIn() {

    for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email === email.value && allUsers[i].pass === pass.value) {
            flag = false

        } break;
    }
    if (!flag) {
        location.href = "./welcome.html";

    } else {
        if (email.value === "" || pass.value === "") {
            email.style.border = "1px solid red"
        } else {
            alert("create your account")
        }
    }

}


function border() {

    email.style.border = ""
    email.className = "w-80 border border-gray-300 py-2 ps-2 rounded-lg my-2 outline-none focus:outline-1 focus:outline-blue-500 focus:outline-offset-0"

}
// console.log(flag)

function logout() {
    console.log(allUsers)
    for (let i = 0; i < allUsers.length; i++) {
        if (flag) {
            allUsers.splice(i, 1)
            console.log(allUsers)
            localStorage.setItem("user", JSON.stringify(allUsers))

        }
        break;
    }
    location.href = "./index.html"
}


