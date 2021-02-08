const products = [
    {
        id: 0,
        name: "Super Shoe",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: 100,
        quantity: 0,
        total: 0,
        inCart: false,
        url: "https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_960_720.jpg"
    }, 
    {
        id:1,
        name: "Mega shoe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis. Ac odio tempor orci dapibus ultrices. Sed viverra ipsum nunc aliquet bibendum enim facilisis. Fringilla ut morbi tincidunt augue interdum velit. ",
        price: 80,
        quantity: 0,
        total: 0,
        inCart: false,
        url: "https://cdn.pixabay.com/photo/2015/06/02/23/15/winter-boots-795706_1280.jpg"
    },
    {
        id:2,
        name: "Cool Shoe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis. Ac odio tempor orci dapibus ultrices. Sed viverra ipsum nunc aliquet bibendum enim facilisis. Fringilla ut morbi tincidunt augue interdum velit. ",
        price: 60,
        quantity: 0,
        total: 0,
        inCart: false,
        url: "https://cdn.pixabay.com/photo/2017/05/09/10/40/shoes-2297864_1280.jpg"
    },
    {
        id:3,
        name: "Other Shoe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis. Ac odio tempor orci dapibus ultrices. Sed viverra ipsum nunc aliquet bibendum enim facilisis. Fringilla ut morbi tincidunt augue interdum velit. Ac felis donec et odio. Vitae tortor condimentum lacinia quis. Egestas quis ipsum suspendisse ultrices gravida. Eu sem integer vitae justo eget.",
        price: 90,
        quantity: 0,
        total: 0,
        inCart: false,
        url: "https://cdn.pixabay.com/photo/2017/03/01/05/43/pink-shoes-2107618_960_720.jpg"
    },
    {
        id:4,
        name: "The Titus",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis. Ac odio tempor orci dapibus ultrices. Sed viverra ipsum nunc aliquet bibendum enim facilisis. Fringilla ut morbi tincidunt augue interdum velit. Ac felis donec et odio. Vitae tortor condimentum lacinia quis. Egestas quis ipsum suspendisse ultrices gravida. Eu sem integer vitae justo eget.",
        price: 120,
        quantity: 0,
        total: 0,
        inCart: false,
        url: "https://cdn.pixabay.com/photo/2015/01/03/03/51/sandals-587185_960_720.jpg"
    },
    {
        id:5,
        name: "Kimmies",
        description: "Ac odio tempor orci dapibus ultrices. Sed viverra ipsum nunc aliquet bibendum enim facilisis. Fringilla ut morbi tincidunt augue interdum velit. Ac felis donec et odio. Vitae tortor condimentum lacinia quis. Egestas quis ipsum suspendisse ultrices gravida. Eu sem integer vitae justo eget. Vivamus arcu felis bibendum ut. Pellentesque elit ullamcorper dignissim cras. ",
        price: 200,
        quantity: 0,
        total: 0,
        inCart: false,
        url: "https://cdn.pixabay.com/photo/2015/05/31/10/54/shoes-791044_960_720.jpg"
    },
    {
        id:6,
        name: "Brooklyn 99",
        description: " Vivamus arcu felis bibendum ut. Pellentesque elit ullamcorper dignissim cras. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Scelerisque in dictum non consectetur. Feugiat in ante metus dictum. Nulla aliquet enim tortor at auctor. Morbi tincidunt ornare massa eget. Suspendisse interdum consectetur libero id.",
        price: 70,
        quantity: 0,
        total: 0,
        inCart: false,
        url: "https://cdn.pixabay.com/photo/2015/01/03/17/58/shoes-587648_960_720.jpg"
    },
    {
        id:7,
        name: "Shoe shoe shoe",
        description: "Egestas quis ipsum suspendisse ultrices gravida. Eu sem integer vitae justo eget. Vivamus arcu felis bibendum ut. Pellentesque elit ullamcorper dignissim cras.",
        price: 60,
        quantity: 0,
        total: 0,
        inCart: false,
        url: "https://cdn.pixabay.com/photo/2015/07/27/20/15/hipster-863411_960_720.jpg"
    },
    {
        id:8,
        name: "Flat Boring",
        description: "Ac odio tempor orci dapibus ultrices. Sed viverra ipsum nunc aliquet bibendum enim facilisis. Fringilla ut morbi tincidunt augue interdum velit. Ac felis donec et odio. Vitae tortor condimentum lacinia quis. Egestas quis ipsum suspendisse ultrices gravida. Eu sem integer vitae justo eget. Vivamus arcu felis bibendum ut. Pellentesque elit ullamcorper dignissim cras. ",
        price: 40,
        quantity: 0,
        total: 0,
        inCart: false,
        url: "https://cdn.pixabay.com/photo/2015/01/16/15/01/fashion-601565_960_720.jpg"
    },
    {
        id:9,
        name: "Shoe Shoe",
        description: "Ac felis donec et odio. Vitae tortor condimentum lacinia quis. Egestas quis ipsum suspendisse ultrices gravida. Eu sem integer vitae justo eget.",
        price: 120,
        quantity: 0,
        total: 0,
        inCart: false,
        url: "https://cdn.pixabay.com/photo/2018/08/04/00/18/hiking-shoes-3583017_960_720.jpg"
    },
    {
        id:10,
        name: "The Micheal Jackson",
        description: "Vivamus arcu felis bibendum ut. Pellentesque elit ullamcorper dignissim cras. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Scelerisque in dictum non consectetur. Feugiat in ante metus dictum.",
        price: 80,
        quantity: 0,
        total: 0,
        inCart: false,
        url: "https://cdn.pixabay.com/photo/2018/12/10/21/34/winter-boots-3867776_960_720.jpg"
    },
    {
        id:11,
        name: "Top Shoe",
        description: "Vivamus arcu felis bibendum ut. Pellentesque elit ullamcorper dignissim cras. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Scelerisque in dictum non consectetur. Feugiat in ante metus dictum. Nulla aliquet enim tortor at auctor. Morbi tincidunt ornare massa eget. Suspendisse interdum consectetur libero id.",
        price: 70,
        quantity: 0,
        total: 0,
        inCart: false,
        url: "https://cdn.pixabay.com/photo/2017/09/02/20/32/monkey-2708458_960_720.jpg"
    },
    {
        id:12,
        name: "Extreme Shoe",
        description: "Tincidunt arcu non sodales neque sodales ut etiam sit. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Purus gravida quis blandit turpis cursus in hac habitasse platea. Duis at tellus at urna.",
        price: 60,
        quantity: 0,
        total: 0,
        inCart: false,
        url: "https://cdn.pixabay.com/photo/2016/08/25/23/33/women-1620928_960_720.jpg"
    },
    {
        id:13,
        name: "Kimmies",
        description: "Ac odio tempor orci dapibus ultrices. Sed viverra ipsum nunc aliquet bibendum enim facilisis. Fringilla ut morbi tincidunt augue interdum velit. Ac felis donec et odio. Vitae tortor condimentum lacinia quis. Egestas quis ipsum suspendisse ultrices gravida. Eu sem integer vitae justo eget. Vivamus arcu felis bibendum ut. Pellentesque elit ullamcorper dignissim cras. ",
        price: 200,
        quantity: 0,
        total: 0,
        inCart: false,
        url: "https://cdn.pixabay.com/photo/2017/07/02/21/34/sport-shoe-2465915_1280.jpg"
    },
    {
        id:14,
        name: "Kimmies",
        description: "Ac odio tempor orci dapibus ultrices. Sed viverra ipsum nunc aliquet bibendum enim facilisis. Fringilla ut morbi tincidunt augue interdum velit. Ac felis donec et odio. Vitae tortor condimentum lacinia quis. Egestas quis ipsum suspendisse ultrices gravida. Eu sem integer vitae justo eget. Vivamus arcu felis bibendum ut. Pellentesque elit ullamcorper dignissim cras. ",
        price: 200,
        quantity: 0,
        total: 0,
        inCart: false,
        url: "https://cdn.pixabay.com/photo/2015/05/31/10/54/shoes-791044_960_720.jpg"
    },
]

export default products;