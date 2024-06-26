/* eslint-disable no-undef */
const circle = document.querySelectorAll('.partners__box');

const initGenerateRandomScale = () => {
  gsap.utils.toArray(circle).forEach(animateCircle);
};

function animateCircle(evt) {
  gsap.set(circle, {scale: 1.0});

  if (!circle) {
    return;
  }

  gsap.to(evt, {
    duration: gsap.utils.random(1.7, 3.2),
    scale: gsap.utils.random(1, 1.25),
    delay: gsap.utils.random(0, 0.2),
    ease: 'none',
    yoyo: true,
    repeat: 1,
    onComplete: () => animateCircle(evt),
  });
}

export {initGenerateRandomScale};
