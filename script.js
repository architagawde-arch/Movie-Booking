function checkName() {
    let name = document.getElementById("name").value;
    if (name.length < 3) {
        document.getElementById("nameError").innerHTML = "Min 3 characters";
        return false;
    }
    document.getElementById("nameError").innerHTML = "";
    return true;
}

function validateEmail() {
    let email = document.getElementById("email").value;
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid Email";
        return false;
    }
    document.getElementById("emailError").innerHTML = "";
    return true;
}

function calculateTotal() {
    let price = document.getElementById("movie").value;
    let tickets = document.getElementById("tickets").value;

    let total = price * tickets;
    if (!isNaN(total)) {
        document.getElementById("total").value = total;
    }
}