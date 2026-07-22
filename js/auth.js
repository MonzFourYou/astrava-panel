const form = document.getElementById("loginForm");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username==="admin" && password==="admin"){

        alert("Login Berhasil!");

        window.location.href="pages/dashboard.html";

    }else{

        alert("Username atau Password Salah!");

    }

});
