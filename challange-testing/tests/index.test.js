const CarritoCompra = require('../index');

describe('CarritoCompra', () => {

    const carrito = new CarritoCompra();

    const product = {
        name: 'producto 1',
        price: 20
    }

    const product2 = {
        name: 'producto 2',
        price: 100
    }

    it('validate carritoCompra like function', () =>{
        expect(typeof CarritoCompra).toBe("function");  
    });

    it('validate that carritoCompra has a product property', () => {
        expect(carrito.product).toEqual([]);
        expect(carrito.product).toHaveLength(0);
        expect(Array.isArray(carrito.product)).toBeTruthy();
    });

    it('valite that carritoCompra has a method addProduct', () => {
        expect(carrito.agregarProducto).toBeDefined();
        expect(typeof carrito.agregarProducto).toBe("function"); 
    });

    it('validate that carritoCompra add a product', () => {
        carrito.agregarProducto(product)
        expect(carrito.product).toContainEqual(product);

        carrito.agregarProducto(product2);
        expect(carrito.product.length).toEqual(2);
    });

    it('validate that carritoCompra has a method calcularTotal', () => {
        expect(carrito.calcularTotal).toBeDefined();
        expect(typeof carrito.calcularTotal).toBe("function");
    });

    it('validate that carritoCompra calculate the total', () => {
        expect(carrito.calcularTotal).toBeDefined();
        expect(carrito.calcularTotal()).toBe(product.price + product2.price);
    });

    describe('El metodo aplicarDescuento', () => {
        it('Deberia recibir como parametro un valor numerico', () => {
        // expect(() => carrito.aplicarDescuento(true)).toThrowError('El valor recibido dene ser un numero');
        expect(() => carrito.aplicarDescuento("20")).toThrowError('El valor recibido debe ser un numero');
    });
});

    it('validate that carritoCompra has a method aplicarDescuento', () => {
        expect(carrito.aplicarDescuento).toBeDefined();
        expect(typeof carrito.aplicarDescuento).toBe("function")
    });

    it("Deberia calcular el descuento en base al parametro recibido y retornar el nuevo precio", () => {
        expect(carrito.aplicarDescuento(10)).toEqual(carrito.calcularTotal() - carrito.calcularTotal() * (10/100)
        );
    });
});






















// const CarritoCompra = require("../index");

// const carrito = new CarritoCompra();

// describe("CarritoCompra", () => {

//     it("carrito deberia ser una instancia de la clase CarritoCompra", () => {
//         expect(carrito instanceof CarritoCompra).toBe(true);
//     });

//     it("Deberia iniciar con un array vacio", () => {
//         expect(carrito.productos).toEqual([]);
//     });

//     it("agregarProducto deberia ser un metodo", () => {
//         expect(typeof carrito.agregarProducto).toEqual("function")
//     });

//     it("calcularTotal deberia ser un metodo", () => {
//         expect(typeof carrito.calcularTotal).toEqual("function")
//     });

//     it("aplicarDescuento deberia ser un metodo", () => {
//         expect(typeof carrito.aplicarDescuento).toEqual("function")
//     });
// })

// describe("agregarProducto", () => {
//     it("agregarProducto recibe como parametro un objeto", () => {
//         expect(carrito.agregarProducto({})).toBe(true);
//     })

//     it("El objeto debe tener la propiedad precio", () =>{
//         expect(()=> {carrito.agregarProducto({}).toThrowError("El objeto debe tener la propiedad precio")});
//     })

//     it("Deberia agregar el producto  a la lista de productos", () => {
//         carrito.agregarProducto({nombre:"Cerveza", precio: 5})
//         expect(carrito.productos.length).toBe(1);
//     })

// })