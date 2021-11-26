gsap.registerPlugin(ScrollTrigger);

const horizontalMenu = [...document.querySelectorAll('.horizontal-menu li a')];
const menuOpen = document.querySelector('input[type="checkbox"]');
const inputSlide = document.querySelectorAll('input[type="radio"]');
let counterSlide = 0;

setInterval(()=>{ 
    const arr = [...inputSlide];
    arr[counterSlide].checked = false;

    counterSlide++;        
    counterSlide = counterSlide < arr.length ? counterSlide : 0;
    
    arr[counterSlide].checked = true;

}, 3000);

menuOpen.addEventListener('click', checkedMenu);

horizontalMenu.forEach( i => {
    i.addEventListener('click', () => {
        menuOpen.checked = false;
        document.querySelector('body').style.overflow = 'visible';
    });
});
window.addEventListener('load', () =>{
    tl = gsap.timeline({ 
        duration: .3, 
    });

    tl.from('header', {y: -200})
    .from('#hero', {backgroundSize: 0} )
    .from('.quote', {opacity: 0, bottom: 0})
    
    tl2 = gsap.timeline({ 
        duration: .4, 
        stagger: .25,
        scrollTrigger:{
            trigger: '.presentation-image',
            toggleActions: 'play restart  reset',
        },
        scrollTrigger:{
            trigger: '#presentation .info h1',
            toggleActions: 'play restart  reset',
        },
        scrollTrigger:{
            trigger: '#presentation .info p',
            toggleActions: 'play restart  reset',
        },
    });

    tl2.from('.presentation-image', {
        y: -100, 
        opacity: 0,
    })
    .from('#presentation .info h1', {
        opacity: 0,
        y: 50
    })
    .from('#presentation .info p', {
        opacity: 0,
        x: 50
    })
})


function checkedMenu (){
    document.querySelector('body').style.overflow = 'visible';
    
    if (menuOpen.checked){
        document.querySelector('body').style.overflow = 'hidden';
        tl = gsap.timeline({duration: .5})
        .from('.vertical-menu li', {y:-20, opacity: 0, stagger: .25})
        .from('.horizontal-menu li', {x:-40, opacity: 0, stagger:.25});
    }
    
}
