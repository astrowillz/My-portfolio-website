var typed = new Typed(".auto-type",{
    strings: ["Software developer.", "Web developer.","Front-end developer.", "Back-end developer.","Full-stack developer."],
    typeSpeed: 30,
    backSpeed: 30,
    loop:true
})

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }