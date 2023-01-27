let buttonFaq = document.getElementsByClassName("question_button");
let img = document.querySelectorAll(".img-icon");
let i;
for (i = 0; i < buttonFaq.length; i++) {
  buttonFaq[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.style.fontWeight = "700";
    let body = this.nextElementSibling;
    if (body.style.display === "block") {
      body.style.display = "none";
      this.style.fontWeight = "";
    } else {
      body.style.display = "block";
    }
  });
}
