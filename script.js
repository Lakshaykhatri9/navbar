let project = document.querySelector(".project");
let resi = document.querySelector(".resi");
let ongoing = document.querySelector(".ongoing");
let table = document.querySelector(".table-add")

project.addEventListener("click", () => {
    resi.classList.toggle("resi-hide");
});


resi.addEventListener("click",() => {
    ongoing.classList.toggle("ongoing-hide");
});


ongoing.addEventListener("click", () => {
    table.classList.toggle("table-hide")
});