function setLang(lang){

if(lang === "pt"){

document.querySelector("#hero h1").innerHTML =
"Olá, eu sou <span class='text-color-main'>Rafael Alvarez</span><br>Desenvolvedor de Jogos";

document.querySelector("#about .section-title").innerText =
"Sobre mim";

document.querySelector("#projects .section-title").innerText =
"Projetos";

document.querySelector("#contact .section-title").innerText =
"Contato";

}

if(lang === "en"){

document.querySelector("#hero h1").innerHTML =
"Hi, I'm <span class='text-color-main'>Rafael Alvarez</span><br>Game Developer";

document.querySelector("#about .section-title").innerText =
"About Me";

document.querySelector("#projects .section-title").innerText =
"Projects";

document.querySelector("#contact .section-title").innerText =
"Contact";

}
}