import { Category } from "../../shop-settings/categories.model";

export class ShopProduct {
    constructor(public id: number, public quantity: number = 1, public name: string, public description: string, public imagePath: string, public price: number, public category: Category) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.price = price;
        this.quantity = quantity;
        this.category = category;
    }
}

export const shopProducts : ShopProduct[] = [
    {id: 1, name: 'Apple Pie', description: 'Lorem ipsum dolor sit amet', imagePath: '../../../../assets/img/shop/cakes/applePie.jpeg', price: 19.99, category: 'cakes', quantity: 0},
    {id: 2, name: 'Cheescake', description: 'Lorem ipsum Lorem ipsum dolor sit amet', imagePath: '../../../../assets/img/shop/cakes/cheesecake.jpeg', price: 22.99, category: 'cakes', quantity: 0},
    {id: 3, name: 'Chocolate Cake', description: 'Lorem ipsum Lorem ipsum dolor sit amet', imagePath: '../../../../assets/img/shop/cakes/chocolateCake.jpeg', price: 16.99, category: 'cakes', quantity: 0},
    {id: 4, name: 'Iceberg', description: 'Lorem ipsumLorem ipsum dolor sit amet', imagePath: '../../../../assets/img/shop/cakes/iceberg.webp', price: 20.99, category: 'cakes', quantity: 0},
    {id: 5, name: 'oreo Cheesecake', description: 'Lorem ipsuLorem ipsum dolor sit amet v', imagePath: '../../../../assets/img/shop/cakes/oreoCheesecake.jpeg', price: 24.99, category: 'cakes', quantity: 0},
    {id: 6, name: 'Rafaello', description: 'Lorem ipsum Lorem ipsum dolor sit amet', imagePath: '../../../../assets/img/shop/cakes/rafaello.jpeg', price: 20.99, category: 'cakes', quantity: 0},
    {id: 7, name: 'Raspberry Cloud', description: 'Lorem ipsum Lorem ipsum dolor sit amet', imagePath: '../../../../assets/img/shop/cakes/raspberryCloud.jpeg', price: 20.99, category: 'cakes', quantity: 0},
    {id: 52, name: 'Tiramisu', description: 'Lorem ipsu Lorem ipsum dolor sit amet', imagePath: '../../../../assets/img/shop/cakes/tiramisu.jpeg', price: 22.99, category: 'cakes', quantity: 0},
    {id: 53, name: 'Strawberry Cake', description: 'Lorem ipsu Lorem ipsum dolor sit amet', imagePath: '../../../../assets/img/shop/cakes/strawberryCake.jpeg', price: 19.99, category: 'cakes', quantity: 0},
    {id: 54, name: 'Poppy Seed Cake', description: 'Lorem ipsu', imagePath: '../../../../assets/img/shop/cakes/poppySeedCake.webp', price: 19.99, category: 'cakes', quantity: 0},
    {id: 8, name: 'Chocolate Cookies', description: 'Lorem ipsum', imagePath: '../../../../assets/img/shop/cookies/chocolateCookies.jpeg', price: 7.99, category: 'cookies', quantity: 0},
    {id: 9, name: 'Chocolate Macaroons', description: 'Lorem ipsum,', imagePath: '../../../../assets/img/shop/cookies/chocolateMacaroons.jpeg', price: 10.99, category: 'cookies', quantity: 0},
    {id: 10, name: 'Coconut Cookies', description: 'Lorem ipsum', imagePath: '../../../../assets/img/shop/cookies/coconutCookies.jpeg', price: 7.99, category: 'cookies', quantity:0},
    {id: 11, name: 'CookiesWithChocolate', description: 'Lorem ipsum', imagePath: '../../../../assets/img/shop/cookies/CookiesWithChocolate.jpeg', price: 7.99, category: 'cookies', quantity:0},
    {id: 12, name: 'Gingerbread Cookies', description: 'Lorem ipsum', imagePath: '../../../../assets/img/shop/cookies/gingerbreadCookies.webp', price: 8.99, category: 'cookies', quantity:0},
    {id: 58, name: 'Chocolate Chip Muffins', description: 'Lorem ipsum', imagePath: '../../../../assets/img/shop/cookies/ChocolateChipMuffins.jpeg', price: 9.99, category: 'cookies', quantity:0},
    {id: 13, name: 'Jam Cookies', description: 'Lorem ipsum', imagePath: '../../../../assets/img/shop/cookies/jamCookies.jpeg', price: 8.99, category: 'cookies', quantity:0},
    {id: 14, name: 'Strawberry Macaroons', description: 'Lorem ipsum', imagePath: '../../../../assets/img/shop/cookies/strawberryMacaroons.jpeg', price: 9.99, category: 'cookies', quantity:0},
    {id: 55, name: 'Vanilla Macaroons', description: 'Lorem ipsum', imagePath: '../../../../assets/img/shop/cookies/vanillaMacaroons.jpeg', price: 9.99, category: 'cookies', quantity:0},
    {id: 22, name: 'Milk Candy Fudge', description: 'Lorem ipsum', imagePath: '../../../../assets/img/shop/sweets/candyFudge.jpeg', price: 9.99, category: 'sweets', quantity: 0},
    {id: 23, name: 'Pralines Box', description: 'Lorem ipsum', imagePath: '../../../../assets/img/shop/sweets/pralinesBox.jpeg', price: 12.99, category: 'sweets', quantity: 0},
    {id: 24, name: 'Rassberry CandyFudge', description: 'Lorem ipsum', imagePath: '../../../../assets/img/shop/sweets/rassberryCandyFudge.jpeg', price: 9.99, category: 'sweets', quantity: 0},
    {id: 25, name: 'Reesees Cups', description: 'Lorem ipsum', imagePath: '../../../../assets/img/shop/sweets/ReeseesCups.jpeg', price: 10.99, category: 'sweets', quantity: 0},
    {id: 30, name: '18 Birthday Rose Gold Balloons', description: 'Lorem ipsum', imagePath: '../../../../assets/img/shop/balloons/18BirthdayRoseGoldBalloons.jfif', price: 4.99, category: 'balloons', quantity: 0},
    {id: 31, name: 'Gold Balloons', description: 'Lorem ipsum', imagePath: '../../../../assets/img/shop/balloons/goldBalloons.jpg', price: 5.99, category: 'balloons', quantity: 0},
    {id: 32, name: 'Gold Mix Balloon', description: 'Lorem ipsum', imagePath: '../../../../assets/img/shop/balloons/goldMixBalloons.avif', price: 7.99, category: 'balloons', quantity: 0},
    {id: 33, name: 'Happy Birthday Balloons', description: 'Lorem ipsum', imagePath: '../../../../assets/img/shop/balloons/happyBirthdayBalloons.avif', price: 6.99, category: 'balloons', quantity: 0},
    {id: 34, name: 'White Balloons Mix', description: 'Lorem ipsum', imagePath: '../../../../assets/img/shop/balloons/WhiteBalloonsMix.jpeg', price: 6.99, category: 'balloons', quantity: 0},
    {id: 35, name: 'Transparent Balloons', description: 'Lorem ipsum', imagePath: '../../../../assets/img/shop/balloons/HappyBirthdayTransparentBalloons.webp', price: 6.99, category: 'balloons', quantity: 0},
    {id: 36, name: 'Pink Balloons Mix', description: 'Lorem ipsum', imagePath: '../../../../assets/img/shop/balloons/PinkBalloonsMix.jpeg', price: 5.99, category: 'balloons', quantity: 0},
    {id: 66, name: 'Silver Balloons Mix', description: 'Lorem ipsum', imagePath: '../../../../assets/img/shop/balloons/SilverBalloonsMix.jpg', price: 5.99, category: 'balloons', quantity: 0},
    {id: 37, name: 'Classic Sparklers', description: 'Lorem ips', imagePath: '../../../../assets/img/shop/accessories/classicSparklers.webp', price: 7.99, category: 'accessories', quantity: 0},
    {id: 38, name: 'Colorfull Streamers', description: 'Lorem ips', imagePath: '../../../../assets/img/shop/accessories/colorfullStreamers.jpeg', price: 7.99, category: 'accessories', quantity: 0},
    {id: 39, name: 'Gold Candles', description: 'Lorem ips', imagePath: '../../../../assets/img/shop/accessories/goldCandles.webp', price: 6.99, category: 'accessories', quantity: 0},
    {id: 40, name: 'Numbers Candles', description: 'Lorem ips', imagePath: '../../../../assets/img/shop/accessories/numbersCandles.jpeg', price: 8.99, category: 'accessories', quantity: 0},
    {id: 41, name: 'Silver Streamers', description: 'Lorem ips', imagePath: '../../../../assets/img/shop/accessories/silverStreamers.avif', price: 5.99, category: 'accessories', quantity: 0},
    {id: 42, name: 'Silver Candles', description: 'Lorem ips', imagePath: '../../../../assets/img/shop/accessories/silverCandles.webp', price: 5.99, category: 'accessories', quantity: 0},
    {id: 43, name: 'Star Sparklers', description: 'Lorem ips', imagePath: '../../../../assets/img/shop/accessories/StarSparklers.webp', price: 6.99, category: 'accessories', quantity: 0},
    {id: 44, name: 'Clasic Lemonade', description: 'Lorem ipsum', imagePath: '../../../../assets/img/shop/drinks/lemonLemonade.jpeg', price: 5.99, category: 'drinks', quantity: 0},
    {id: 45, name: 'Mint Water With Cucumber', description: 'Lorem ipsum', imagePath: '../../../../assets/img/shop/drinks/MintWaterWithCucumber.jpeg', price: 4.99, category: 'drinks', quantity: 0},
    {id: 46, name: 'Orange Water', description: 'Lorem ipsum', imagePath: '../../../../assets/img/shop/drinks/orangeWater.webp', price: 4.99, category: 'drinks', quantity: 0},
    {id: 47, name: 'Pomegranate Mint Water', description: 'Lorem ipsum', imagePath: '../../../../assets/img/shop/drinks/PomegranateMintWater.jpeg', price: 5.99, category: 'drinks', quantity: 0},
    {id: 48, name: 'Watermelon Lemonade', description: 'Lorem ipsum', imagePath: '../../../../assets/img/shop/drinks/WatermelonLemonade.avif', price: 5.99, category: 'drinks', quantity: 0},
];

