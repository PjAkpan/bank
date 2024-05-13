export const carousalData =[
    {
        id: 1,
        imgUrl: require("../../../assets/images/purepng.com-visa-logologobrand-logoiconslogos-251519938794uqvcz.png"),
        price: 2345,
        cardType: "VISA",
        cardNumber: "*****1234",
        backgroundColor: "#0f60d6",
        textColor: "white",
    },
    {
        id: 2,
        imgUrl: require("../../../assets/images/mastercard-free-download-free-png.png"),
        price: 4654,
        cardType: "MasterCard",
        cardNumber: "*****5678",
        backgroundColor: "purple",
        textColor: "white",
    },
    {
        id: 3,
        imgUrl: require("../../../assets/images/Stripe-Logo.png"),
        price: 3300,
        cardType: "Stripe",
        cardNumber: "*****9876",
        backgroundColor: "#55a630",
        textColor: "white",
    },
    {
        id: 4,
        imgUrl: require("../../../assets/images/616057d976000b00045a7da3-3405883920.png"),
        price: 1700,
        cardType: "Discover",
        cardNumber: "*****5432",
        backgroundColor: "grey",
        textColor: "#ea468e",
    },
    {
        id: 5,
        imgUrl: require("../../../assets/images/2-2-paypal-logo-transparent-png.png"),
        price: 5500,
        cardType: "Paypal",
        cardNumber: "*****2324",
        backgroundColor: "blue",
        textColor: "white",
    },
];


export const transactionData = [
    {
        id: 1,
        name: "Netflix",
        type: "Subscription",
        amount: "$99.00",
        date: "12 December",
        imageSource: require("../../../assets/images/580b57fcd9996e24bc43c529-4102540763.png")
    },
    {
        id: 2,
        name: "Amazon",
        type: "Subscription",
        amount: "$12.99",
        date: "15 December",
        imageSource: require("../../../assets/images/amazon-logo-s3f.png")
    },
    {
        id: 3,
        name: "Spotify",
        type: "Subscription",
        amount: "$9.99",
        date: "18 December",
        imageSource: require("../../../assets/images/6294f82f4609037792ef3714-2560064432.png")
    },
    {
        id: 4,
        name: "YouTube",
        type: "Subscription",
        amount: "$11.99",
        date: "20 December",
        imageSource: require("../../../assets/images/youtube-logo-hd-8.png")
    },
    {
        id: 5,
        name: "Prime",
        type: "Subscription",
        amount: "$25.99",
        date: "25 December",
        imageSource: require("../../../assets/images/prime-video-logo-0-2048x2048.png")
    },
];

carousalData.forEach((item) => {
    item.price = item.price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
});