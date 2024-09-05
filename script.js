let project = document.querySelector(".project");
let resi = document.querySelector(".resi");
let ongoing = document.querySelector(".ongoing");
let table = document.querySelector(".table-add");
let ongoing_del = document.querySelector(".ongoing-del");
let table_2 = document.querySelector(".table-add-2");
let del = document.querySelector(".del");

project.addEventListener("click", () => {
    resi.classList.toggle("resi-hide");
});

resi.addEventListener("click",() => {
    ongoing_del.classList.toggle("ongoing-del-hide");
})

ongoing.addEventListener("click",() => {
    table.classList.toggle("table-hide");
    table_2.classList.add("table-hide-2")
});

del.addEventListener("click", () => {
    table.classList.add("table-hide");
    table_2.classList.toggle("table-hide-2")
})