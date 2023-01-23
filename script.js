
// Mouse-circle
const mouseCircle = document.querySelector('.mouse-circle')
const mouseDot = document.querySelector('.mouse-dot')
const mouseCircleFn = (x, y) => {
    mouseCircle.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
    mouseDot.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
};

document.body.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;

    mouseCircleFn(x, y);
});

document.body.addEventListener('mouseleave', (e) => {
    mouseCircle.style.opacity = '0'
    mouseDot.style.opacity = '0'
})
// End of Circle

// Animated Circles
const circles = document.querySelectorAll('.circle');
const mainImg = document.querySelector('.main-circle img');


let mX = 0;
let mY = 0;
const z = 100;
const animateCircles = (e, x, y) => {
    if(x < mX) {
        circles.forEach((circle) => {
            circle.style.left =`${z}px`;
        });
        mainImg.style.left = `${z}px`;
    } else if(x > mX) {
        circles.forEach((circle) => {
            circle.style.left =`-${z}px`;
        });
        mainImg.style.left = `-${z}px`;
    }

    if(y < mY) {
        circles.forEach((circle) => {
            circle.style.top = `${z}px`;
        });
        mainImg.style.top = `${z}px`;
    } else if(y > mY) {
        circles.forEach((circle) => {
            circle.style.top =`-${z}px`;
        });
        mainImg.style.top = `-${z}px`;
    }

    mX = e.clientX
    mY = e.clientY

}