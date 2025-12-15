const products = [
    {
        id: 1,
        name: "Lumina X1 Laptop",
        category: "Laptops",
        price: "$1,299",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Sonic Pro Headphones",
        category: "Audio",
        price: "$249",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Smart Watch Series 5",
        category: "Wearables",
        price: "$399",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Ergo Mouse",
        category: "Accessories",
        price: "$89",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        name: "4K Ultra Monitor",
        category: "Laptops",
        price: "$450",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        name: "BassBoom Speaker",
        category: "Audio",
        price: "$120",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
];

const productGrid = document.getElementById('product-grid');
const searchInput = document.getElementById('search-input');
const noResults = document.getElementById('no-results');
const filterButtons = document.querySelectorAll('.tag');
const cartCountElement = document.querySelector('.cart-count');
const toastContainer = document.getElementById('toast-container');

let cartCount = 0;
let currentCategory = 'all';

// Render Products
function renderProducts(productsToRender) {
    productGrid.innerHTML = '';

    if (productsToRender.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
    }

    productsToRender.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.animationDelay = `${index * 0.1}s`; // Staggered animation
        card.innerHTML = `
            <div class="card-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <button class="add-btn" onclick="addToCart('${product.name}')">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
            <div class="card-content">
                <span class="category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="price">${product.price}</p>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Filter Logic
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();

    const filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm);
        const matchesCategory = currentCategory === 'all' ||
            product.category.toLowerCase() === currentCategory;

        return matchesSearch && matchesCategory;
    });

    renderProducts(filtered);
}

// Event Listeners
searchInput.addEventListener('input', filterProducts);

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active state
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update category
        currentCategory = btn.dataset.category;
        filterProducts();
    });
});

// Reset Filters
document.querySelector('.reset-btn')?.addEventListener('click', () => {
    searchInput.value = '';
    currentCategory = 'all';
    filterButtons.forEach(b => b.classList.remove('active'));
    filterButtons[0].classList.add('active');
    filterProducts();
});

// Add to Cart Functionality
window.addToCart = function (productName) {
    cartCount++;
    cartCountElement.textContent = cartCount;

    // Animation for cart count
    cartCountElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartCountElement.style.transform = 'scale(1)';
    }, 200);

    showToast(`Added ${productName} to cart`);
};

// Toast Notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.7)';
        navbar.style.boxShadow = 'none';
    }
});

// Initial Render
renderProducts(products);

