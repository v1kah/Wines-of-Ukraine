document.addEventListener("DOMContentLoaded", () => {
    const headerNavList = document.querySelector("header nav ul");
    const burgerButton = document.querySelector(".burger__menu-adaptation");

    burgerButton.addEventListener("click", () => {
    const menuDiv = document.querySelector(".burger-menu");

    if (!menuDiv) {
        document.body.style.overflow = "hidden";
        const div = document.createElement("div");
        div.classList.add("burger-menu");
        document.body.insertAdjacentElement("afterbegin", div);

        const navClone = headerNavList.cloneNode(true);
        div.appendChild(navClone);
        setTimeout(() => div.classList.add("active"), 10);

        
        navClone.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
            div.classList.remove("active");
            setTimeout(() => div.remove(), 300);
            document.body.style.overflow = "auto";
            });
        });
        

        
    } else {
        menuDiv.classList.remove("active");
        document.body.style.overflow = "auto";
        setTimeout(() => menuDiv.remove(), 300);
        }
    });
});


