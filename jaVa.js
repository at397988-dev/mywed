
// FORM SUBMIT
const form = document.getElementById("sheetdb-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
  })
  .then(response => response.json())
  .then(data => {
    alert("Thank you! Your form has been submitted successfully.");
    form.reset();
  })
  .catch(error => {
    console.error("Error:", error);
    alert("There was a problem submitting your form.");
  });
});


// ROBOT ANIMATION
const robot = document.querySelector(".robot");

document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 25;
  const y = (window.innerHeight / 2 - e.pageY) / 25;

  robot.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
});

robot.addEventListener("click", () => {
  robot.style.transform = "scale(1.5) rotate(360deg)";
  robot.style.transition = "0.5s";

  setTimeout(() => {
    robot.style.transition = "0.2s";
  }, 500);
});