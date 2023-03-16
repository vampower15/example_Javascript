const switchToggle=document.querySelector('input[type="checkbox"]');
const toggleIcon =document.getElementById('toggle-icon');

function switchMode(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        darkMode();
    }else{
        document.documentElement.setAttribute('data-theme','light');
        lightMode();
    }
}
function darkMode(){
    // toggleIcon.children[0].textContent="Night Mode";
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
}
function lightMode(){
    // toggleIcon.children[0].textContent="Day Mode";
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun')
}

switchToggle.addEventListener('change',switchMode)