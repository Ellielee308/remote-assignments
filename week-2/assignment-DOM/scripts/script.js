//Request 1
const headline = document.querySelector("#welcome");
headline.addEventListener("click", () => {
    headline.textContent = "Have a Good Time!";
}
);
//Request 2
const menu_Trigger = document.querySelector("#trigger");
const floating_Menu = document.querySelector("#floating_menu");
const floating_CloseBtn = document.querySelector("#floating_close");
floating_Menu.style.display= "none";
menu_Trigger.addEventListener("click", () => {
    floating_Menu.removeAttribute("style");
});

floating_CloseBtn.addEventListener("click", ()=> {
    floating_Menu.style.display = "none";
})

//Request 3
const btn_Action = document.querySelector("#call");
const moreBoxes = document.querySelector(".more");
moreBoxes.style.display = "none";

btn_Action.addEventListener("click", () => {
    moreBoxes.removeAttribute("style");
}
);