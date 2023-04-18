const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

//console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */


// let headerTag = document.getElementsByTagName("header")[0];
// let navTag = headerTag.getElementsByTagName('nav')[0];
// let aTag = navTag.getElementsByTagName('a');

let aTag =document.querySelectorAll('header nav a');

for (let i =0; i<aTag.length;i++){
  aTag[i].className='italic';
  aTag[i].textContent=Object.values(siteContent.nav)[i];
}

//Aytac cozum

// const aLink = document.querySelectorAll("nav a");
// aLink.forEach((item, index)=> {
//   item.className ="italic";
//   item.textContent = siteContent.nav["nav-item-" + (index+1)];
// });

const imgs = document.querySelectorAll("img");

imgs.forEach((element,index) => {
  // element.setAttribute("src",Object.values(siteContent.images)[index])
  element.src=Object.values(siteContent.images)[index];
  // element.src = siteContent.images[element.id];
});

const ctaLink = document.querySelector(".cta-text").children;


// ctaLink.forEach((item,index)=>{
//   item.textContent=Object.values(siteContent.cta)[index];
// })

for (let i =0; i<ctaLink.length;i++){
  ctaLink[i].textContent=Object.values(siteContent.cta)[i];
}

// const ctaImg = document.getElementById('cta-img');
// ctaImg.src = "http://localhost:9000/img/cta.png";


const mainTextContent = document.querySelectorAll('.text-content');

let index = 0;
for (let i =0; i<mainTextContent.length;i++){
  mainTextContent[i].children[0].textContent=Object.values(siteContent["ana-içerik"])[index];
  index+=1
  mainTextContent[i].children[1].textContent=Object.values(siteContent["ana-içerik"])[index];
  index+=1
}
///// Deneme 1 basarisiz

// const mainTextContent = document.querySelector('.contact');

// mainTextContent.forEach((item,i,arr)=>{
// arr[i].textContent = Object.values(siteContent.ana-içerik)[i];
// })
////// Deneme 2
// let sectionContact = document.querySelectorAll('.contact')[0].children;

// for(let i =0;sectionContact.length;i++){
//   sectionContact[i].textContent=Object.values(siteContent.iletisim)[i]
// }
/////// Deneme 3

const contactSection =document.querySelector('.contact');
const contactData = Object.values(siteContent.iletisim);

[...contactSection.children].map((elem,ind)=>{
  contactSection.children[ind].textContent = contactData[ind];
});

const footerContent=document.querySelector('footer a');

footerContent.textContent =siteContent.footer.copyright;
footerContent.classList.add("bold");