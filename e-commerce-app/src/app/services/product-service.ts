export class Product {
    constructor(
        public id: number,
        public cardPrice: number,
        public commonPrice: number,
        public title: string,
        public rating: number,
        public image: string
    ){}
}

export class ProductService {
    getProduct(): Product[] {
        return products.map(p => new Product(p.id, p.cardPrice, p.commonPrice, p.title,
            p.rating, p.image));
    }
}
var products = [
    {
        id: 0,
        cardPrice: 44.50,
        commonPrice: 50.50,
        title: 'Г/Ц Блинчики с мясом вес, Россия',
        rating: 3,
        image: "assets/common/product-card.jpg"
    },
    {
        id: 1,
        cardPrice: 44.50,
        commonPrice: 50.50,
        title: 'Г/Ц Блинчики с мясом вес, Россия',
        rating: 3,
        image: "assets/common/product-card.jpg"
    },
    {
        id: 2,
        cardPrice: 44.50,
        commonPrice: 50.50,
        title: 'Г/Ц Блинчики с мясом вес, Россия',
        rating: 3,
        image: "assets/common/product-card.jpg"
    },
    {
        id: 3,
        cardPrice: 44.50,
        commonPrice: 50.50,
        title: 'Г/Ц Блинчики с мясом вес, Россия',
        rating: 3,
        image: "assets/common/product-card.jpg"
    },
]