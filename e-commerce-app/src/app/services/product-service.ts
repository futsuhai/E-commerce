export class Product {
    constructor(
        public id: number,
        public cardPrice: number,
        public commonPrice: number,
        public title: string,
        public rating: number,
        public image: string,
        public country: string,
        public weight: number,
        public article: number,
        public reviews: number,
        public brand: string
    ){}
}

export class ProductListData {
    constructor(
        public prodListTitle: string,
        public prodListMore: string
    ){}
}

export class ProductService {
    getProduct(): Product[] {
        return products.map(p => new Product(p.id, p.cardPrice, p.commonPrice, p.title,
            p.rating, p.image, p.country, p.weight, p.article, p.reviews, p.brand));
    }
    getProductById(productId: number): Product | undefined{
        const foundProduct = products.find(p => p.id === productId);

        return !foundProduct?undefined: new Product(
            foundProduct.id,
            foundProduct.cardPrice,
            foundProduct.commonPrice,
            foundProduct.title,
            foundProduct.rating,
            foundProduct.image,
            foundProduct.country,
            foundProduct.weight,
            foundProduct.article,
            foundProduct.reviews,
            foundProduct.brand
        );
    }
}

var products = [
    {
        id: 0,
        cardPrice: 44.50,
        commonPrice: 50.50,
        title: 'Г/Ц Блинчики с мясом',
        rating: 3,
        image: "assets/common/test.jpg",
        country: 'Россия',
        weight: 180,
        article: 371431,
        reviews: 3,
        brand: "Мясное хозяйство"
    },
    {
        id: 1,
        cardPrice: 44.50,
        commonPrice: 50.50,
        title: 'Г/Ц Блинчики с мясом',
        rating: 3,
        image: "assets/common/product-card.jpg",
        country: 'Россия',
        weight: 180,
        article: 371431,
        reviews: 3,
        brand: "Мясное хозяйство"
    },
    {
        id: 2,
        cardPrice: 44.50,
        commonPrice: 50.50,
        title: 'Г/Ц Блинчики с мясом',
        rating: 3,
        image: "assets/common/product-card.jpg",
        country: 'Россия',
        weight: 180,
        article: 371431,
        reviews: 3,
        brand: "Мясное хозяйство"
    },
    {
        id: 3,
        cardPrice: 44.50,
        commonPrice: 50.50,
        title: 'Г/Ц Блинчики с мясом',
        rating: 3,
        image: "assets/common/product-card.jpg",
        country: 'Россия',
        weight: 180,
        article: 371431,
        reviews: 3,
        brand: "Мясное хозяйство"
    },
]