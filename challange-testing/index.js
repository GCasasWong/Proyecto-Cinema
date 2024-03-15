class CarritoCompra {
    constructor(){
        this.product = [];
    }

    agregarProducto(product){
        this.product.push(product);
    }

    calcularTotal(){
        let total = 0;
        
        this.product.forEach(Element => {
            total += Element.price;
        });
        return total;
    }

    aplicarDescuento(discount){
        if(typeof discount !== 'number'){
            throw new Error('El valor recibido debe ser un numero');
        }

        const total = this.calcularTotal();
        return total - (total * discount / 100);
    }
}

module.exports = CarritoCompra;