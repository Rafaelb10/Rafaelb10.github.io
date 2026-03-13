const translations = {

pt:{

hero_title:
"Olá, eu sou <span class='text-color-main'>Rafael Alvarez</span><br>Desenvolvedor de Jogos",

know_more:"Saiba mais",

about_title:"Sobre mim",

about_text1:
"Sou um desenvolvedor de jogos focado em criar experiências divertidas.",

about_text2:
"Tenho interesse em gameplay design, programação e mecânicas inovadoras.",

projects_title:"Projetos",

download_game:"Baixar Jogo",

contact_title:"Contato"

},

en:{

hero_title:
"Hi, I'm <span class='text-color-main'>Rafael Alvarez</span><br>Game Developer",

know_more:"Know more",

about_title:"About me",

about_text1:
"I'm a game developer focused on creating fun experiences.",

about_text2:
"I'm interested in gameplay design and programming.",

projects_title:"Projects",

download_game:"Download Game",

contact_title:"Contact"

}

}

function setLanguage(lang){

document.querySelectorAll("[data-i18n]").forEach(el=>{

const key = el.getAttribute("data-i18n")

if(translations[lang][key]){
el.innerHTML = translations[lang][key]
}

})

}

ScrollReveal().reveal('.hero-title',{distance:'50px',origin:'bottom',duration:1000})
ScrollReveal().reveal('.project',{distance:'60px',origin:'bottom',interval:200})
ScrollReveal().reveal('#about',{distance:'60px',origin:'left',duration:1200})