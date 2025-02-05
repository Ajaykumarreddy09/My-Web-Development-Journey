// console.log("Hello....!")
// document.write("Hello..!")
// //alert("Form success..!")

// //1.String
// var a="helo we are learning"
// console.log(a)
// document.write(a)
// console.log(typeof(a))


// //2.numbers
// let b=12345.789
// console.log(b)
// console.log(typeof(b))

// //3.boolean
// let c=true
// console.log(c)
// console.log(typeof(c))

// //4.undefined--var with no data
// var d;
// console.log(d)
// console.log(typeof(d))

// //5.null
// let e =null
// console.log(e)
// console.log(typeof(e))


//global variables--outside the function declaration of var
//local variables--inside the function declaration of var


//non primitive
//1.array..in single variabel we can store n number of data
//creation--[arraydata]--it is mutable object
//array methods
// let arr=["Hello",true,123234,123.45,"jhwduefgud",null]
// console.log(arr)
// console.log(typeof(arr))
// console.log(arr.length)
// console.log(arr[3])//for retriving certain var


//lenght()--used to check the array length--starts from 1

//position()--used to get the specific data inside the array
//position starts from 0

//array methods
//1.pop()--used to remove the element in the end of the array

// let arr=["Hello",true,123234,123.45,"jhwduefgud",null]
// console.log(arr)
// arr.pop()
// console.log(arr)


//push()--used to add the element in end of the array
// let arr=["Hello",true,123234,123.45,"jhwduefgud",null]
// console.log(arr)
// arr.push("html")
// console.log(arr)

//shift()--used to remove the data from begining of the array
// let arr=["Hello",true,123234,123.45,"jhwduefgud",null]
// console.log(arr)
// arr.shift()
// console.log(arr)


//unshift()--used to add the element from begining of the array
// let arr=["Hello",true,123234,123.45,"jhwduefgud",null]
// console.log(arr)
// arr.unshift(null)
// console.log(arr)


//splice()--Add or Delete
// let arr=["Hello",true,123234,123.45,"jhwduefgud",null]
// console.log(arr)
// arr.splice(1,4,"css","html","python")
// console.log(arr)


// console.log(arr)
// console.log(arr.length)   

//slice()--only to get selected elements
// let a=["Hello",true,123234,123.45,"jhwduefgud",null,1234]
// console.log(a)

// let b=a.slice(1,5)
// console.log(b)

//indexof()--used to check the index position of the element
// let arr=["Hello",true,123234,123.45,"jhwduefgud",null]
// console.log(arr)
// let b=arr.indexOf("Hello")
// console.log(b)


//reverse()--used to reverse the order of array
// let arr=["Hello",true,123234,123.45,"jhwduefgud",null]
// console.log(arr)
// let b=arr.reverse(arr)
// console.log(b)


//sort()--used to make order wise array
// let arr=[1,2,5,70,9,4,8,3]
// console.log(arr)
// arr.sort()
// console.log(arr)
// let arr1=["D","A","F","z","e"]
// console.log(arr1)
// arr1.sort()
// console.log(arr1)

//concat()--Merging of 2 arrays

// let arr=["Hello",true,123234,123.45,"jhwduefgud",null]
// let arr1=["a",'b','c','d']
// let r= arr.concat(arr1)
// console.log(r)


//objects 
//by using single variable we can store multiple data as a keyname and key value
//{keyname:keyvalue}
let obj={
    name:"Ajay",
    city:"banglore",
    state:"KA",
    country:"India",
    num:12345678
}
console.log(obj)
console.log(obj.name)
console.log(obj.num)
console.log(obj.state)
console.log(obj["country"])











