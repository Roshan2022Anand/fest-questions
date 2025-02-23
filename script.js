// question 2

// option 2.1
const one = document.querySelector('.one');
let i = 6;
while (i <= 10) {
    one.innerHTML += '<div class="box"></div>';
    ++i;
}

// option 2.2 correct [used div id instead of class]
const one = document.querySelector('#one');
for (let i = 5; i > 0; i--) {
    one.innerHTML = one.innerHTML + '<div class="box"></div>';
}

// option 2.3
const one = document.querySelector('.one');
[10, 11, 12, 13, 14].forEach(() => {
    one.innerHTML += '<div class="box"></div>';
});

// option 2.4
for (let i = 1; i <= 5; i++) {
    document.querySelector('.one').innerHTML += '<div class="box"></div>';
}


// question 4
//base
const fruits = ['apple', 'banana', 'orange', 'mango', 'pear'];

//option 4.1
const box = document.querySelector('.one');
const index = fruits.length - 2
box.innerText = fruits[index];

//option 4.2 correct [const can't be reassigned]
const box = document.querySelector('.one');
const index = 10;
for (let i = 0; i < fruits.length; i++) {
    if (i == 3) {
        index = i
    }
}
box.innerText = fruits[index];

// option 4.3
const box = document.querySelector('.one')
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i][0] == 'm') {
        box.innerText = fruits[i];
    }
}

// option 4.4
const box = document.querySelector('.one')
for (let i = 0; i < fruits.length; i++) {
    fruits[i] = 'mango'
}
box.innerText = fruits[fruits.length - 1]

