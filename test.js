var myList = [
    "water",
    "salad",
    "papad",
    "Aloo parata",
    "chai",
    "samosa",
    "jalebi",
    "chhole Bhature",
    "pulaoooo",
    "sanitizer"
];

const ML = document.querySelector('.menuList ul');

for (var x = 0; x < myList.length; x++) {
    const mybutton = document.createElement('button');
    mybutton.className = "btn";
    mybutton.innerHTML = myList[x];
    ML.appendChild(mybutton);
}

const cartL = document.querySelector('.cart ul');
const myBtn = document.querySelector('.btn');


myBtn.onclick = function(e) {
    e.preventDefault();

    const myLi = document.createElement('li');
    myLi.innerHTML = myBtn.innerHTML;
    cartL.appendChild(myLi);

    const myspan = document.createElement('span');
    myspan.innerHTML = " X ";
    myLi.appendChild(myspan);

    const close = document.querySelectorAll('span');
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', () => {
            close[i].parentElement.style.opacity = 0;
            setTimeout(() => {
                close[i].parentElement.style.display = "none";
                close[i].parentElement.remove();
            }, 500);

        })
    }
}

const submit = document.querySelector('.submit');
submit.onclick = function() {
    alert("your Order Placed!!!\n  Happy Meel");
}