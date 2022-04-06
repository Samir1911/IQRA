a=[
    {
      val:1,
      img:"images/1.jpg",
      title:"Who is Allah [God] - Charecteristics ",
      time:20
    },
    {
      val:2,
      img:"images/2.jpg",
      title:"Can Science Ever Prove Existance Of God",
      time:20
    },
    {
        val:3,
        img:"images/3.jpg",
        title:"Paradox Questions About God",
        time:20
    },    
    {
        val:4,
        img:"images/4.jpg",
        title:"Destination Vs Freewill : If its Already written then why is it my fault",
        time:20
    },
    {
        val:5,
        img:"images/5.jpg",
        title:"If there is God then why is there sufffering in this world",
        time:20
    },
    {
        val:6,
        img:"images/6.jpg",
        title:"why should i worship god , is He egoistic",
        time:20
    },
    {
        val:7,
        img:"images/7.jpg",
        title:"Creation of 1st Human Adam Peace Be Upon him ",
        time:20
    },
    {
        val:8,
        img:"images/8.jpg",
        title:"Origins of idol worship and 1st Messenger [Neew/Noah/Nuh]",
        time:20
    },
    {
        val:9,
        img:"images/9.jpg",
        title:"The Greatest Women to walk on earth Maryam PBUH ",
        time:20
    },    
    {
        val:10,
        img:"images/10.jpg",
        title:"Prophet Muhammad : Greatest man to Ever walk on face of Earth",
        time:20
    },
    {
        val:11,
        img:"images/11.jpg",
        title:"Why did Prophet Muhammad PBUH marry Multiple Women",
        time:20
    },
    {
        val:12,
        img:"images/12.jpg",
        title:"Is Prophet Muhammad War Lord or is he Merciful to the world",
        time:20
    },
    {
        val:13,
        img:"images/13.jpg",
        title:"Revelation of Quran and its Preservation",
        time:20
    },
    {
        val:14,
        img:"images/14.jpg",
        title:"The Greatest Miracle Given to Prophet Muhammad PBUH",
        time:20
    },
    {
        val:15,
        img:"images/15.jpg",
        title:"Dargah: Worshipping the graves/tombs ",
        time:20
    },    
    {
        val:16,
        img:"images/16.jpg",
        title:"Rulings on Practicing the Fatiha over Food ?",
        time:20
    },
    {
        val:17,
        img:"images/17.jpg",
        title:"Mawlid-Un-Nabi : Celebrating the birthday of Prophet ?",
        time:20
    },
    {
        val:18,
        img:"images/18.jpg",
        title:"Islamic Golden Age : Fogotten Legecy ",
        time:20
    },
    {
        val:19,
        img:"images/19.jpg",
        title:"Does Islam Oppress Women & Femenism",
        time:20
    },
    {
        val:20,
        img:"images/20.jpg",
        title:"All Muslims are not Terrorists but all Terrorists are muslims",
        time:20
    },
    {
        val:21,
        img:"images/21.jpg",
        title:"Caste System : The disease which most muslims got it wrong",
        time:20
    },
    {
        val:22,
        img:"images/22.jpg",
        title:"Trust in Allah Doesn't mean Madness",
        time:20
    },
    {
        val:23,
        img:"images/23.jpg",
        title:"Signs that we are living in the EndTimes",
        time:20
    }
]
var main=document.querySelector("main")
s=``
a.forEach(obj => {
    s+=`<div class="container">
            <a href="audioPage.html"><img id="${obj.val}" src=${obj.img} alt="img"></a>
            <p class="title">${obj.title}</p>
            <p class="d">Duration : <b>${obj.time} mins</b></p>
        </div>`
});
main.innerHTML=s;
v=document.querySelectorAll(".container img")
v.forEach(li=>{
    li.addEventListener("click",function(){
        localStorage.setItem("val",li.id);
    })
})
var m=document.querySelector("audio")