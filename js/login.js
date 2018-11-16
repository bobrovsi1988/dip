
function loginForm() {
    var email = document.getElementById('inputEmail3').value;
    var pass = document.getElementById('inputPassword3').value;

    var trueemail = 'bob@mail.ru';
    var truepassword = '1234';

    // console.log(pass);
    if (email == trueemail && pass == truepassword){
        return window.location.href = "admin.html";
    }else {
       return alert("access denied");

    }

}
