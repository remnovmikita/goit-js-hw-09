
const formData = {
    email: "", message: ""
}
const email = document.querySelector('[name="email"]');
const textArea = document.querySelector('[name="message"]');
const form = document.querySelector('.feedback-form');
const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));
if (savedData){
    email.value = savedData.email || "";
    textArea.value = savedData.message || "";
    formData.email = savedData.email || "";
    formData.message = savedData.message || "";
}

form.addEventListener("input", even =>{
    formData[even.target.name] = even.target.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
})


form.addEventListener("submit", even => {
    even.preventDefault();
    if (formData.email === "" || formData.message === ""){
        alert("Fill please all fields");
        return
    }
    console.log("Submitted data:", formData);

    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    form.reset();
});