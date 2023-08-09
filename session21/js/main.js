let data = {id:1,name:"Nguyễn Văn A"};
// ko ép về kiểu json 
// lưu vào local
localStorage.setItem("data",JSON.stringify(data));
localStorage.setItem("string","Hello world");
localStorage.setItem("number",100);
localStorage.setItem("number",200);
localStorage.setItem("boolean",true);
localStorage.setItem("char",'c');
let array = [[1,2],[3,4]];
// console.log(array);
localStorage.setItem("array",JSON.stringify(array));

// lấy dữ liệu về
let dataGetLocal = JSON.parse(localStorage.getItem("data"));
console.log(dataGetLocal);
console.log(JSON.parse(localStorage.getItem("array")));


// {
//     "students": [
//         {"id":1,"name":"John","age":22},
//         {"id":1,"name":"John","age":22},
//         {"id":1,"name":"John","age":22}
//     ]
// }



let obj = {
    students: [
        {id:1,"name":"John","age":22},
        {id:1,"name":"John","age":22},
        {id:1,"name":"John","age":22}
    ]
}


// console.log(JSON.stringify(obj));
localStorage.setItem("number", "hunng")


// sessionStorage
sessionStorage.setItem("data",JSON.stringify(data));

// xóa 1 phần tử theo key
localStorage.removeItem("data");
localStorage.removeItem("array");
// localStorage.clear();

console.log(new Date());
// cookie
document.cookie = "username = David Bishop; expires=0";
document.cookie = "username = Hunghx; expires=0";
document.cookie = "password = Hunghx; expires=0";

// lấy ra và xử lý cookie
let cookie = document.cookie;
console.log(cookie);
let arrayCookie = cookie.split("; ")
console.log(arrayCookie);
let findIndex = arrayCookie.findIndex((value)=> value.startsWith("username="))
console.log(arrayCookie[findIndex].split("=")[1]);
