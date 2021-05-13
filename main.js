//Variable declaration for selecting html elements for initial card

const card = document.querySelector('.card');

const product = document.querySelector('.product img');
const title = document.querySelector('.title');
const categories = document.querySelector('.categories');
const purchase = document.querySelector('.purchase');
const description = document.querySelector('.info h3');

card.addEventListener('mousemove', (e)=>{

    let xAxis = (window.innerWidth/2 - e.pageX)/35;
    let yAxis = (window.innerHeight/2 - e.pageY)/-30;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animation In
card.addEventListener('mousemove', (e)=>{

    card.style.transition = "none";

    product.style.transform = "translateZ(175px) rotateZ(45deg)";
    title.style.transform = "translateZ(150px)";
    purchase.style.transform = "translateZ(100px)";
    categories.style.transform = "translateZ(115px)";
    description.style.transform = "translateZ(125px)";

});

//Animation Out
card.addEventListener('mouseleave', (e)=>{

    card.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`;
    card.style.transition = "all 0.5s ease";
    product.style.transform = "translateZ(0px) rotateZ(0deg)";
    title.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
    categories.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";

});

 


//Variable declaration for selecting html elements for card 2
const card1 = document.querySelector('.card1');

const product1 = document.querySelector('.product1 img');
const title1 = document.querySelector('.title1');
const purchase1 = document.querySelector('.purchase1');
const description1 = document.querySelector('.info1 h3');

card1.addEventListener('mousemove', (e)=>{

    //Getting X, Y value of mouse move over the card div 
    let xAxis = (window.innerWidth/2 - e.pageX)/35;
    let yAxis = (window.innerHeight/2 - e.pageY)/-30;

    //Rotating the card on X, Y axis
    card1.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animation In
card1.addEventListener('mousemove', (e)=>{

    card1.style.transition = "none";

    product1.style.transform = "translateZ(175px) rotateZ(-25deg)";
    title1.style.transform = "translateZ(150px)";
    purchase1.style.transform = "translateZ(100px)";
    description1.style.transform = "translateZ(125px)";

});

//Animation Out
card1.addEventListener('mouseleave', (e)=>{

    card1.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`;
    card1.style.transition = "all 0.5s ease";
    product1.style.transform = "translateZ(0px) rotateZ(0deg)";
    title1.style.transform = "translateZ(0px)";
    purchase1.style.transform = "translateZ(0px)";
    description1.style.transform = "translateZ(0px)";

});

 

//Variable declaration for selecting html elements for card 3
const card2 = document.querySelector('.card2');

const product2 = document.querySelector('.product2 img');
const title2 = document.querySelector('.title2');
const purchase2 = document.querySelector('.purchase2');
const description2 = document.querySelector('.info2 h3');

card2.addEventListener('mousemove', (e)=>{

    let xAxis = (window.innerWidth/2 - e.pageX)/35;
    let yAxis = (window.innerHeight/2 - e.pageY)/-30;

    card2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animation In
card2.addEventListener('mousemove', (e)=>{

    card2.style.transition = "none";

    product2.style.transform = "translateZ(175px) rotateZ(-25deg)";
    title2.style.transform = "translateZ(150px)";
    purchase2.style.transform = "translateZ(100px)";
    description2.style.transform = "translateZ(125px)";

});

//Animation Out
card2.addEventListener('mouseleave', (e)=>{

    card2.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`;
    card2.style.transition = "all 0.5s ease";
    product2.style.transform = "translateZ(0px) rotateZ(0deg)";
    title2.style.transform = "translateZ(0px)";
    purchase2.style.transform = "translateZ(0px)";
    description2.style.transform = "translateZ(0px)";

});


function loadProduct(){
    location.replace("./productOne.html");
}
