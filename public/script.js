const button = document.getElementById('no-button');
button.addEventListener('mouseover', function () {
    button.style.position = "absolute";
    button.style.left = `${Math.ceil(Math.random() * 90)}%`;
    button.style.top = `${Math.ceil(Math.random() * 90)}%`;
});


const firstPage = document.getElementById('first-page');
const secondPage = document.getElementById('second-page');
const yesButton = document.getElementById('yes-button');
yesButton.addEventListener('click', function () {
    firstPage.style.display = "none";
    secondPage.style.display = "flex";
});

const nextButton = document.getElementById('next');
if (nextButton) {
  nextButton.addEventListener("click", function () {
    window.location.href = "/password";
  });
}

