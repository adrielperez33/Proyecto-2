class CarritoCompra {
    constructor() {
        this.array = [];
    }

    agregarProducto(producto) {
        this.array.push(producto)
    }

    calcularTotal() {
        let total = 0
        for (const iterator of this.array) {
            total += iterator
        }
        return total
    }

    aplicarDescuento(porcentaje) {
        let total = this.calcularTotal();
        let precioFinal = total - (total * porcentaje / 100)
        return precioFinal
    }
}

module.exports = CarritoCompra