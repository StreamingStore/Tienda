// Mobile Menu
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// Cerrar menú al seleccionar opción
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        const offset = 60; // Altura de la navbar
        
        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});

// Datos de productos (ejemplo)
const products = [
    {
        id: 1,
        name: "Netflix Premium",
        category: "streaming",
        duration: "1 Mes",
        price: 25,
        icon: "fas fa-film"
    },
    {
        id: 2,
        name: "Crunchyroll",
        category: "streaming",
        duration: "1 Mes",
        price: 10,
        icon: "fas fa-film"
    },
    {
        id: 3,
        name: "Crunchyroll",
        category: "streaming",
        duration: "1 año",
        price: 50,
        icon: "fas fa-film"
    },
    {
        id: 4,
        name: "Vix +",
        category: "streaming",
        duration: "1 Mes",
        price: 9,
        icon: "fas fa-film"
    },
    {
        id: 5,
        name: "Paramount +",
        category: "streaming",
        duration: "1 Mes",
        price: 10,
        icon: "fas fa-film"
    },
    {
        id: 6,
        name: "Prime Video",
        category: "streaming",
        duration: "1 Mes",
        price: 10,
        icon: "fas fa-film"
    },
    {
        id: 7,
        name: "HBO Max",
        category: "streaming",
        duration: "1 Mes",
        price: 10,
        icon: "fas fa-film"
    },
    {
        id: 8,
        name: "Plex Tv",
        category: "streaming",
        duration: "1 Mes",
        price: 12,
        icon: "fas fa-film"
    },
    {
        id: 9,
        name: "Disney Premium",
        category: "streaming",
        duration: "1 Mes",
        price: 18,
        icon: "fas fa-film"
    },
    {
        id: 10,
        name: "Porn Hub Premium",
        category: "streaming",
        duration: "1 Mes",
        price: 24,
        icon: "fas fa-film"
    },
    {
        id: 11,
        name: "Apple Tv +",
        category: "streaming",
        duration: "1 Mes",
        price: 20,
        icon: "fas fa-film"
    },
    {
        id: 12,
        name: "Chat gpt Plus",
        category: "streaming",
        duration: "1 Mes",
        price: 54,
        icon: "fas fa-film"
    },
    {
        id: 13,
        name: "Canva premium",
        category: "diseño",
        duration: "1 Mes",
        price: 10,
        icon: "fas fa-palette"
    },
    {
        id: 14,
        name: "Canva premium",
        category: "diseño",
        duration: "3 Meses",
        price: 25,
        icon: "fas fa-palette"
    },
    {
        id: 15,
        name: "Canva premium",
        category: "diseño",
        duration: "6 Meses",
        price: 40,
        icon: "fas fa-palette"
    },
    {
        id: 16,
        name: "Canva premium",
        category: "diseño",
        duration: "12 Meses",
        price: 60,
        icon: "fas fa-palette"
    },
    {
        id: 17,
        name: "Spotify Premium",
        category: "musica",
        duration: "1 Mes",
        price: 25,
        icon: "fas fa-music"
    },
    {
        id: 18,
        name: "Youtube Premium",
        category: "musica",
        duration: "1 Mes",
        price: 25,
        icon: "fas fa-music"
    },
    
    {
        id: 19,
        name: "IPTV Smarters Pro",
        category: "tv",
        duration: "1 Mes",
        price: 18,
        icon: "fas fa-tv"
    },
    {
        id: 20,
        name: "Magis Tv",
        category: "tv",
        duration: "1 Mes",
        price: 18,
        icon: "fas fa-tv"
    },
    {
        id: 21,
        name: "Mica Play",
        category: "tv",
        duration: "1 Mes",
        price: 18,
        icon: "fas fa-tv"
    },
    {
        id: 22,
        name: "Stela Tv",
        category: "tv",
        duration: "1 Mes",
        price: 18,
        icon: "fas fa-tv"
    },
    {
        id: 23,
        name: "Tele Latino",
        category: "tv",
        duration: "1 Mes",
        price: 18,
        icon: "fas fa-tv"
    },
    {
        id: 24,
        name: "Spotify Premium",
        category: "musica",
        duration: "3 Meses",
        price: 45,
        icon: "fas fa-music"
    },
    {
        id: 25,
        name: "Youtube Premium",
        category: "musica",
        duration: "3 Meses",
        price: 45,
        icon: "fas fa-music"
    },
    {
        id: 26,
        name: "Capcut Pro",
        category: "diseño",
        duration: "1 Mes",
        price: 40,
        icon: "fas fa-palette"
    },
   
];

// Carrito
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Mostrar productos
function displayProducts(filter = 'all') {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';
    
    const filtered = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);
    
    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.id = product.id;
        card.innerHTML = `
            <div class="product-icon"><i class="${product.icon}"></i></div>
            <div class="product-details">
                <h3>${product.name}</h3>
                <p>Duración: ${product.duration}</p>
                <p class="price">Bs ${product.price.toFixed(2)}</p>
                <button class="add-to-cart">Añadir al carrito</button>
            </div>
        `;
        productsGrid.appendChild(card);
    });
    
    // Agregar eventos a botones
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Control de categorías
document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.category-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        displayProducts(item.dataset.category);
    });
});

// Inicialización
displayProducts();

// Funciones del carrito
function addToCart(e) {
    const productId = parseInt(e.target.closest('.product-card').dataset.id);
    const existingItem = cart.find(item => item.id === productId);
    
    if(existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        const product = products.find(p => p.id === productId);
        cart.push({...product, quantity: 1});
    }
    
    updateCart();
}

function removeFromCart(e) {
    const productId = parseInt(e.target.dataset.id);
    cart = cart.map(item => 
        item.id === productId ? {...item, quantity: item.quantity - 1} : item
    ).filter(item => item.quantity > 0);
    
    updateCart();
}

function updateCart() {
    // Actualizar UI del carrito
    const cartItems = document.querySelector('.cart-items');
    const totalElement = document.querySelector('.total');
    let total = 0;
    
    cartItems.innerHTML = '';
    cart.forEach(item => {
        total += item.price * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div>
                <p>${item.name}</p>
                <small>Cantidad: ${item.quantity}</small>
            </div>
            <div class="item-actions">
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
                <button class="remove-item" data-id="${item.id}">&times;</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    totalElement.textContent = `Total: BS ${total.toFixed(2)}`;
    document.querySelector('.count').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Agregar eventos a botones de eliminar
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeFromCart);
    });
}

// Control del modal
document.getElementById('cart-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('cart-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('cart-modal').classList.remove('active');
    document.body.style.overflow = '';
});

// Cerrar con clic fuera
document.getElementById('cart-modal').addEventListener('click', (e) => {
    if(e.target === document.getElementById('cart-modal')) {
        document.getElementById('cart-modal').classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Checkout por WhatsApp
document.querySelector('.checkout-btn').addEventListener('click', () => {
    let message = "¡Hola! Quiero comprar:\n\n";
    
    cart.forEach(item => {
        message += `* ${item.name} - Bs${item.price} x${item.quantity}\n`;
    });
    
    message += `\nTotal: Bs${cart.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2)}`;
    
});

// Cargar estado inicial
updateCart();

// Control del carrito
document.getElementById('cart-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('cart-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('cart-modal').classList.remove('active');
    document.body.style.overflow = '';
});

// Control de sidebar en móvil
const categoryToggle = document.createElement('div');
categoryToggle.className = 'category-toggle';
categoryToggle.innerHTML = '<i class="fas fa-bars"></i> Categorías';
document.querySelector('.cuentas-section').prepend(categoryToggle);

categoryToggle.addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('active');
});

// Cerrar sidebar al seleccionar categoría
document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', () => {
        if(window.innerWidth < 768) {
            document.querySelector('.sidebar').classList.remove('active');
        }
    });
});









// Control del botón "Comprar por WhatsApp"
document.querySelector('.checkout-btn').addEventListener('click', () => {
    // Verificar si hay productos de la categoría "streaming" en el carrito
    const hasStreamingProducts = cart.some(item => item.category === 'streaming');

    let userName = '';

    if (hasStreamingProducts) {
        // Crear un cuadro de diálogo personalizado con un input
        const userPrompt = prompt('Ingrese un nombre de perfil:');

        // Validar que el nombre no esté vacío
        if (!userPrompt || userPrompt.trim() === '') {
            alert('El nombre de perfil es obligatorio para productos de la categoría "streaming".');
            return; // Detener el proceso si no se proporciona un nombre
        }

        userName = userPrompt.trim(); // Guardar el nombre ingresado
    }

    // Construir el mensaje
    let message = "¡Hola! Quiero comprar:\n";
    cart.forEach(item => {
        message += `* ${item.name} - Bs${item.price.toFixed(2)} x${item.quantity}\n`;
    });

    // Agregar el total
    const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
    message += `\nTotal: Bs${total.toFixed(2)}`;

    // Agregar el nombre del perfil si aplica
    if (userName) {
        message += `\n\nPerfil: ${userName}`;
    }

    // Enviar el mensaje por WhatsApp
    window.open(`https://wa.me/67842791?text=${encodeURIComponent(message)}`);
});









