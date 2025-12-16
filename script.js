// DEPOIMENTOS
const swiper = new Swiper('.swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true, // passa infinitamente
        autoplay: {
            delay: 2500, // 2.5s
            disableOnInteraction: false,
        },
        grabCursor: true,
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
});

// BOTOES DE FALE CONOSCO
function irWhats() {
  const numero = "5531992546664"; 

  const mensagem = "Olá, vi o site da Dellicato Imagens e gostaria de mais informações, por favor.";

  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(link, "_blank");
}


//MENU HAMBURGUER
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

// SUBMENU
const produtoDropdown = document.querySelector(".dropdown");
const submenu = produtoDropdown.querySelector(".submenu");

// quando clicar em "Produtos", abre/fecha o submenu
produtoDropdown.addEventListener("click", function (e) {
    // impede o link de recarregar a página
   
    e.stopPropagation();

    // alterna o estado do submenu
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
});


// ENVIAR CONTATO NO WHATSAPP
function enviarWhats(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let cidade = document.getElementById("cidade").value;
    let mensagem = document.getElementById("mensagem").value;

    let texto = `Olá! Estou entrando em contato pelo site!%0A%0A` +
                `*Nome:* ${nome}%0A` +
                `*Cidade:* ${cidade}%0A` +
                `*Mensagem:* ${mensagem}`;

    let url = `https://wa.me/5531992546664?text=${texto}`;

    window.open(url, '_blank');
}

function abrirModal(img) {
    const modal = document.getElementById("modalImagem");
    const modalImg = document.getElementById("imgModal");

    modal.style.display = "flex";
    modalImg.src = img.src; 
}

function fecharModal() {
    document.getElementById("modalImagem").style.display = "none";
}

/* Fecha ao clicar fora da imagem */
document.getElementById("modalImagem").addEventListener("click", function(e) {
    if (e.target.id === "modalImagem") {
        fecharModal();
    }
});

