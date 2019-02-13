const products = [
    {
        "title": "Giant White Wakerobin",
        "description": "Dactylina Lichen",
        "price": "306.05",
        "picture_link": "http://dummyimage.com/200x200.png/dddddd/000000",
        "quantity": 5
    },
    {
        "title": "Cedarglade St. Johnswort",
        "description": "Bladderwort",
        "price": "293.57",
        "picture_link": "http://dummyimage.com/200x200.png/cc0000/ffffff",
        "quantity": 25
    },
    {
        "title": "Wheeler's Peperomia",
        "description": "Dotted Orchid",
        "price": "962.60",
        "picture_link": "http://dummyimage.com/200x200.png/cc0000/ffffff",
        "quantity": 1
    },
    {
        "title": "Ravennagrass",
        "description": "Anise Burnet Saxifrage",
        "price": "393.86",
        "picture_link": "http://dummyimage.com/200x200.png/dddddd/000000",
        "quantity": 4
    },
    {
        "title": "Woodland Tuftedorchid",
        "description": "Horrid Herrickia",
        "price": "275.62",
        "picture_link": "http://dummyimage.com/200x200.png/ff4444/ffffff",
        "quantity": 10
    },
    {
        "title": "Sierra False Needlegrass",
        "description": "Meyen's Twigrush",
        "price": "660.60",
        "picture_link": "http://dummyimage.com/200x200.png/cc0000/ffffff",
        "quantity": 12
    },
    {
        "title": "Map Lichen",
        "description": "Santa Clemente Island Bedstraw",
        "price": "7.32",
        "picture_link": "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        "quantity": 24
    },
    {
        "title": "Common Woodrush",
        "description": "Prairie Cordgrass",
        "price": "459.29",
        "picture_link": "http://dummyimage.com/200x200.png/cc0000/ffffff",
        "quantity": 9
    },
    {
        "title": "European Lily Of The Valley",
        "description": "Sweet Michelia",
        "price": "700.11",
        "picture_link": "http://dummyimage.com/200x200.png/ff4444/ffffff",
        "quantity": 11
    },
    {
        "title": "Sabinal Prairie Clover",
        "description": "Parmotrema Lichen",
        "price": "113.67",
        "picture_link": "http://dummyimage.com/200x200.png/ff4444/ffffff",
        "quantity": 0
    },
    {
        "title": "Mexican Groundcherry",
        "description": "Leucobryum Moss",
        "price": "7.80",
        "picture_link": "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        "quantity": 3
    },
    {
        "title": "Clinton's Woodfern",
        "description": "Kauaikinana Woodfern",
        "price": "993.65",
        "picture_link": "http://dummyimage.com/200x200.png/dddddd/000000",
        "quantity": 4
    },
    {
        "title": "Caloncoba",
        "description": "Owl's-claws",
        "price": "313.52",
        "picture_link": "http://dummyimage.com/200x200.png/cc0000/ffffff",
        "quantity": 23
    },
    {
        "title": "Little Sand Verbena",
        "description": "Leucolepis Umbrella Moss",
        "price": "836.44",
        "picture_link": "http://dummyimage.com/200x200.png/dddddd/000000",
        "quantity": 8
    },
    {
        "title": "Spinyfruit Buttercup",
        "description": "Nuttall's Goosefoot",
        "price": "524.05",
        "picture_link": "http://dummyimage.com/200x200.png/dddddd/000000",
        "quantity": 3
    },
    {
        "title": "Glochidion",
        "description": "Squarestem",
        "price": "774.45",
        "picture_link": "http://dummyimage.com/200x200.png/dddddd/000000",
        "quantity": 10
    },
    {
        "title": "Candleholder Liveforever",
        "description": "Walker Pass Milkvetch",
        "price": "384.85",
        "picture_link": "http://dummyimage.com/200x200.png/cc0000/ffffff",
        "quantity": 5
    },
    {
        "title": "Thelidium Lichen",
        "description": "Bluntlobe Cyanea",
        "price": "722.84",
        "picture_link": "http://dummyimage.com/200x200.png/dddddd/000000",
        "quantity": 9
    },
    {
        "title": "Jack In The Pulpit",
        "description": "Big Sandbur",
        "price": "836.61",
        "picture_link": "http://dummyimage.com/200x200.png/dddddd/000000",
        "quantity": 16
    },
    {
        "title": "Guadeloupe Cucumber",
        "description": "Yellowshrub",
        "price": "497.34",
        "picture_link": "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        "quantity": 6
    },
    {
        "title": "Tufted Loosestrife",
        "description": "Rough Strongbark",
        "price": "359.98",
        "picture_link": "http://dummyimage.com/200x200.png/ff4444/ffffff",
        "quantity": 23
    },
    {
        "title": "Viscid Tansyaster",
        "description": "Mexican Umbrella Fern",
        "price": "208.82",
        "picture_link": "http://dummyimage.com/200x200.png/dddddd/000000",
        "quantity": 12
    },
    {
        "title": "Carolina Fanwort",
        "description": "Mallow Ninebark",
        "price": "252.02",
        "picture_link": "http://dummyimage.com/200x200.png/ff4444/ffffff",
        "quantity": 1
    },
    {
        "title": "Wyeth's Lupine",
        "description": "Common Balm",
        "price": "984.63",
        "picture_link": "http://dummyimage.com/200x200.png/dddddd/000000",
        "quantity": 24
    },
    {
        "title": "Desert Pale Gilia",
        "description": "Euryale",
        "price": "151.07",
        "picture_link": "http://dummyimage.com/200x200.png/dddddd/000000",
        "quantity": 25
    },
    {
        "title": "Chisos Mountain Century Plant",
        "description": "Redtop Panicgrass",
        "price": "828.76",
        "picture_link": "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        "quantity": 10
    },
    {
        "title": "Rainbow Iris",
        "description": "Papillose Tortula Moss",
        "price": "848.06",
        "picture_link": "http://dummyimage.com/200x200.png/cc0000/ffffff",
        "quantity": 16
    },
    {
        "title": "Flat-top Goldentop",
        "description": "African Copaiba Balsam Tree",
        "price": "334.49",
        "picture_link": "http://dummyimage.com/200x200.png/ff4444/ffffff",
        "quantity": 6
    },
    {
        "title": "Dot Lichen",
        "description": "Muttongrass",
        "price": "361.86",
        "picture_link": "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        "quantity": 0
    },
    {
        "title": "Southwestern White Pine Dwarf Mistletoe",
        "description": "Rinodina Lichen",
        "price": "228.35",
        "picture_link": "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        "quantity": 5
    }
];

module.exports = products;