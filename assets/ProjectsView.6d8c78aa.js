import{o as a,c as i,a as t,t as n,F as l,f as p,d as c,j as r,n as u,b as s}from"./vendor.c869dcad.js";const m={class:"container col-xxl-8 px-4 pb-5"},b={class:"col-lg-6"},w={class:"display-5 fw-bold lh-1 mb-3"},f={class:"lead"},k={class:"mb-3"},y={class:"badge bg-orange me-1"},_={class:"d-grid gap-2 d-md-flex justify-content-md-start"},v=["href"],x=t("i",{class:"bi-box-arrow-up-right fs-4"},null,-1),P=["href"],A=t("i",{class:"bi-github fs-4"},null,-1),D=c(" GitHub "),S=[A,D],T={class:"col-10 col-sm-8 col-lg-6"},V=["src","alt"],o={props:{title:String,description:String,image:String,imageAlt:String,link:String,linkText:{type:String,default:"View"},github:String,badges:Array,reverse:{type:Boolean,default:!1}},setup(e){return(h,d)=>(a(),i("div",m,[t("div",{class:u(["row align-items-center g-5 py-5",e.reverse?"flex-lg-row":"flex-lg-row-reverse"])},[t("div",b,[t("h1",w,n(e.title),1),t("p",f,n(e.description),1),t("div",k,[(a(!0),i(l,null,p(e.badges,g=>(a(),i("div",y,n(g),1))),256))]),t("div",_,[e.link?(a(),i("a",{key:0,href:e.link,target:"_blank",class:"btn btn-outline-light-purple btn-lg px-4 me-md-2"},[x,c(" "+n(e.linkText),1)],8,v)):r("",!0),e.github?(a(),i("a",{key:1,href:e.github,target:"_blank",class:"btn btn-outline-secondary btn-lg px-4"},S,8,P)):r("",!0)])]),t("div",T,[t("img",{src:e.image,class:"d-block mx-lg-auto img-fluid rounded p-img",alt:e.imageAlt,width:"700",height:"500",loading:"lazy"},null,8,V)])],2)]))}},F=t("h1",{class:"display-3 text-center my-3"},"My Projects",-1),W={setup(e){return(h,d)=>(a(),i(l,null,[F,s(o,{title:"Archiver for Google Photos",description:"An open-source command line tool to maintain an archive/mirror of your Google Photos library for backup purposes.",image:"/screenshots/archiver-for-google-photos.png",github:"https://github.com/NicholasDawson/ArchiverForGooglePhotos",badges:["Python","Google APIs","Multithreading","SQLite"],reverse:""}),s(o,{title:"Chromebook Repair Management Tool",description:"An automation software suite that manages and tracks all steps of the Chromebook Repair Process at Portland CT Public Schools.",image:"/screenshots/chromebook-repair-management-tool.png",link:"/Capstone Presentation.pdf",linkText:"Presentation",badges:["Python","Google Sheets","PyQt5","Web Automation","PDF Filling"]}),s(o,{title:"Data Extractor for AniList",description:"A tool used to download most useful metadata and tags from an AniList.co entry.",image:"/screenshots/data-extractor-for-anilist.png",github:"https://github.com/NicholasDawson/Data-Extractor-for-AniList",badges:["Python","Web Scraping","Selenium"],reverse:""}),s(o,{title:"Dice Roller",description:"A simple dice rolling app with hand drawn graphics. This was my first Vue web app.",image:"/screenshots/dice-roller.png",github:"https://github.com/NicholasDawson/VueExamples/tree/main/dice-roller",link:"https://ndawson.me/VueExamples/dice-roller/dist/",badges:["Vue","HTML"]}),s(o,{title:"Weather App",description:"A responsive weather app with hand drawn weather graphics. I am learning Vue and Azure with this app.",image:"/screenshots/weather-app.png",github:"https://github.com/NicholasDawson/VueExamples/tree/main/weather-app",link:"https://ndawson.me/VueExamples/weather-app/dist/",badges:["Vue","OpenWeather","Azure"],reverse:""}),s(o,{title:"WUPHF Weather",description:"A mobile app made for the BrickHack8 hackathon to tell you about today's weather in as many ways as possible!",image:"/screenshots/wuphf-weather.png",github:"https://github.com/DevanTurtle7/WUPHF-Weather",link:"https://devpost.com/software/wuphf-weather-nqk2u1",linkText:"Devpost",badges:["React Native","FastAPI","CockroachDB","Twilio","Python"]}),s(o,{title:"Twotor",description:"2nd Place Community Winner of the Meet & Hack 2022 hackathon. A tutoring web application where students help each other.",image:"/screenshots/twotor.png",github:"https://github.com/DevanTurtle7/twotor",link:"https://devpost.com/software/twotor-ixyc3l",linkText:"Devpost",badges:["React","Flask","PostgreSQL","Python"],reverse:""})],64))}};export{W as default};