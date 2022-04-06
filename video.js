vid=[
    {
        leg:"God",
        links:["0HUR3Q0GoWQ","pyPgqXVgmsU","KZ1yXIvncQ0","POGgOkPX1gM"],
        play:"https://www.youtube.com/playlist?list=PLqMfgbehmuSFBWJ-aQFSv4g5QxWB9YpfL"
    },
    {
        leg:"Quran",
        links:["uAn4uPDKJ1k","n281Zyywyn4","aUSp3vE_kGA","rCazhBAW7a8"],
        play:"https://www.youtube.com/playlist?list=PLqMfgbehmuSE155eicgdOR89m-pCfJAak"
    },
    {
        leg:"Atheism",
        links:["RdATyl93tQE","_gyBufskGWA","N-O3qcUEYT4","tQGQS0JaCbU"],
        play:"https://www.youtube.com/playlist?list=PLqMfgbehmuSHEuLpsn5lQCYdeCebZ_tM-"
    },
    {
        leg:"Comparitive Religion",
        links:["lT0Y2pw39fg","Ak7NisgAO5M","pJ6DAVsXFdQ","Iu5PDOm2q8E"],
        play:"https://www.youtube.com/playlist?list=PLqMfgbehmuSG-ZVksnhn9-UKcjGIdsx6s"
    },
    {
        leg:"Prophet Muhammad PBUH",
        links:["slCt_iTygvc","6IqxqwxwAqE","DdWxCVYAOCk","PQmlZngZiBA",],
        play:"https://youtube.com/playlist?list=PLqMfgbehmuSG8M-2xis69UCNcGDzyeVVT"
    },
    {
        leg:"biography Prophet Muhammad PBUH",
        links:["VOUp3ZZ9t3A","udjM4dBVicE","4F5qzMI2IKs","ey7UAi_Emgs",],
        play:"https://www.youtube.com/playlist?list=PLAEA99D24CA2F9A8F"
    },
    /*{
        leg:"Accusations on Prophet PBUH",
        links:["dQVMdh6d3h0","KoShExgPVdw","","",],
        play:""
    },*/
    {
        leg:"Companions of Prophet",
        links:["U_60ahkQVKo","Nm8Ng1uxrSc","iL98iNRtPBo","VWyuCdCSr6o",],
        play:"https://youtube.com/playlist?list=PLqMfgbehmuSEsuf2qSsrohok9R7Av4cgG"
    },
    {
        leg:"Feminism vs Islam",
        links:["Qn93oMMzVd0","xCdga0-glpM","38YmD27-ZDQ","dncYxKH0O7g"],
        play:"https://youtube.com/playlist?list=PLqMfgbehmuSGH3I94pXiFABpD1YZFlwWG"
    },
    {
        leg:"Islamic Rulings",
        links:["","","","",],
        play:""
    },
    {
        leg:"Husband Wife Relationship",
        links:["","","","",],
        play:""
    },
    {
        leg:"Innovations and Celebrations",
        links:["","","","",],
        play:""
    },
    {
        leg:"Misconceptions",
        links:["","","","",],
        play:""
    },
    {
        leg:"Islamic History",
        links:["","","","",],
        play:""
    },
    {
        leg:"Great Muslim lives",
        links:["","","","",],
        play:""
    },
    {
        leg:"Unite the Ummah",
        links:["","","","",],
        play:""
    },
    {
        leg:"Shorts",
        links:["","","","",],
        play:""
    },
    {
        leg:"",
        links:""
    },

]

var fs=document.querySelectorAll("fieldset");
var i=0;
fs.forEach(f=>{
    li=vid[i].links;
    s=""
    li.forEach(l=>{
        link="https://youtube.com/embed/"+l;
        s+=`<iframe  src=${link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    })
    f.innerHTML=`<legend>${vid[i].leg}</legend>${s}
    <a href=${vid[i].play} id=${i}>see more</a>`
    i++;
})