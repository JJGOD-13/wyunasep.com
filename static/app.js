// Intersection observer to do all the animated text.
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el)); 

// document selectors
let person = document.getElementsByName("name").innerHTML;
let email = document.getElementsByName("email").innerHTML;
let message = document.getElementsByName("message").innerHTML;

// Check the persons entries into the form and validate
function check(){
    if (person == null){
        alert("Please enter your name");
        refresh();
        return false;
    }

    else if (email == null){
        alert("Please enter your email");
        refresh();
        return false;
    }
    else if (message == null){
        alert("Please enter your message");
        return false;
    }

    return true;
}


