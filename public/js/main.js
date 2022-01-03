let about =  document.getElementById('about');
let projects = document.getElementById('projectsScroll')
let leftText = document.getElementById('leftText')
let body = document.body;

window.addEventListener('scroll',function(e) {
    console.log("ouais")
    if(window.scrollY >= about.scrollHeight && window.scrollY < projects.scrollHeight){
        leftText.innerHTML = 'ABOUT'
    } else if(window.scrollY >= projects.scrollHeight){
        leftText.innerHTML = "PROJECTS"
    } else {
        leftText.innerHTML = "HOME"
    }
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});