const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting')

const hidden = 'hidden'
// const loginButton = loginForm.querySelector('button');

function btnsubmit(e) {
    e.preventDefault(); /* 브라우저가 기본적으로 작동하는 것을 막아준다. */
    const value = loginInput.value;
    console.log(e)
    const username = loginInput.value;
    loginForm.classList.add('hidden');
    console.log(username)
    // greeting.innerText = 'hello ' + username;
    greeting.innerText = `hello ${username}`;

    greeting.classList.remove(hidden)
}

loginForm.addEventListener('submit', btnsubmit)