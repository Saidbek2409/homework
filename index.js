
// let nms = ['Abbos', 'Valentina', 'Odilbek', 'Shaxzod', 'Xojik',
//     'Emil', 'Saidbek', 'Morgenshtern', 'Alisher', 'Daler']
// let long_name = nms.reduce((a, b) => {
//     if (a.length > b.length) {
//         return a
//     } else {
//         return b
//     }
// })
// console.log(long_name);




// // Отфильтровать задачи в переменные а и b
// // Сохранить количество в ключе count
// // Сохранить сами задачи в массиве-ключе arr
// let arr = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "delectus aut au`tem",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "quis ut nam facilis et officia qui",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "fugiat veniam minus",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 4,
//         "title": "et porro tempora",

//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 5,
//         "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 6,
//         "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 7,
//         "title": "illo expedita consequatur quia in",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 8,
//         "title": "quo adipisci enim quam ut ab",
//         "completed": true
//     },
//     {
//         "userId": 1,

//         "id": 9,
//         "title": "molestiae perspiciatis ipsa",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 10,
//         "title": "illo est ratione doloremque quia maiores aut",
//         "completed": true
//     },
// ]
// let a = {

//     arr: []
// }

// let b = {

//     arr: []
// }

// arr.filter(item => {
//     let key = item.completed
//     // console.log(key); 

//     if (key === true) {

//         a.arr.push(item )
//     } else if (key === false) {

//         b.arr.push(item)
//     } else {
//         console.log(key);
//     }
// })

// console.log(a, b);


// let car = {
//     color: prompt('which color?'),
//     mark: prompt('which mark?'),
//     engine: prompt('engine force?'),
//     isTurbo: confirm('is turbo?'),
//     hasHatch: confirm('with hatch?'),
//     price: prompt('price?'),
// }


// let cars = [{
//     id: Math.random(),
//     color: "red",
//     mark: "ferrari",
//     engine: 5.0,
//     isTurbo: true,
//     hasHatch: false,
//     price: 500000,
//     img: "https://cdn.motor1.com/images/mgl/Znnm7r/s3/ferrari-sp48-unica.webp"



// },
// { 
//     id: Math.random(),
//     color: 'green',
//     mark: 'lamborgine',
//     engine: 4.2,
//     isTurbo: true,
//     hasHatch: false,
//     price: 650000,
//     img: 'https://avatars.mds.yandex.net/i?id=6b49ade43c6a3aff42ecd5b572202632_l-5583010-images-thumbs&n=13'

// },
// { 
//     id: Math.random(),
//     color: 'blue',
//     mark: 'lacceti',
//     engine: 3.2,
//     isTurbo: true,
//     hasHatch: false,
//     price: 120000,
//     img: 'https://avatars.mds.yandex.net/i?id=5fe553aefc5fa669669ae25648c42a67_l-5287716-images-thumbs&n=13'

// },
// {
//     id:Math.random(),
//     color: 'yellow',
//     mark: 'lamborgine urus ',
//     engine: 8.2,
//     isTurbo: true,
//     hasHatch: true,
//     price: 500000,
//     img: 'https://avatars.mds.yandex.net/i?id=ef9fa34842e638d11dc73528278e6577-5236667-images-thumbs&n=13'
// },
// { 
//     id: Math.random(),
//     color: "white",
//     mark: "lada_zhiguli06",
//     engine: 3.0,
//     isTurbo: false,
//     hasHatch: false,
//     price: "1500",
//     img: "https://avatars.mds.yandex.net/i?id=f7fa48ba965ef47f7cd70e2beb63c65f-4538204-images-thumbs&n=13"
// },
// { 
//     id: Math.random(),
//     color: "white",
//     mark: "mustang",
//     engine: 6.0,
//     isTurbo: true,
//     hasHatch: true,
//     price: "50000",
//     img: "https://avatars.mds.yandex.net/i?id=61fce67a170382a6b79d101a298bf1085a71f1dd-4578804-images-thumbs&n=13&exp=1"
// },
// {
//     id: Math.random(),
//     color: "grey",
//     mark: "malibu",
//     engine: 4.5,
//     isTurbo: true,
//     hasHatch: true,
//     price: "250000",
//     img: "https://avatars.mds.yandex.net/i?id=fe4f9f39f25cd9dfbe771c5f809f6794-4184248-images-thumbs&n=13&exp=1"
// },
// {
//     id: Math.random(),
//     color: "blue",
//     mark: "buggati chiron",
//     engine: 10.4,
//     isTurbo: true,
//     hasHatch: false,
//     price: "750000",
//     img: "https://i-tc.ru/wp-content/uploads/2022/01/scale_1200-23.webp"
// },
// ]


// let max = cars.reduce((a,b) => a.engine > b.engine ? a : b)


// cars.forEach(item => {
//     let percent = item.engine * 100 / max.engine 
//     document.write(`
//        <div class="block" >
//             <span>car id: ${item.id}</span> <hr>
//             <i>${item.mark}</i> 
//             <b style="color: ${item.color};" >${item.color}</b> <br>
//             <b>Турбо мотор: ${item.isTurbo === true ? "Да" : "Нет"}</b>  <br>      
//             <b>С люком: ${item.hasHatch === true ? "Да" : "Нет"}</b>    
//             <div class="eng">
//                 <div class="fill" style="width: ${percent}%;" >${Math.round(percent)}%</div>
//             </div>
//             <img src="${item.img}" alt="${item.mark}" />
//             <h3>Цена: ${item.price}</h3>        
//        </div>
//     `)
// })

// setTimeout(() => {
//     let a = prompt('Какую машину хотите удалить?')
//      cars.forEach(item => {
//         if(a == item.id ){
//            confirm(a.item) 
//            cars.splice(a)
//            console.log("вы успешно преобели машину  "  +  a);
//         } else{console.log('действие не определено');}
//     })
// }, 3000);











// cars.forEach(item => {
//     let percent = item.engine * 100 / max.engine
//     document.write(`
//        <div class="block" >
//             <span>car id: ${item.id}</span> <hr>
//             <i>${item.mark}</i> 
//             <b style="color: ${item.color};" >${item.color}</b> <br>
//             <b>Турбо мотор: ${item.isTurbo === true ? "Да" : "Нет"}</b>  <br>      
//             <b>С люком: ${item.hasHatch === true ? "Да" : "Нет"}</b>    
//             <div class="eng">
//                 <div class="fill" style="width: ${percent}%;" >${Math.round(percent)}%</div>
//             </div>
//             <img src="${item.img}" alt="${item.mark}" />
//             <h3>Цена: ${item.price}</h3>        
//        </div>
//     `)
// })


// Спросить у пользователя м






// let filtered = cars.filter(item => { 
//  if(item.color === car.color){ 
//  if(item.mark === car.mark){ 
//  if(item.engine >= 2.0){ 
//  if(item.isTurbo === true || item.isTurbo === false){ 
// if(item.hasHatch === true){ 
//  if(item.price >= 100000){ 
//     return item 
// } 
// }  } 
// } 
// } 
// } else{ 
//     console.log("подходящей машины нет"); 
//  } 
// }) 
// console.log(filtered);






// let машины = cars.filter(key => {
//     if(key.mark === car.mark){
//         return key
//     } else {
//         console.log("<-- Столько машин вам не подходит");
//     }
// })
// console.log(key);


// cars.filter (item => {
//     if (cars.price >= 500000 && cars.engine >= 5.0 && cars.mark === 'ferrari' && cars.color === 'red') {
//         console.log(cars[0])
//     } else if (car.price >= 650000 && car.engine >= 4.2 && car.mark === 'lamborgine' && cars.color === 'green' ) {
//         console.log(cars[1])
//     }  else if (car.price >= 120000 && car.engine >= 3.2 && car.mark === 'lacceti' && cars.color === 'blue') {
//         console.log(cars[2])
//     }  else if (car.price >= 500000 && car.engine >= 8.2 && car.mark === 'lamborgine urus ' && cars.color === 'yellow') {
//         console.log(cars[3])
//     } else if (car.price >= 500000 && car.engine >= 6.0 && car.mark === ' mustang' && cars.color === 'white') {
//         console.log(cars[4])
//     } else if (car.price >= 250000 && car.engine >= 4.5 && car.mark === 'malibu' && cars.color === 'grey') {
//         console.log(cars[5])
//     } else if (car.price >= 1500 && car.engine >= 3.0 && car.mark === 'lada_zhiguli06' && cars.color === 'white') {
//         console.log(cars[6])
//     }  else{console.log("я не смог подобрать машину")}



// })


// 1 //
let student = {
    name: "Saidbek",
    surname: "Rahimov",
    age: 13
}

let passportData = {
    serries: "BS",
    number: 23147223154,
    date: 2009
}




let New = {

}

let New2 = {

}

console.log(
    Object.keys(Object.assign(New,student))
)

console.log(
    Object.values(Object.assign(New,student))
)



console.log(
    Object.assign(student, passportData)
)

// 2 //
let New3 = []

let New4 = []
console.log(
    Object.keys(New3,student)
);

console.log(
    Object.keys(New4,student)
);


console.log(
    Object.assign(New3,New4)
);


// 4 //
let arr = ["Saidbek",13,"Rahimov",2009,23147223154,"BS"]

let num = 0
let str = 0
let bool = 0
let obj = 0
arr.filter(item => {
    if (typeof item  === 'number') { 
        num++
    } else if (typeof item === 'string')
        str++
    else if (typeof item === 'boolean') 
       bool++
    else if (typeof item === 'object')  
      obj++
})



console.log(num,str,bool,obj);













