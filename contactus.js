const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
})

function formValidation(){

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    var checkbox = document.getElementById('checkbox');
    let message = document.getElementById('message').value;

    if(firstName === ''){
        alert('Mohon isi nama yang valid!');
        return;
    }

    if(lastName === ''){
        alert('Mohon isi nama yang valid!');
        return;
    }

    if(email === ''){
        alert('Mohon isi email yang valid!');
        return;
    }

    if(phone === ''){
        alert('Mohon isi nomor yang valid!');
        return;
    }

    if(!checkbox.checked){
        alert('Anda belum setuju pada Syarat dan Ketentuan kami!');
        return;
    }

    if(message === ''){
        alert('Mohon tidak mengirim pesan yang kosong!');
        return;
    }

    alert('Pesan telah dikirim! Anda sedang dialih, mohon tunggu sebentar...');
}

document.getElementById("myAnchor").addEventListener("click", function(event){
    event.preventDefault();
    formValidation();
});