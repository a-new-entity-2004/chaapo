const search = () => {
    const input = document.getElementById("myInput").value.toUpperCase();
    const product = Array.from(document.querySelectorAll(".card"));
    for (let i = 0; i < product.length;i++) {
        let text = product[i].getElementsByTagName("h5")[0].innerHTML;
        if (text.toUpperCase().indexOf(input) > -1) {
            product[i].style.display = "";
        } else {
            product[i].style.display = "none";
        }
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }