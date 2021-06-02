const wrapper = document.querySelector('.staps__wrapper');
const scrollx = [...wrapper.children].reduce((total, item) =>  total += item.offsetWidth, 0);

console.log(scrollx - innerWidth);



gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
    scrollTrigger: {
        trigger: '.staps__wrapper',
        start: 'top top',
        end : '600% top',
        scrub: 0.5,
        pin: true,
        markers: true,


    }
})
.to('.staps__wrapper', {x: - wrapper.children[0].offsetWidth * 3})



gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.create({
    trigger: '.staps__wrapper',
    start: 'top top',
    end : '600% top',

    toggleClass: {targets: '.circle', className: 'circle--active'}
})

// получили сам круг
const circle = document.querySelector('.progress-ring__circle');
const value = document.querySelector('.value');
// получили радиус круга
const radius = circle.r.baseVal.value;
// получаем длинку круга
const circleLength = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circleLength} ${circleLength}`;
circle.style.strokeDashoffset = circleLength;

function progress(persent) {
    
    const offSet = circleLength - persent / 100 * circleLength;
    circle.style.strokeDashoffset = offSet;
}


window.addEventListener('scroll', () => {

    let persent = Math.floor(gsap.getProperty(".staps__wrapper", "x") / (wrapper.children[0].offsetWidth * 3) * 100)
   
    value.textContent = `${-persent}`;
    progress(-persent);

})

