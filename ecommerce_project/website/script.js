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

function renderProducts(productsToRender) {
    productGrid.innerHTML = '';

    if (productsToRender.length === 0) {
        noResults.classList.remove('hidden');
        return;
    } else {
        noResults.classList.add('hidden');
    }

    productsToRender.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="card-image">
                <img src="${product.image}" alt="${product.name}">
                <button class="add-btn"><i class="fas fa-plus"></i></button>
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

// Initial Render
renderProducts(products);

// Search Logic
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
});
