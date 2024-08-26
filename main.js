/*
let array = [1, 3, 6, 7, 10, 15];
let primeArray = array.filter((elem, index) => {
    if (elem <= 0) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(elem); i++) {
        if (elem % i === 0) {
            return false; 
        }
    }

    return true; 
});

console.log(primeArray);
*/


/*
let social = [ 
{source: "instagram", text: "Ваша світлина сподобалась 3 підписникам", date: "20.08.2024"},
{source: "facebook", text: "Вам прийшло 1 сповіщення", date: "23.08.2024"},
{source: "telegram", text: "У вас 1 пропущений дзвінок", date: "26.08.2024"}
];
let groupedSocial = Object.groupBy(social, (social) => {
    return social.text;
});
console.log("groupedSocial:",groupedSocial);
*/



let electronics = [
    { type: 'phone', name: 'Samsung' },
    { type: 'computer', name: 'Acer' },
    { type: 'TV', name: 'Sony' }
  ];
  let groupedElectronics = Object.groupBy(electronics, (electronics) => {
    return electronics.name;
  });
  
  console.log("groupedElectronics:", groupedElectronics); 
  

 





