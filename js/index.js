const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
const navCntnt = document.querySelectorAll("a");
navCntnt[0].textContent = siteContent.nav["nav-item-1"];
navCntnt[1].textContent = siteContent.nav["nav-item-2"];
navCntnt[2].textContent = siteContent.nav["nav-item-3"];
navCntnt[3].textContent = siteContent.nav["nav-item-4"];
navCntnt[4].textContent = siteContent.nav["nav-item-5"];
navCntnt[5].textContent = siteContent.nav["nav-item-6"];
navCntnt.forEach((nav) => nav.style.color = "green")
const ctaHead = document.querySelector('.cta-text > h1');
ctaHead.innerHTML = siteContent['cta']['h1'].replace(/ /g, '<br>');

const newNav1 = document.createElement('a');
newNav1.textContent = "Click - ME!";
const newNav2 = document.createElement('a');
newNav2.textContent = 'Dont - Click - Me!';
const navigation = document.querySelector('nav');
navigation.prepend(newNav1);
navigation.append(newNav2);
newNav2.style.color = 'red';
newNav1.style.color = 'blue';

const ctaBtn = document.querySelector("button");
ctaBtn.textContent = siteContent.cta["button"];

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.cta["img-src"];

const doch4 = document.querySelectorAll('.main-content h4');
doch4[0].innerText = siteContent["main-content"]["features-h4"];
doch4[1].innerText = siteContent["main-content"]["about-h4"];
doch4[2].innerText = siteContent["main-content"]["services-h4"];
doch4[3].innerText = siteContent["main-content"]["product-h4"];
doch4[4].innerText = siteContent["main-content"]["vision-h4"];

const docTxt = document.querySelectorAll('.main-content p');
docTxt[0].innerText = siteContent["main-content"]["features-content"];
docTxt[1].innerText = siteContent["main-content"]["about-content"];
docTxt[2].innerText = siteContent["main-content"]["services-content"];
docTxt[3].innerText = siteContent["main-content"]["product-content"];
docTxt[4].innerText = siteContent["main-content"]["vision-content"];

const mddlImg = document.querySelector('.main-content img');
mddlImg.src = siteContent["main-content"]["middle-img-src"];

const cntcth4 = document.querySelector('.contact h4');
cntcth4.innerText = siteContent.contact["contact-h4"];

const cntct = Object.values(siteContent.contact);
const cntctTxt = document.querySelectorAll('.contact p');
cntctTxt.forEach((item, index) => item.innerText = cntct[index + 1]);

const ftr = document.querySelector('footer');
ftr.innerText = siteContent.footer.copyright;