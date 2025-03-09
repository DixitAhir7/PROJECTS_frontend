function loadpage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementsByClassName("main-section").innerHTML = data;
        })
        .catch(error => console.log("error loading page", error))
}

function loadpage2(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementsByClassName("skill").innerHTML = data;
        })
        .catch(error => console.log("error loading page", error))
}