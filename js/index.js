function bb() {
    if (document.getElementById('menu').style.display == 'none') {
        document.getElementById('menu').style.display = 'block'
        document.getElementById('btn').innerHTML = '<i class="bi bi-moon"></i>';
    }
    else {
        document.getElementById('menu').style.display = 'none'
        document.getElementById('btn').innerHTML = '<i class="bi bi-brightness-high"></i>';
    }
    var element = document.body;
    element.classList.toggle("dark-mode")
}


