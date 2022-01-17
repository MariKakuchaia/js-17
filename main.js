//1. html ფაილში (ჯავასკრიპტით არა) შევქმნათ ღილაკი, ამ ღილაკის კლიკზე წაიშალოს თვითონ ეს ღილაკი.
const myButton=document.querySelector("#mybutton");
const buttonClick = (e)=>{
    myButton.remove();
}
myButton.addEventListener("click",buttonClick);

// 2. ჯავასკრიპტით შევქმნათ img tag რომელსაც src ად მივანიჭებთ ამ:
// https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg სურათის ლინკს და ეს შექმნილი img ჩავსვათ body ში (ჯავასკრიპტით).
const imgTag = document.createElement("img");
imgTag.setAttribute("src","https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg");
document.body.appendChild(imgTag);

//4.1
const users = [
       {
           id: 7,
           email: "michael.lawson@reqres.in",
           first_name: "Michael",
           last_name: "Lawson",
           avatar: "https://reqres.in/img/faces/7-image.jpg"
         },
       {
         id: 8,
         email: "lindsay.ferguson@reqres.in",
         first_name: "Lindsay",
         last_name: "Ferguson",
         avatar: "https://reqres.in/img/faces/8-image.jpg"
       },
       {
         id: 9,
         email: "tobias.funke@reqres.in",
         first_name: "Tobias",
         last_name: "Funke",
         avatar: "https://reqres.in/img/faces/9-image.jpg"
       },
       {
         id: 10,
         email: "byron.fields@reqres.in",
         first_name: "Byron",
         last_name: "Fields",
         avatar: "https://reqres.in/img/faces/10-image.jpg"
       },
    ];

//4.2 4.3
//const divUserList = document.querySelector("#user-list");
//function usersInfo(){
    //const usereEments=users.map(user =>{
       // return <div class="user-item"><div class="user-div"><img class="image" src="user.avatar"><span class="name">${user.first_name}</span><div class="info-del-div"><span class="delete-logo">delete</span><span class="info-logo">info</span></div></div></div>
    //})
//};

//divUserList.append(usersInfo);