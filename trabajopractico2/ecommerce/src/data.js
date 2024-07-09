const productos = [
    {
        "id": 1,
        "nombre": "Laptop",
        "descripcion": "Laptop de alta gama con procesador Intel i7",
        "precio": "1200.00",
        "marca": "Dell",
        "sku": "LAP12345"
    },
    {
        "id": 2,
        "nombre": "Smartphone",
        "descripcion": "Teléfono inteligente con cámara de 108MP",
        "precio": "800.00",
        "marca": "Samsung",
        "sku": "SMP67890"
    },
    {
        "id": 3,
        "nombre": "Auriculares",
        "descripcion": "Auriculares inalámbricos con cancelación de ruido",
        "precio": "150.00",
        "marca": "Sony",
        "sku": "AUR11223"
    },
    {
        "id": 4,
        "nombre": "Tablet",
        "descripcion": "Tablet de 10 pulgadas con pantalla retina",
        "precio": "500.00",
        "marca": "Apple",
        "sku": "TAB44556"
    },
    {
        "id": 5,
        "nombre": "Smart Watch",
        "descripcion": "Reloj inteligente con monitoreo de salud",
        "precio": "200.00",
        "marca": "Garmin",
        "sku": "SWT77889"
    },
    {
        "id": 6,
        "nombre": "Cámara",
        "descripcion": "Cámara DSLR con lente de 24-70mm",
        "precio": "1500.00",
        "marca": "Canon",
        "sku": "CAM99001"
    },
    {
        "id": 7,
        "nombre": "Impresora",
        "descripcion": "Impresora multifunción con conexión Wi-Fi",
        "precio": "300.00",
        "marca": "HP",
        "sku": "IMP22334"
    },
    {
        "id": 8,
        "nombre": "Televisor",
        "descripcion": "Televisor 4K de 55 pulgadas con HDR",
        "precio": "900.00",
        "marca": "LG",
        "sku": "TV55667"
    },
    {
        "id": 9,
        "nombre": "Consola de videojuegos",
        "descripcion": "Consola de videojuegos de última generación",
        "precio": "500.00",
        "marca": "Sony",
        "sku": "CON88990"
    },
    {
        "id": 10,
        "nombre": "Altavoz Bluetooth",
        "descripcion": "Altavoz portátil con sonido envolvente",
        "precio": "100.00",
        "marca": "JBL",
        "sku": "ALT33445"
    }
];

export function obtenerProductos() {
    return productos;
}

export function obtenerProducto(id) {
    return productos.find((producto) => producto.id === id);
}