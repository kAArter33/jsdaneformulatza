let n1 = document.getElementById('l1').value;
let n2 = document.getElementById('l2');
let n3 = document.getElementById('l3');
let przycisk = document.querySelector('button');

przycisk.onclick = function pobierz() {

    let p1 = document.getElementById('paragraf1');
    p1.textContent = (l1.value);
    let p2 = document.getElementById('paragraf2');
    p2.textContent = (l2.value);
    let p3 = document.getElementById('paragraf3');
    p3.textContent = (l3.value);



}