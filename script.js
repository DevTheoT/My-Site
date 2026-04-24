// Criaca de time line com gsap com animacao sincronizadas com o scroll

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "40% 50%",
        scrub: true,
        markers: true
    },
});

tl.to(
    '#roblox',
    {
        top: "120%",
        left: "0%",
        rotate: 360,
    },
    'page'
);

tl.to(
    '#html',
    {
        top: "115%",
        left: "15%",
    },
    'page'
);

tl.to(
    '#lua',
    {
        top: "115%",
        left: "30%",
        rotate: -360,
    },
    'page'
);

tl.to(
    '#python',
    {
        top: "140%",
        left: "33%",
        rotate: -360,
    },
    'page'
);

tl.to(
    '#godot',
    {
        top: "145%",
        left: "3%",
        rotate: -360,
    },
    'page'
);

tl.to(
    '#java',
    {
        top: "165%",
        left: "17%",
        rotate: -360,
    },
    'page'
);

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "10% 95%",
        end: "20% 50%",
        scrub: true,
        markers: true
    },
});

tl2.to(
    '#roblox',
    {
        top: "200%",
        left: "10%",
        rotate: -360,
    },
    'page'
);

tl2.to(
    '#html',
    {
        top: "210%",
        left: "43%",
        rotate: -360,
    },
    'page'
);

tl2.to(
    '#lua',
    {
        top: "210%",
        left: "78%",
        rotate: 360,
    },
    'page'
);

tl2.to(
    '#python',
    {
        top: "310%",
        left: "13%",
        rotate: 360,
    },
    'page'
);

tl2.to(
    '#godot',
    {
        top: "310%",
        left: "45%",
        rotate: 360,
    },
    'page'
);

tl2.to(
    '#java',
    {
        top: "305%",
        left: "78%",
        rotate: 360,
    },
    'page'
);

const btn = document.getElementById("contactBtn");
const menu = document.getElementById("contacMenu");

btn.addEventListener("click", function(e) {
    e.preventDefault();
    menu.classList.toggle("active");
});