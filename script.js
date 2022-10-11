var loading = gsap.timeline();
loading
.to(".loader", {
    top: "-100%",
    backgroundColor: "#000000",
    duration: 2,
    delay: 7,
    opacity: 0,
})

var t2=gsap.timeline()
t2.to("#number3",{
    y:-20,
    opacity: 1,
    duration: 1,
    ease:"Expo.easeInOut"
})
.to("#number3",{
    y:-20,
    opacity: 0,
    duration: 1,
    ease:"Expo.easeInOut"
})
.to("#number2",{
    y:-20,
    opacity: 1,
    duration: 1,
    ease:"Expo.easeInOut"
})
.to("#number2",{
    y:-20,
    opacity: 0,
    duration: 1,
    ease:"Expo.easeInOut"
})
.to("#number1",{
    y:-20,
    opacity: 1,
    duration: 1,
    ease:"Expo.easeInOut"
})
.to("#number1",{
    y:-20,
    opacity: 0,
    duration: 1,
    ease:"Expo.easeInOut"
})
.to("#number",{
    y:-20,
    opacity: 1,
    duration: 1,
    ease:"Expo.easeInOut"
})
.to("#number",{
    y:-20,
    opacity: 0,
    duration: 1,
    ease:"Expo.easeInOut"
})

var nav=gsap.timeline();
nav
.to(".nav h1,#h2,i",{
    delay: 8,
    y: 20,
    opacity: 1,
    duration: 2,
    ease:"Expo.easeInOut"
})
.to("#stylebox",{
    y:-30,
    opacity:1,
    duration:2,
    ease:"Power1.easeInOut"
})

gsap.to("#txt1", {
    scrollTrigger: {
        trigger: "#part2",
        start: "5% 75%",
        end: "5% 20%",
        scrub: 2,
    },
    x:30,
    opacity:1,
    duration: 3,
    ease:"Expo.easeInOut"
})
gsap.to("#txt2", {
    scrollTrigger: {
        trigger: "#part2",
        start: "5% 40%",
        end: "5% 5%",
        scrub: 2,
    },
    x: -30,
    opacity:1,
    duration: 3,
    ease:"Expo.easeInOut"
})
gsap.to("#stylebox1 .img", {
scrollTrigger: {
        trigger: "#part2",
        start: "40% 30%",
        end: "70% 20%",
        scrub: 2,
    },
    x: 30,
    opacity:1,
    duration: 5,
    ease:"Expo.easeInOut"
})

let t3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#part3",
        start: "center center",
        pin: true,
        scrub: 3
    }
})
t3.to("#part3 .btm .anim", {
    y: 90,
    stagger: .2,
    opacity: 1
},)

gsap.to("#part4 #txtbox .btm .left,.cnt p", {
    scrollTrigger: {
        trigger: "#part4",
        start: "20% 40%",
        end: "40% 30%",
        scrub: 2,
    },
    x: 30,
    opacity:1,
    duration: 4,
    stagger: .5,
    ease:"Expo.easeInOut"
})

let t4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#part4",
        start: "60% 40%",
        pin: true,
        scrub: 3
    }
})
t4.to(".citrus", {
    x: 90,
    stagger: .2,
    opacity: 1
},)

let t5 = gsap.timeline({
    scrollTrigger: {
        trigger: "#part5",
        start: "center center",
        pin: true,
        // markers:true,
        scrub: 3
    }
})
t5.to("#part5 #txt2,.finalbtm", {
    y: -90,
    stagger: .2,
    opacity: 1
},)

