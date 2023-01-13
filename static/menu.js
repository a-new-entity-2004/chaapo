console.log("this");
const searchMe = () => {
    const elem = document.getElementById("search-please").value.toUpperCase();
    const pro = Array.from(document.querySelectorAll(".p-details"));
    for (let i = 0; i < pro.length;i++) {
        let text = pro[i].getElementsByTagName("p")[1].innerHTML;
        if (text.toUpperCase().indexOf(elem) > -1) {
            pro[i].style.display = "";
        } else {
            pro[i].style.display = "none";
        }
    }
}