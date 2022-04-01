document.addEventListener("click", (event) => {
  const targetEle = event.target;
  const allLiArr = [...document.querySelectorAll(".nav-items > li")];
  const activeLi = targetEle.closest("li");
  const indicator = document.querySelector(".indicator");

  //   Working only if one of the 'li' is target element, if not default
  if (activeLi) {
    document
      .querySelectorAll("li")
      .forEach((ele) => ele.classList.remove("active"));

    activeLi.classList.add("active");
    indicator.style.setProperty("--position", allLiArr.indexOf(activeLi));
  }
});
