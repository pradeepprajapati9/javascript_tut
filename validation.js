let form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let Nameinput = document.getElementById("Nameinput").value;
    let Numberinput = document.getElementById("Numberinput").value;
    let Emailinput = document.getElementById("Emailinput").value;
    let Passwordinput = document.getElementById("Passwordinput").value;
    let Genderinput = document.getElementById("Genderinput").value;
    let Addressinput = document.getElementById("Addressinput").value;



    if (Nameinput === '' || Numberinput === '' || Emailinput === '' || Passwordinput === '' || Genderinput === '' || Addressinput === '')
     {
        alert("please fill all fields")
        
    } else {
        submitFormData(Nameinput, Numberinput, Emailinput, Passwordinput, Genderinput, Addressinput);
    }
})

function submitFormData(Nameinput, Numberinput, Emailinput, Passwordinput, Genderinput, Addressinput) {
    document.write("data submit");
    document.write("Your Name:=>", Nameinput, "<br>");
    document.write("Your Number:=>", Numberinput, "<br>");
    document.write("Your Email:=>", Emailinput, "<br>");
    document.write("Your Password:=>", Passwordinput, "<br>");
    document.write("Your Gender:=>", Genderinput, "<br>");
    document.write("Your Address:=>", Addressinput, "<br>");
}

