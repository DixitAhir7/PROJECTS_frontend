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


// this stores the last page and opens up the page where you left

window.addEventListener("beforeunload", () => {
    localStorage.setItem("lastVisitedPage", window.location.pathname);
});


window.onload = () => {
    const lastPage = localStorage.getItem("lastVisitedPage");
    if (lastPage && lastPage !== window.location.pathname) {
        window.location.pathname = lastPage;
    }
};


window.addEventListener("scroll", () => {
    localStorage.setItem("scrollY", window.scrollY);
});

window.onload = () => {
    window.scrollTo(0, localStorage.getItem("scrollY") || 0);
};
