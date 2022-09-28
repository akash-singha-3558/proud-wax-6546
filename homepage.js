let arrOfCat =[{name:"Home",link:"homepage.html"},{name:"Latest",link:"#"},{name:"India",link:"india.html"},{name:"World",link:"home.html"},{name:"Delhi"},{name:"Entertainment"},{name:"Cricket"},

{name:"Lifestyle",link:"latest.html"},{name:"Astrology",link:"india.html"},{name:"Editorials",link:"homepage.html"},{name:"For You",link:"india.html"},{name:"Shop Now",link:"homepage.html"},
];



arrOfCat.forEach(function(ele){

let a =document.createElement("a");
a.innerText=ele.name;

a.href=ele.link;
let li = document.createElement("li");
 if(ele.name=="Home")  li.className="active";
 
li.append(a);
li.addEventListener("click",function(){
    addActive(li);
 })
document.querySelector("#category").append(li);


})
function addActive(li){
document.querySelector("#category>li>a").classList.remove("active");
li.className="active;"

}
//Latest News
let arrOfLatestNews=[
   { news:"Case Toh Banta Hai teaser: Sonakshi Sinha slapped someone in court Watch",date:"Published on"},
   { news:"Gold falls by ₹435, Silver tumbles ₹1,600: Report",date:"Published on"},
   { news:"This Xiaomi power bank looks like lipstick. Check price and other details",date:"Published on"},
   { news:"Man held for extortion calls to his uncle through a virtual number",date:"Published on"},
   { news:"CSC Olympiad 3.0: Classes 3-12 students can apply till October 15",date:"Published on"}

]
arrOfLatestNews.forEach(function(ele,i){
    const date = new Date();date.toLocaleString() ;  

let p1=document.createElement("p"),p2= document.createElement("p"),div=document.createElement("div");
p1.innerText=ele.news;
p1.style.textAlign="left";
p1.style.fontWeight="bold";
p1.style.cursor="pointer";
p2.innerText=ele.date+" "+date;
p2.style.color="grey";
p2.style.textAlign="left";
p2.style.fontSize="14px";
div.append(p1,p2);
div.style.padding="2px 4px 4px 8px";

div.style.boxShadow= 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px';
if(i===0)div.style.marginTop="-15px";

if(i==arrOfLatestNews.length-1){
    let p3=document.createElement("p");
    p3.innerText="View All >"
    p3.style.textAlign="center";
    p3.style.color="#00b1cd";
    p3.style.fontWeight="bold";
    p3.style.cursor="pointer";
    div.append(p3);
    document.querySelector("#news>div:nth-child(1)>div").append(div);
}
else{
    document.querySelector("#news>div:nth-child(1)>div").append(div);
}

});

let arrOfLatestNews2=[
    { news:"Neetu Kapoor celebrates Ranbir Kapoor's 'milestone year' on birthday: 'Your father is orchestrating it from up there'",date:"Published on"},
    { news:"'It was a big deal. He was recently the No. 1 batter in the world': India youngster on dismissing Babar Azam at Asia Cup",date:"Published on"},
    { news:"Vijay Varma recalls he struggled to make ends meet: ‘I was basically just broke because there was no work’",date:"Published on"},
    { news:"On Ranbir Kapoor's birthday, here are some of his most romantic pics with Alia Bhatt. See here",date:"Published on"}

 ]

 arrOfLatestNews2.forEach(function(ele,i){
    const date = new Date();date.toLocaleString() ;  

let p1=document.createElement("p"),p2= document.createElement("p"),div=document.createElement("div");
p1.innerText=ele.news;
p1.style.textAlign="left";
p1.style.fontWeight="bold";
p1.style.cursor="pointer";
p2.innerText=ele.date+" "+date;
p2.style.color="grey";
p2.style.textAlign="left";
p2.style.fontSize="14px";
div.append(p1,p2);
div.style.padding="2px 4px 4px 8px";
div.style.boxShadow= 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px';

if(i===0)div.style.marginTop="-15px";

if(i==arrOfLatestNews2.length-1){
    let p3=document.createElement("p");
    p3.innerText="View All >"
    p3.style.textAlign="center";
    p3.style.color="#00b1cd";
    p3.style.fontWeight="bold";
    p3.style.cursor="pointer";
    div.append(p3);
    document.querySelector("#news>div:nth-child(4)>div:nth-child(2)").append(div);
}
else{
    document.querySelector("#news>div:nth-child(4)>div:nth-child(2)").append(div);
}

});
//top news date---------------------------------------
function headDate(){
    let p = document.querySelector("#headline>p+p").innerText;
    const date = new Date();date.toLocaleString() ;  
    document.querySelector("#headline>p+p").innerText=p+" "+date;

}

headDate();

// TOP NEWS UNDER------------------------------

let arrOFunders=[
    { maintext:"Fixing visa blues in India, says US after Jaishankar flags concerns; unveils plan",subtext:"India News",pod:"Updated on",
    image:"https://images.hindustantimes.com/img/2022/09/28/150x84/838f97fe-3f2d-11ed-986f-37f88e2260c8_1664370435662.jpg"},
{ maintext:"Govt raises DA to 38% ahead of Diwali and assembly elections in HP, Gujarat",subtext:"India News",pod:"Updated on",
image:"https://images.hindustantimes.com/img/2022/09/28/150x84/0ee42d1a-3f1a-11ed-986f-37f88e2260c8_1664362257069.jpg"},
{ maintext:"AAP MLA Amanatullah Khan gets bail in Delhi Waqf Board graft case",subtext:"India News",pod:"Updated on",
image:"https://images.hindustantimes.com/img/2022/09/28/148x111/e63bccc8-3da3-11ed-bb6c-82755275d414_1664215322261_1664360181712_1664360181712.jpg"},
{ maintext:"Veteran Cong leader to meet Sonia Gandhi at 5 pm, help with Rajasthan crisis",subtext:"Delhi News",pod:"Updated on",
image:"https://images.hindustantimes.com/img/2022/09/28/148x111/Capture_1664367696974_1664367703947_1664367703947.JPG"},
{ maintext:"India vs South Africa Live Score 1st T20I: SA rebuild dented as Markram falls",subtext:"Cricket",pod:"Updated on",
image:"https://images.hindustantimes.com/img/2022/09/28/148x111/India-South-Africa-Cricket-20_1664373374379_1664373374379_1664373385304_1664373385304.jpg"},



]

arrOFunders.forEach(function(el){
    const date = new Date();date.toLocaleString() ;
let div=document.createElement("div");
div.style.display="flex";
div.style.margin="0px 0px 5px 0px";
div.style.boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px";
div.style.padding="5px 5px 5px 5px";
let div1= document.createElement("div");
div.style.marginTop="5px";
let div2= document.createElement("div");
let p1= document.createElement("p");
p1.innerText=el.maintext;
p1.style.fontWeight="bold";
let p2= document.createElement("p");
p2.innerText=el.subtext;
p2.style.color="#00b1cd"
p2.style.fontWeight="bold";
p2.style.fontSize="14px";
p2.style.marginTop="-10px";
let p3=document.createElement("p");
p3.innerText=el.pod+" "+date;
p3.style.color="grey"
p3.style.fontWeight="lighter";
p3.style.fontSize="13px";
p3.style.marginTop="-10px";
div1.append(p1,p2,p3);


let img = document.createElement("img");
img.src=el.image;
img.style.width="100%";
img.style.marginTop="15px"
img.style.height="70%";
div2.append(img);
div.append(div1,div2);
document.querySelector("#top-news-under").append(div);
})

arrOFunders.forEach(function(el){
    const date = new Date();date.toLocaleString() ;
let div=document.createElement("div");
div.style.display="flex";
div.style.margin="0px 0px 5px 0px";
div.style.boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px";
div.style.padding="5px 5px 5px 5px";
let div1= document.createElement("div");
div.style.marginTop="5px";
let div2= document.createElement("div");
let p1= document.createElement("p");
p1.innerText=el.maintext;
p1.style.fontWeight="bold";
let p2= document.createElement("p");
p2.innerText=el.subtext;
p2.style.color="#00b1cd"
p2.style.fontWeight="bold";
p2.style.fontSize="14px";
p2.style.marginTop="-10px";
let p3=document.createElement("p");
p3.innerText=el.pod+" "+date;
p3.style.color="grey"
p3.style.fontWeight="lighter";
p3.style.fontSize="13px";
p3.style.marginTop="-10px";
div1.append(p1,p2,p3);


let img = document.createElement("img");
img.src=el.image;
img.style.width="100%";
img.style.marginTop="15px"
img.style.height="70%";
div2.append(img);
div.append(div1,div2);
document.querySelector("#top-news-under-2").append(div);
})

