function createNewAcc() {
    location.href = './signup.html'
}

let allUsers = [];

let users = localStorage.getItem('user')
// console.log("🚀 ~ file: app.js:8 ~ users:", users)

if (users !== null) {
    allUsers = JSON.parse(users)

}
console.log("🚀 ~ file: app.js:6 ~ allUsers:", allUsers)

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
    location.href = "./index.html"

}

var loginEmail = document.querySelector("#login-email")

var loginPass = document.querySelector("#login-pass")
var flag = true

function logIn() {
    console.log("🚀 ~ file: app.js:35 ~ email:", typeof loginEmail.value)
    console.log("🚀 ~ file: app.js:37 ~ pass:", loginPass.value)

    let foundUserIndex = -1
    for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email === loginEmail.value && allUsers[i].pass === loginPass.value) {

            console.log(i)
            foundUserIndex = i
            currentUserIndex = 2
            console.log(foundUserIndex)
            console.log("hello");
            flag = false
            var loginID = loginEmail.value
            break;


        }

    }


    if (!flag) {
        console.log("🚀 ~ file: app.js:53 ~ logIn ~ loginID:", loginID)

        window.location.href = `welcome.html?flag=false&&loginID=${loginID}`;

    }


    else {
        if ((loginEmail.value === "" || loginPass.value === "") || (loginEmail.value === " " || loginPass.value === " ")) {
            loginEmail.style.border = "1px solid red"
            loginPass.style.border = "1px solid red"
        } else if (loginEmail.value.slice(-4) !== ".com") {
            alert("invalid email")
        }
        else {
            alert('create your account')
        }


    }
}






// }




function logout() {
    const urlParams = new URLSearchParams(window.location.search);
    const abc = urlParams.get('flag');
    const loginID = urlParams.get("loginID");
    console.log(loginID)
    console.log(abc)
    if (abc) {
        console.log("hello")

        for (let i = 0; i < allUsers.length; i++) {
            if (allUsers[i].email === loginID) {
                allUsers.splice(i, 1)
                console.log(allUsers)
                break;
            }
            location.href = "./index.html"

        }

    }
    localStorage.setItem('user', JSON.stringify(allUsers))

}


function border() {
    loginEmail.style.border = ""
    loginEmail.className = "w-80 border border-gray-300 py-2 ps-2 rounded-lg my-2 outline-none focus:outline-1 focus:outline-blue-500 focus:outline-offset-0"
}

function passborder() {
    loginPass.style.border = ""
    loginPass.className = "w-80 border border-gray-300 py-2 ps-2 rounded-lg my-2 outline-none focus:outline-1 focus:outline-blue-500 focus:outline-offset-0"
}
