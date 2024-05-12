export const carousalData =[
    {
        id: 1,
        imgUrl: require("../../assets/images/visa.png"),
        price: 2345,
        cardType: "VISA",
        cardNumber: "*****1234",
        backgroundColor: "#0f60d6",
        textColor: "white",
    },
    {
        id: 2,
        imgUrl: require("../../assets/images/mastercard.png"),
        price: 4654,
        cardType: "MasterCard",
        cardNumber: "*****5678",
        backgroundColor: "purple",
        textColor: "white",
    },
    {
        id: 3,
        imgUrl: require("../../assets/images/stripe.png"),
        price: 3300,
        cardType: "Stripe",
        cardNumber: "*****9876",
        backgroundColor: "#55a630",
        textColor: "white",
    },
    {
        id: 4,
        imgUrl: require("../../assets/images/discover.png"),
        price: 1700,
        cardType: "Discover",
        cardNumber: "*****5432",
        backgroundColor: "grey",
        textColor: "#ea468e",
    },
    {
        id: 1,
        imgUrl: require("../../assets/images/paypal.png"),
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
        imageSource: require("")
    },
    {
        id: 2,
        name: "Amazon",
        type: "Subscription",
        amount: "$12.99",
        date: "15 December",
        imageSource: require("")
    },
    {
        id: 3,
        name: "Spotify",
        type: "Subscription",
        amount: "$9.99",
        date: "18 December",
        imageSource: require("")
    },
    {
        id: 4,
        name: "YouTube",
        type: "Subscription",
        amount: "$11.99",
        date: "20 December",
        imageSource: require("")
    },
    {
        id: 5,
        name: "PrimeVideos",
        type: "Subscription",
        amount: "$25.99",
        date: "25 December",
        imageSource: require("")
    },
];

carousalData.forEach((item) => {
    item.price = item.price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
});