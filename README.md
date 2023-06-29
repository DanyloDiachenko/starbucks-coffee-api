# Starbucks coffee api

Created for: https://github.com/DanyloDiachenko/starbucks-coffee
Created using MVC architecture

### Stack:
- Node JS (ver. 16.6.0)
- Express (ver. 4.18.2)
- Cors (ver. 2.8.5)
- Mongoose (ver. 7.1.1)
- Nodemon (ver. 2.0.22)

### fil .env:
- DB_URL=mongodb+srv://...
- PORT=9002

### Docs:
1.  "/coffees": 
200: 
`{
    "success": true,
    "data": [
		{
            "_id": "645e7c5ecdaba2272b6f9204",
            "title": "Pistachio Creme Frappuccino",
            "description": "Sweet pistachio flavor blended with milk and ice, then finished with whipped cream and a salted brown-buttery topping: an icy-smooth, creamy treat to keep you refreshed in the new year.",
            "imgSrc": "https://i.imgur.com/3sYxghL.png",
            "rating": 5,
            "totalFat19g": "29",
            "saturatedFat3g": "65",
            "transFat05g": "82",
            "details": [
                {
                    "_id": "649d6c353a1997620c567549",
                    "size": "short",
                    "price": 3.75,
                    "volume": 240,
                    "calories": 240,
                    "sugar": "42"
                },
                {
                    "_id": "649d6c353a1997620c56754a",
                    "size": "tall",
                    "price": 4.25,
                    "volume": 350,
                    "calories": 310,
                    "sugar": "30"
                },
                {
                    "_id": "649d6c353a1997620c56754b",
                    "size": "grande",
                    "price": 5,
                    "volume": 470,
                    "calories": 420,
                    "sugar": "42"
                },
                {
                    "_id": "649d6c353a1997620c56754c",
                    "size": "venti",
                    "price": 6,
                    "volume": 590,
                    "calories": 535,
                    "sugar": "42"
                }
            ],
            "createdAt": "2023-02-19T00:00:00.000Z"
        },
	]
}`

2. "/coffees/:id"
`{
    "success": true,
    "data": {
        "_id": "645e7c5ecdaba2272b6f9204",
        "title": "Pistachio Creme Frappuccino",
        "description": "Sweet pistachio flavor blended with milk and ice, then finished with whipped cream and a salted brown-buttery topping: an icy-smooth, creamy treat to keep you refreshed in the new year.",
        "imgSrc": "https://i.imgur.com/3sYxghL.png",
        "rating": 5,
        "totalFat19g": "29",
        "saturatedFat3g": "65",
        "transFat05g": "82",
        "details": [
            {
                "_id": "649d6d1c3a1997620c56757c",
                "size": "short",
                "price": 3.75,
                "volume": 240,
                "calories": 240,
                "sugar": "42"
            },
            {
                "_id": "649d6d1c3a1997620c56757d",
                "size": "tall",
                "price": 4.25,
                "volume": 350,
                "calories": 310,
                "sugar": "30"
            },
            {
                "_id": "649d6d1c3a1997620c56757e",
                "size": "grande",
                "price": 5,
                "volume": 470,
                "calories": 420,
                "sugar": "42"
            },
            {
                "_id": "649d6d1c3a1997620c56757f",
                "size": "venti",
                "price": 6,
                "volume": 590,
                "calories": 535,
                "sugar": "42"
            }
        ],
        "createdAt": "2023-02-19T00:00:00.000Z"
    }
}`
