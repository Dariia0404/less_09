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

/*
function groupBy(cb, currentValue, index, arr){
let result = [];

for (let i = 1; i < arr.length; i++) {
    result [i] = cb(arr[i], i, arr) 
}
return result;
}
const data = [
    { type: 'food', name: 'Pizza' },
    { type: 'drink', name: 'Coffee' },
    { type: 'food', name: 'Hot Dog' }
  ];
  
  const { food, drink } = Object.groupBy(data, item => item.type);
  
  console.log(food); 
  console.log(drink);
  */
/*
  function groupBy(arr,cb){
    const result = [];

    for (let i = 0; i < arr.legth; i++){
        result[i] = cb(arr[i], i, arr);
    }

    return result;
  }

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const newArray = groupBy(arr, (item) =>{
    return item, 3;
  });

  console.log("newArray:", newArray);
 */

  function groupBy(arr, cb) {
    return arr.reduce((acc, item) => {
        const key = cb(item);
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {});
}

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let groupedData = groupBy(data, Math.floor);
console.log(groupedData);

