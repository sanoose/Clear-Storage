// let obj = new Map() ;

// obj.set("s",3) ;
// obj.get("s") ;
// obj.set(false,3) ;
// console.log(obj.get("s")) ;
// console.log(obj.size) ;
// console.log(obj.has(false)) ;
// console.log(obj.delete(false)) ;


// let Obj2 = new Map([
//     ["a" , 1 ] ,
//     ["b", 2] ,
//     [1 , 3] 
// ]);
// Obj2.clear();
// console.log(Obj2) ;

// let obj1 = {1 : 1} ;
// let weak_map = new WeakMap() ;
// weak_map.set(obj1,1);
// console.log(weak_map) ;

// let a = {b : 1 , c : 2 , d : 3 , e : 4} ;

// console.log(Array.from("SadaddDa")) ;
// let arr1 = [1,1,2,3,4] ;

// console.log(Array.from(arr1,function(el){
//     return +el + +el })) ;

// let set = new Set(arr1) ;
//     console.log(Array.from(set)) ;
//     console.log(...[set]) ;
// // console.log(Array.from(a)) ;

// function fr () {
//     return Array.from(arguments) ;
// }
// console.log(fr(1,2,3,4,5,2,2,2,2,2)) ;

// let x = [1,2,3,4,5,6] ;
// x.copyWithin(0,-3 , -1) ;
// console.log(x) ;


// let arr = [1,2,3,4,5,6,7,8,9,10] ;

// let obj = {
//     min : 10 , 
//     max : 20 ,
// }

// let check = arr.some(function(e){
//     return e >= this.min  && e <= this.max ;
// } , obj) ;

// console.log(check) ;


// obj = {
//     10 : "a" , 
//     20 : 'b' ,
//     30 : 'c' ,
//     40 : 'd' ,
// }
// let arr = Object.keys(obj) ;
// let arr_ = arr.map((e)=> +e );

// let ever = arr_.every(function(e){
//     return e >= this ;
// },9) ;

// console.log(ever) ;


// let array = [1,2,3] ;
// let copy = array ;
// console.log(copy) ;

// console.log([..."sanoose"]) ;

// let Old_Friends = ["sanoose" , "Mohammed" , "zeko "] ;
// let New_Friends = ["Taha","Sawsn"] ;
// Old_Friends.push(...New_Friends) ;
// console.log(Old_Friends) ;

// let obj1 = {
//  1 : 10 , 
//  2 : 20 , 
//  3 : 30 ,
// }
// let obj2 = {
//  4 : 40 , 
//  5 : 50 ,
//  6 : 60 ,
// }

// let obj3 = {...obj1 , ...obj2} ;
// console.log(obj3) ;


// let n1 = [10,30,10,20] ;
// let n2 = [30,20,10] ;

// console.log((n1[n2.length] *  Math.min(...n2) ) + Math.min(...n2)) ;


// q1 

// let setOfNumbers = new Set([10]) ;
// setOfNumbers.add(20) ;
// setOfNumbers.add(setOfNumbers.size) ;
// console.log(setOfNumbers) ;
// console.log(Math.min(...setOfNumbers) ) ;

// q2 

// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// console.log ([...new Set(myFriends)].sort()) ;
// // Needed Output
// // (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']


//q3 

// let myInfo = {
//     username: "Osama",
//     role: "Admin",
//     country: "Egypt",
//   } ;
  
//   let map1 = new Map() ;
//   map1.set(Object.keys(myInfo)[0],myInfo.username) ;
//   map1.set(Object.keys(myInfo)[1],myInfo.role) ;
//   map1.set(Object.keys(myInfo)[2],myInfo.country) ;
//   console.log(map1) ;
//   console.log(map1.size) ;
//   console.log(map1.has("role")) ;
//   // Needed Output
// //   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// //   3
// //   true

// // q4 

// let theNumber = 100020003000 + "";
// console.log(parseInt ([...(new Set([...theNumber]))].filter((e)=> e != "0").join(""))) ;


// // Needed Output
// // 123


//  // q5 

//  let theName = "Elzero";

// // Needed Output
// let M1 = ['E', 'l', 'z', 'e', 'r', 'o'] ;
// let M2 = [...theName] ;
// let M3 = theName.split("") ;
// let M4 = [] ;

// for (let i = 0 ; i < theName.length ; i ++  ) {
//     M4.push(theName[i]) ;
// }

// let M5 = Array.from(theName);

// let M6 = [] ;
// for (let i = 0 ; i < theName.length ; i ++  ) {
//     M6[i] = theName.charAt(i) ;
// }
// console.log(M1) ;
// console.log(M2) ;
// console.log(M3) ;
// console.log(M4) ;
// console.log(M5) ;
// console.log(M6) ;

// /// q6 

// let chars = ["A", "B", "C",1, "D", "E", 10, 15, 6 , "f" , "g" , 12 , "h"];
// let Number_count = 0 ;
// chars.sort() ;
//     chars.forEach((e)=>{
//         if (typeof(e) === 'number')
//         {Number_count++ ;}
//     });
   
// console.log(Number_count) ;
// console.log(chars) ;
// chars.copyWithin(0, Number_count , (Number_count * 2 ));

// console.log(chars) ;




// let chars = [10, 15, 6, "A", "B", "C", "D", "E"];

// let chars = ["A", "B", "C", "A", "B", "C", "D", "E"];


// q7 
// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];

// let M1 =  [...numsOne , ...numsTwo] ;
// let M2 = []
// let M4 = ((numsOne.join("") + numsTwo.join("")).split("")) ;
//     M4.forEach((e,i)=>{M4[i] = +e ;});
// let M5 = [] ;


// console.log(M1) ;
// console.log(M2.concat(numsOne , numsTwo )) ;
// console.log(numsOne.concat(numsTwo)) ; // Method 3 
// console.log(M4) ;

// for (let i = 0 ; i < numsTwo.length ; i++ )
// numsOne.push(numsTwo[i]) ;

// console.log(numsOne) ;
// console.log(M6) ;

// Needed Output
// [1, 2, 3, 4, 5, 6] 

let input1 = document.querySelector('input') ;
let input2 = document.querySelector('button') ; 
let container = document.querySelector('.container') ;  
id = 0 ;

let data = [] ;
let object = {
    id : 0 , value1 : "" ,
};

localStorage.clear() ;

if (localStorage.getItem("data")) {
    data = JSON.parse(localStorage.getItem("data"))  ;
    data.forEach(el => {
        let h1 =   document.createElement("h1") ;
      
        h1.innerHTML = el.value1 ;
        container.appendChild(h1) ;
       });
    } ;



input2.onclick = function(){
    if (input1.value != "") {
        let h1 =   document.createElement("h1") ;
      h1.innerHTML = input1.value ;
      object.value1 = input1.value ;
    //   object.id ++ ;
      data.push(object) ;
      console.log(data) ;
      window.localStorage.setItem("data" ,JSON.stringify(data)  ) ;
      container.appendChild(h1) ;
      h1.className = "1" ;
      console.log(h1.getAttribute("class") ) ;
    }
}
// let new_data =  [] ;
// localStorage.clear() ;

//  if  (window.localStorage.getItem('data') == null) {
    //  window.localStorage.setItem('data','[]') ;
//  }else {
//     for (let i = 0 ; i< JSON.parse(window.localStorage.getItem('data')).length ; i++ ) {
//         console.log(i) ;
//         document.querySelector('h1').innerHTML += JSON.parse(localStorage.getItem('data'))[i];
//     }
//  }

// let old_data = JSON.parse( window.localStorage.getItem('data')) ; 

 


// myarray.push(JSON.parse(window.localStorage.getItem('data'))) ;

// input2.addEventListener('click' , function() {
    // window.localStorage.setItem('data', JSON.stringify(document.querySelector('input'))) ;
    // if (input1.value != "") {
        // old_data.push(input1.value) ;
        // window.localStorage.setItem('data', document.querySelector('input')) ;
    // document.querySelector('h1').innerHTML += '<br/>' + input1.value ;
    // }
// });
