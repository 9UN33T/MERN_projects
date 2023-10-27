validate = () => {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let mobile = document.querySelector("#mobile").value;
    let password = document.querySelector("#password").value;
    let confirmpass = document.querySelector("#confirmpass").value;
    let emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (name == "") {
        document.querySelector("#nameerror").classList.add("error");
    }
    else {
        document.querySelector("#nameerror").classList.remove("error");
    
    }
    if (email == "") {
        document.querySelector("#emailerror").classList.add("error");
    }
    else {
        // if(email.value.match(emailpattern)){
        //     document.querySelector("#emailerrorpattern").classList.add("error");
        // }
        // else{
        //     document.querySelector("#emailerrorpattern").classList.remove("error");
        // }
        document.querySelector("#emailerror").classList.remove("error");
    }
    if (mobile == "") {
        document.querySelector("#mobileerror").classList.add("error");
    }
    else {
        document.querySelector("#mobileerror").classList.remove("error");
    }
    if (password == "") {
        document.querySelector("#passworderror").classList.add("error");
    }
    else {
        document.querySelector("#passworderror").classList.remove("error");
    }
    if (confirmpass == "") {
        document.querySelector("#confirmerror").classList.add("error");
    }
    else {
        document.querySelector("#confirmerror").classList.remove("error");
        if (password !== confirmpass) {
            document.querySelector("#notsamepass").classList.add("error");
        }
        else {
            document.querySelector("#notsamepass").classList.remove("error");
        }
    }
}
reset = () => {
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#mobile").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#confirmpass").value = "";
    var errorArray = ['#nameerror','#emailerror','#mobileerror','#passworderror','#confirmerror','#notsamepass'];
    $(errorArray.join()).removeClass('error');
    // var testvalue = document.querySelectorAll('#nameerror','#emailerror','#mobileerror','#passworderror','#confirmerror','#notsamepass')
    // testvalue.classList.remove("error");
}