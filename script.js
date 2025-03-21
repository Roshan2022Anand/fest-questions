const form = document.getElementById('signup-form');
const container = document.getElementById('toast-container');
const userName = document.getElementById('username');
const passwordELe = document.getElementById('password');
const emailEle = document.getElementById('email');
const showPasswordBtn = document.getElementById('showPassword');
const cursorDot = document.getElementById('cursorDot');
const cursorCircle = document.getElementById('cursorCircle');

//funtion to show password
showPasswordBtn.addEventListener('click', () => {
    if (passwordELe.type === 'password') {
        passwordELe.type = 'text';
        showPasswordBtn.innerText = 'Hide'
    } else {
        passwordELe.type = 'password';
        showPasswordBtn.innerText = 'Show'
    }
});

//function to show the toast
const showToast = (message, type) => {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerText = message;

    // Create the loading bar element
    const loadingBar = document.createElement('div');
    loadingBar.className = 'loading-bar';
    toast.appendChild(loadingBar);

    // Append toast to container
    container.appendChild(toast);

    // Start the loading bar animation after a slight delay
    setTimeout(() => {
        loadingBar.style.animation = `loading 4000ms linear forwards`;
    }, 50);

    // Remove the toast after the specified duration
    setTimeout(() => {
        // toast.style.opacity = '0';
        setTimeout(() => container.removeChild(toast), 500);
    }, 4000);
}

//function to submit the form
const submitForm = () => {
    const name = userName.value;
    const password = passwordELe.value;
    const email = emailEle.value;

    if (name == "") {
        showToast('Please enter your name', 'error');
        return;
    } else if (password == "") {
        showToast('Please enter your password', 'error');
        return;
    } else if (email == "") {
        showToast('Please enter your email', 'error');
        return;
    }

    if (!email.includes('@') || !email.includes('.com')) {
        showToast('Please enter a valid email', 'error');
        return;
    }

    showToast('Form submitted successfully', 'success');
    userName.value = '';
    passwordELe.value = '';
    emailEle.value = '';
    showPasswordBtn.innerText = 'Show';
}

// Update dot position immediately when mouse moves
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
    cursorCircle.style.left = mouseX + 'px';
    cursorCircle.style.top = mouseY + 'px';
});

//diable mouse follower when entering the form
form.addEventListener('mouseenter', (e) => {
    cursorDot.style.display = 'none';
    document.body.style.cursor = 'pointer';
    cursorCircle.style.display = 'none';
})

//enable mouse follower when leaving the form
form.addEventListener('mouseleave', (e) => {
    cursorDot.style.display = 'block';
    document.body.style.cursor = 'none';
    cursorCircle.style.display = 'block';
})