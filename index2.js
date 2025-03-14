var typed = new Typed(".auto-type",{
    strings: ["Software developer.", "Web developer.","Front-end developer.", "Back-end developer.","Full-stack developer."],
    typeSpeed: 30,
    backSpeed: 30,
    loop:true
})

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display="flex"

    // const menubar = document.querySelector('.menubar')
    // menubar.style.display="none"
}

function closeSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display="none"

    // const menubar = document.querySelector('.menubar')
    // menubar.style.display="block"
}