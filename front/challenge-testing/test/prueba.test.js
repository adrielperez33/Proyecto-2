const CarritoCompra = require("../index")
describe("Testing del carrito de compra", () => {

    beforeEach(() => {
        carro = new CarritoCompra();
    });

    it("carritoCompra es una clase", () => {
        expect(carro instanceof CarritoCompra).toBe(true);
    });    

    it("Debe tener un array", () => {
        expect(carro.array).toEqual([]);
    })

    it("debe incluir un elemento al array", () =>{
        carro.agregarProducto(2)
        expect(carro.array).toEqual([2])
        expect(carro.array).toHaveLength(1)
    })

    it("debe incluir varios elemento al array", () =>{
        carro.agregarProducto(2)
        carro.agregarProducto(4)
        carro.agregarProducto(6)
        carro.agregarProducto(12)
        expect(carro.array).toEqual([2,4,6,12])
        expect(carro.array).toHaveLength(4)
    })

    it("calcula la suma de los numeros que le paso", () =>{
        carro.agregarProducto(4)
        carro.agregarProducto(6)
        carro.agregarProducto(10)
        carro.agregarProducto(20)
        expect(carro.calcularTotal()).toEqual(40)
    })

    it("calcula la suma de los numeros que le paso", () =>{
        carro.agregarProducto(42)
        carro.agregarProducto(66)
        carro.agregarProducto(12)
        carro.agregarProducto(20)
        expect(carro.calcularTotal()).toEqual(140)
    })

    it("devuelve el numero total con el respectivo descuento (10%)", () =>{
        carro.agregarProducto(42)
        carro.agregarProducto(66)
        carro.agregarProducto(12)
        carro.agregarProducto(20)
        expect(carro.aplicarDescuento(10)).toEqual(126)
    })

    it("devuelve el numero total con el respectivo descuento (20%)", () =>{
        carro.agregarProducto(4)
        carro.agregarProducto(6)
        carro.agregarProducto(10)
        carro.agregarProducto(20)
        expect(carro.aplicarDescuento(20)).toEqual(32)
    })
})