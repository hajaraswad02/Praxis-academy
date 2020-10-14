function onClickEmail() {
    let email = document.getElementById("email").value;
    let regEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ig
    let regName = /^([a-z0-9_\.-]+)/ig
    let regDomain = /([\da-z\.-]+)\.([a-z\.]{2,6})$/ig

    regEmail = email.match(regEmail);
    regName = email.match(regName);
    regDomain = email.match(regDomain);

    if(regEmail){
        alert(`Hai, nama pengguna kamu adalah ${regName}, domain kamu adalah ${regDomain}`);
    }else{
        alert(`Email yang kamu masukin salah!`);
    }
}
