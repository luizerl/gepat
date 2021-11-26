gsap.registerPlugin(ScrollTrigger);

// Declarations
const horizontalMenu = [...document.querySelectorAll('.horizontal-menu li a')];
const menuOpen = document.querySelector('input[type="checkbox"]');
const inputSlide = document.querySelectorAll('input[type="radio"]');
let counterSlide = 0;


// Post's slide
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


// Animations
window.addEventListener('load', () =>{

    const headerTimeline = gsap.timeline({ 
        duration: .8,
        stagger: .4, 
    });

    headerTimeline.from('header', {y: -200})
    .from('#hero', {
        opacity: 0
    })
    .from('#hero .quote', {
        stagger: .3,
        opacity: 0, 
        bottom: 0
    });
    
    const presentationTimeline = gsap.timeline({ 
        scrollTrigger:{
            trigger: '#presentation',
            toggleActions: 'play restart  reset',
            pin: true,
            scrub: 1,
            pinSpacing: 0
        },
    });

    presentationTimeline.from('.presentation-image', {
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
    });

    const partnerTimeline = gsap.timeline({ 
        duration: .5, 
        stagger: .25,
        scrollTrigger:{
            trigger: '#partnerships',
            toggleActions: 'play restart  reset',
        },
    });

    partnerTimeline.from('.partners-info h1',{
        y: 80,
        opacity: .2
    })
    .from('.partners-info p',{
        x: 200
    })
    .from('.partner',{
        stagger: .3,
        y: 300,
        opacity: 0
    });

    
})

// Functions
function checkedMenu (){
    document.querySelector('body').style.overflow = 'visible';
    
    if (menuOpen.checked){
        document.querySelector('body').style.overflow = 'hidden';
        tl = gsap.timeline({duration: .5})
        .from('.vertical-menu li', {y:-20, opacity: 0, stagger: .25})
        .from('.horizontal-menu li', {x:-40, opacity: 0, stagger:.25});
    }
    
}
