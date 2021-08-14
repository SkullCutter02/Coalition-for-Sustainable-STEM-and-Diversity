const acc = document.getElementsByClassName("accordion-button");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", (e) => {
    e.target.classList.toggle("active");

    const panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
