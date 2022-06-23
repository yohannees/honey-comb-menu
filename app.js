let show = true;
const container = document.querySelector(".container");
const menu = document.getElementById("menu");
const add = document.getElementById("add");

container.addEventListener("click", () => {
  if (show) {
    add.style.transform = "rotate(45deg)";
    menu.style.transform = "scale(1)";

    document.getElementsByClassName("item")[0].classList.add("one");
    document.getElementsByClassName("item")[1].classList.add("two");
    document.getElementsByClassName("item")[2].classList.add("three");
    document.getElementsByClassName("item")[3].classList.add("four");
    document.getElementsByClassName("item")[4].classList.add("five");
    document.getElementsByClassName("item")[5].classList.add("six");

    show = false;
  } else {
    add.style.transform = "rotate(0deg)";
    menu.style.transform = "scale(.9)";

    document.getElementsByClassName("item")[0].classList.remove("one");
    document.getElementsByClassName("item")[1].classList.remove("two");
    document.getElementsByClassName("item")[2].classList.remove("three");
    document.getElementsByClassName("item")[3].classList.remove("four");
    document.getElementsByClassName("item")[4].classList.remove("five");
    document.getElementsByClassName("item")[5].classList.remove("six");

    show = true;
  }
});
