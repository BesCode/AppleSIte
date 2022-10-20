const lists = document.querySelectorAll("a");

lists.forEach((list)=> list.addEventListener("click", handleLists));
// console.log(lists);

function handleLists(){
    lists.forEach((list) => list.classList.remove("active"));
}



