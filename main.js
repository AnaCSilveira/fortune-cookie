function handleClick(event) {
  event.preventDefault();

  document.querySelector(".screen1").classList.toggle("hide");
  document.querySelector(".screen2").classList.toggle("hide");
}

const button = document.querySelector("#btn-back");

button.addEventListener("click", handleClick);
