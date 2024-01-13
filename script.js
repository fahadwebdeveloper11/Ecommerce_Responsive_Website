gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    smartphone: { smooth: true }
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    }

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector(".smooth-scroll").style.transform
      ? "transform"
      : "fixed"*/
});


const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
};
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


gsap.from("#header", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: Power2
})
gsap.from("#header .logo", {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: Power2,
    delay: 0.3,
})

gsap.from("#navbar li", {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: .2
})
gsap.from("#hero .animeTxt", {
    opacity: 0,
    scale: 2,
    duration: 0.9,
    stagger: 0.4,
    delay: 0.7
    // ease : Power4
})
gsap.from("#hero .trade-anim", {
    opacity: 0,
    x: -50,
    duration: 0.9,
    ease: Power1
})

gsap.from("#hero .animeTxt2", {
    opacity: 0,
    y: 30,
    duration: 0.9,
    ease: Power1,
    stagger: .4,
    delay: 1
})
gsap.from("#hero", {
    opacity: 0,
    ease: Power1,
    delay: 0.5,
    y: 20
})

gsap.from("#feature .fe-box", {
    opacity: 0,
    ease: "power2.out",
    scale: 0,
    stagger: .3,
    duration: 1,
    scrollTrigger: {
        scroller: '#main',
        trigger: "#feature .fe-box",
        // markers : true,
        start: "top 80%",
        end: "top 30%"
    }
})
gsap.from(".fet-anime", {
    opacity: 0,
    ease: "power2.out",
    y: 30,
    stagger: .3,
    duration: 1,
    scrollTrigger: {
        scroller: '#main',
        trigger: ".fet-anime",
        // markers : true,
        start: "top 80%",
        end: "top 30%"
    }
});
gsap.to(".pro-anime", {
    opacity: 1,
    // ease: "power2.out",
    scale: 1,
    duration: .4,
    stagger: .3,
    scrollTrigger: {
        scroller: '#main',
        trigger: ".pro-anime",
        // markers : true,
        start: "top 90%",
        end: "top 30%",

    }
})
gsap.to(".pro-anime2", {
    opacity: 1,
    ease: "power2.out",
    scale: 1,
    duration: .4,
    stagger: .3,
    scrollTrigger: {
        scroller: '#main',
        trigger: ".pro-anime2",
        // markers : true,
        start: "top 80%",
        end: "top 30%",

    }
})
gsap.from("#banner", {
    opacity: 0,
    ease: Power2,
    y: 50,
    duration: .5,
    scrollTrigger: {
        scroller: '#main',
        trigger: "#banner",
        // markers : true,
        start: "top 70%",
        end: "top 30%",
        // scrub : 1
    }
})
gsap.from(".btn-anime", {
    opacity: 0,
    ease: Power1,
    scale: 4,
    duration: .8,
    delay: 0.3,
    scrollTrigger: {
        scroller: '#main',
        trigger: ".btn-anime",
        // markers : true,
        start: "top 90%",
        end: "top 60%",
        // scrub : 1
    }
})
gsap.from(".arrival-anime", {
    opacity: 0,
    ease: Power1,
    y: 30,
    duration: .8,
    stagger: .2,
    // delay:0.3,
    scrollTrigger: {
        scroller: '#main',
        trigger: ".arrival-anime",
        // markers : true,
        start: "top 80%",
        end: "top 30%",
        // scrub : 1
    }
})
gsap.from(".banner-box1", {
    opacity: 0,
    ease: Power1,
    x: -80,
    duration: .8,
    // delay:0.3,
    scrollTrigger: {
        scroller: '#main',
        trigger: ".banner-box1",
        // markers : true,
        start: "top 80%",
        end: "top 30%",
        // scrub : 1
    }
})
gsap.from(".banner-box2", {
    opacity: 0,
    ease: Power1,
    x: 80,
    duration: .8,
    // delay:0.3,
    scrollTrigger: {
        scroller: '#main',
        trigger: ".banner-box2",
        // markers : true,
        start: "top 70%",
        end: "top 30%",
        // scrub : 1
    }
})
gsap.from("#banner3", {
    opacity: 0,
    ease: Power1,
    scale: 2,
    duration: 1,
    // stagger : .4,
    // delay:0.3,
    scrollTrigger: {
        scroller: '#main',
        trigger: "#banner3",
        // markers : true,
        start: "top 80%",
        end: "top 30%",
        // scrub : 1
    }
})
gsap.from("#newsletter", {
    opacity: 0,
    ease: Power1,
    scale: 0.5,
    duration: 0.5,
    // stagger : .4,
    // delay:0.3,
    scrollTrigger: {
        scroller: '#main',
        trigger: "#newsletter",
        // markers : true,
        start: "top 80%",
        end: "top 30%",
        // scrub : 1
    }
})
gsap.from(".footer", {
    opacity: 0,
    ease: Power1,
    y: 30,
    duration: 0.5,
    // delay:0.3,
    scrollTrigger: {
        scroller: '#main',
        trigger: ".footer",
        // markers : true,
        start: "top 70%",
        end: "top 40%",
        // scrub : 4
    }
})
gsap.from(".col", {
    opacity: 0,
    ease: Power1,
    y: 30,
    duration: 0.5,
    stagger: .3,
    delay: 0.3,
    // delay:0.3,
    scrollTrigger: {
        scroller: '#main',
        trigger: ".col",
        // markers : true,
        start: "top 80%",
        end: "top 40%",
        // scrub : 1
    }
})
gsap.from(".copyright", {
    opacity: 0,
    ease: Power1,
    scale: 2,
    duration: 0.8,
    delay: 0.4,
    // delay:0.3,
    scrollTrigger: {
        scroller: '#main',
        trigger: ".copyright",
        // markers : true,
        start: "top 100%",
        end: "top 90%",
        // scrub : 1
    }
})

// const shop = document.querySelector('.shop')
// const shopDropDown = document.querySelector('.shop-dropdown')

// shop.addEventListener('mousemove', function () {
//     shopDropDown.style.transform = "translateY(10%)"
//     shopDropDown.style.transform = "scaleY(1)"
// })
// shop.addEventListener('mouseleave', function () {
//     shopDropDown.style.transform = "scaleY(0)"
// })

const cart = document.querySelector(".cart-btn")
const closeBtn = document.querySelector(".close-btn")
const cartMenu = document.querySelector("#cart")
const deleteBtn = document.querySelectorAll(".delete-icon")


cart.addEventListener('click', function (e) {
    e.stopPropagation()
    // e.preventDefault()
    cartMenu.style.right = 0
})

closeBtn.addEventListener('click', function () {
    cartMenu.style.right = "-100%"
})

let cartItems = [];
let cartTotal = 0;

function addToCart(imageUrl, productName, productPrice) {
    cartItems.push({ image: imageUrl, name: productName, price: productPrice });
    cartTotal += productPrice;

    updateCartWidget();
}

function removeFromCart(index) {
    const removedItem = cartItems.splice(index, 1)[0];
    cartTotal -= removedItem.price;
    updateCartWidget();
}

function createCartItemElement(item, index) {
    const li = document.createElement('li');
    const image = document.createElement('img');
    image.src = item.image;
    image.width = 50;
    image.height = 50;
    li.appendChild(image);

    const text = document.createElement('span');
    text.textContent = `${item.name}: $${item.price.toFixed(2)}`;
    li.appendChild(text);
    return li;
}

function updateCartWidget() {
    const cartInner = document.querySelectorAll('.cart-inner')
    const total = document.querySelector('.total')

    cartInner.innerHTML = '';
    cartInner.forEach((item, index) => {
        const li = createCartItemElement(item, index);
        cartItemsList.appendChild(li);

    });
    total.textContent = cartTotal.toFixed(2);
}

updateCartWidget();

const addToCartt = document.querySelector('.add-to-cart')
addToCartt.addEventListener('click', addToCart('Product 1', 10.99, 'https://plus.unsplash.com/premium_photo-1673716788638-2830d1c98405?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'))

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
