// script.js
document.addEventListener('DOMContentLoaded', () => {
    const productos = [
        { id: 1, nombre: 'Producto 1', precio: 10 },
        { id: 2, nombre: 'Producto 2', precio: 20 },
        { id: 3, nombre: 'Producto 3', precio: 30 },
    ];

    const carrito = [];

    const contenedorProductos = document.getElementById('productos');
    const contenedorCarrito = document.getElementById('carrito');

    function renderProductos() {
        productos.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('producto');
            div.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}</p>
                <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
            `;
            contenedorProductos.appendChild(div);
        });
    }

    function renderCarrito() {
        contenedorCarrito.innerHTML = '';
        carrito.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('item-carrito');
            div.innerHTML = `
                <h3>${item.nombre}</h3>
                <p>Precio: $${item.precio}</p>
                <button onclick="quitarDelCarrito(${item.id})">Quitar</button>
            `;
            contenedorCarrito.appendChild(div);
        });
    }

    window.agregarAlCarrito = function(id) {
        const producto = productos.find(p => p.id === id);
        carrito.push(producto);
        renderCarrito();
    };

    window.quitarDelCarrito = function(id) {
        const index = carrito.findIndex(p => p.id === id);
        if (index !== -1) {
            carrito.splice(index, 1);
        }
        renderCarrito();
    };

    renderProductos();
});
