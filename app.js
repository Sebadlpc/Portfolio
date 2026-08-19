// ==========================================
// 1. MENÚ MÓVIL (Con validación de seguridad)
// ==========================================
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn');

// Solo agregamos los eventos si los botones realmente existen en el HTML
if (menuToggle && mobileMenu && closeBtn) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
}


// ==========================================
// 2. EFECTO MÁQUINA DE ESCRIBIR
// ==========================================
const palabras = ["Data Scientist", "Software Developer"];
let i = 0; 
let j = 0; 
let borrando = false; 
let elementoTexto = document.getElementById("texto-animado");

function escribir() {
    // Si por alguna razón el elementoTexto no existe, detenemos la función para evitar errores
    if (!elementoTexto) return;

    const palabraActual = palabras[i];
    
    if (borrando) {
        elementoTexto.textContent = palabraActual.substring(0, j - 1);
        j--;
    } else {
        elementoTexto.textContent = palabraActual.substring(0, j + 1);
        j++;
    }

    let velocidad = borrando ? 50 : 100;

    if (!borrando && j === palabraActual.length) {
        velocidad = 2000; 
        borrando = true;
    } 
    else if (borrando && j === 0) {
        borrando = false;
        i++; 
        if (i === palabras.length) {
            i = 0; 
        }
        velocidad = 500; 
    }

    setTimeout(escribir, velocidad);
}

// Iniciar la animación
document.addEventListener("DOMContentLoaded", () => {
    elementoTexto = document.getElementById("texto-animado");
    if(elementoTexto) {
        escribir();
    }
});

// ==========================================
// 3. DESLIZAMIENTO SUAVE (Forzado por JS)
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Apaga el salto brusco instantáneo

        const targetId = this.getAttribute('href');
        
        // Si el enlace es solo un # vacío, no hace nada
        if(targetId === '#') return; 
        
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Calcula dónde está la sección, y le resta 100 píxeles 
            // para que la barra de navegación no tape el título al llegar
            const elementoPosicion = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementoPosicion + window.scrollY - 100;
  
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth' // Forzamos la animación suave
            });
        }
    });
});