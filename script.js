var randomName,randomEmail, randomdob, randomlocation, randomPhone, randompassword;
var iconpart=document.querySelectorAll(".material-symbols-outlined");
var image=document.getElementById("user-image");
var Name=document.getElementById("ran-name");
var desc=document.getElementById("ran-desc");

document.addEventListener("DOMContentLoaded", generateRandomUser);
function generateRandomUser(){
    fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data)=>{
        const user= data.results[0];
        image.src=user.picture.large;
        randomName=`${user.name.first} ${user.name.last}`;
        randomEmail=`${user.email}`;
        randomdob=`${user.dob.date}`;
        randomlocation=`${user.location.street.number} ${user.location.street.name}`;
        randomPhone=`${user.phone}`;
        randompassword=`${user.login.password}`;
        Name.innerText="Hi, My name is";
        desc.innerText=randomName;
        iconpart[0].style.color="green";
    });
} 
    iconpart[0].addEventListener('mouseover',generateName);
    iconpart[1].addEventListener('mouseover',generateEmail);
    iconpart[2].addEventListener('mouseover',generateDob);
    iconpart[3].addEventListener('mouseover',generateLocation);
    iconpart[4].addEventListener('mouseover',generatePhone);
    iconpart[5].addEventListener('mouseover',generatePassword);
    


function generateEmail(){
    Name.innerText="My email address is";
    desc.innerText=randomEmail;
    iconpart[1].style.color="green";
    iconpart[0].style.color="gray";
}



function generateName(){
    Name.innerText="Hi, My name is";
        desc.innerText=randomName;
        iconpart[0].style.color="green";
        iconpart[1].style.color="gray";
}

function generateDob(){
    Name.innerText="My DOB is";
    desc.innerText=randomdob;
    iconpart[0].style.color="gray";
    iconpart[1].style.color="gray";
    iconpart[2].style.color="green";
    
}


function generateLocation(){
    Name.innerText="My location  is";
    desc.innerText=randomlocation;
    iconpart[3].style.color="green";
    iconpart[2].style.color="gray";
    iconpart[1].style.color="gray";
    iconpart[0].style.color="gray";
}

function generatePhone(){
    Name.innerText="My phone number  is";
    desc.innerText=randomPhone;
    iconpart[4].style.color="green";
    iconpart[3].style.color="gray";
    iconpart[2].style.color="gray";
    iconpart[1].style.color="gray";
    iconpart[0].style.color="gray";
}

function generatePassword(){
    Name.innerText="My password is";
    desc.innerText=randompassword;
    iconpart[5].style.color="green";
    iconpart[4].style.color="gray";
    iconpart[3].style.color="gray";
    iconpart[2].style.color="gray";
    iconpart[1].style.color="gray";
    iconpart[0].style.color="gray";
}

    