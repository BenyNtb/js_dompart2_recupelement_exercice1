// 1

let para1 = document.getElementsByTagName('p')
console.log(para1[0].innerText);

// 2

let para2 = document.getElementsByTagName('p')[2]
console.log(para2.innerText);

// 3

let para3 = document.getElementsByTagName('p')[4]
console.log(para3);



// CORRECTION


//1 par la class
let classTartine = document.getElementsByClassName('tartine')
console.log(classTartine[0].innerText);

//2 par l'id
let idToast = document.getElementById('toast')
console.log(idToast.innerText);

//3
console.log(classTartine[1]);


// par la balise
let titre = document.getElementsByTagName('h1')