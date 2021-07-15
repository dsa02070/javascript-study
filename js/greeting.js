const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting')

const hidden = 'hidden'
const UserName_key = "username"
// const loginButton = loginForm.querySelector('button');

function btnsubmit(e) {
    e.preventDefault(); /* 브라우저가 기본적으로 작동하는 것을 막아준다. */
    loginForm.classList.add('hidden');
    const username = loginInput.value;
    localStorage.setItem(UserName_key, username)
    // greeting.innerText = 'hello ' + username;
    paintGreetings(username)
}

let paintGreetings = (username) => {
    greeting.classList.remove(hidden)
    greeting.innerText = `hello ${username}`
}

const savedUserName = localStorage.getItem(UserName_key)
//console.log(savedUserName)

if (savedUserName == null) {
    loginForm.classList.remove(hidden)
    loginForm.addEventListener('submit', btnsubmit)
} else {
    paintGreetings(savedUserName)
}

// localStorage.setItem('username', 'nico');
// localStorage.getItem('username');
// localStorage.removeItem('username')