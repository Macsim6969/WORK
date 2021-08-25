const anchors = document.querySelectorAll(`a[href*="#"]`)

for(let anchor of anchors){
    anchor.addEventListener("click",function(event) {
        event.preventDefault();
        const blockID= anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior:"smooth",
            block: "start"
        })
    })
}

const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const content = document.querySelector('.header_dop_cont');
    const contentLinks = document.querySelectorAll('.header_dop_cont .link')

    burger.addEventListener('click', ()=>{
        content.classList.toggle('burger_active');
        contentLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = ''
            } else{
                link.style.animation = `contentLinks 0.5s ease forwards ${index / 7 + 0.5 }s`
            }
        });
        burger.classList.toggle('toggle');
    });


}

navSlide();