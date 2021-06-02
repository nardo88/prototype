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
        markers: true

    }
})
.to('.staps__wrapper', {x: - wrapper.children[0].offsetWidth * 3})

