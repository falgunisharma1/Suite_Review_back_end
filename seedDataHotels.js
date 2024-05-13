const seedDataHotels = 
[
    {
        name: 'Grand Hotel',
        state: 'California',
        city: 'Los Angeles',
        address: '123 Main Street',
        description: 'A luxurious hotel with stunning views.',
        images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/456053458.jpg?k=9cc970e644fc5c565463305628ac9f5e09a44fee5a57b27174631b06a519677c&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/456053481.jpg?k=9f15273dff85e45a26d9f40e2412f763d97143c745f6a473944fdce2672fad3c&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/456053576.jpg?k=cdc68f2702b73972f534fb5c957c78f9f4de32e655efe6e5d10bfe4fa5ea9b2c&o=&hp=1'
            ],
        hotel_Id: 0
    },
    {
        name: 'Ocean View Resort',
        state: 'California',
        city: 'Santa Monica',
        address: '456 Ocean Avenue',
        description: 'Relax and unwind with breathtaking ocean views.',
        images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/62753251.jpg?k=cb3d19b88d0029f51619fa6e484daedf4369a613add46ab220e6a969837c52e3&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/480324639.jpg?k=b898f333b082cf16a7ea3a5f9183417dff0979144032846e45275f47b77ce1a3&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/56473939.jpg?k=10e1977148cd9bd4cce40f4a53d25218a460b1cd9181db17750c2fec371d7515&o=&hp=1'
            ],
        hotel_Id: 1
    },
    {
        name: 'Mountain Lodge',
        state: 'Colorado',
        city: 'Aspen',
        address: '789 Mountain Road',
        description: 'Escape to the serene mountainside retreat.',
        images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/448684715.jpg?k=5efae2a82087e3cef6f3765b81778acc5793f8e8061e22b366afd097232fdc39&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/513836247.jpg?k=98c7dbf80f0d19745633e5876f8548b8683a329165863e2aa2cb8061a1e5f1ce&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/532136030.jpg?k=0dd7b8e0c94e280b5c970ed3eaf075f7b2ccd56bcdd76d95225ba6b40e01ad3a&o=&hp=1'
            ],
        hotel_Id: 2
    },
    {
        name: 'Lakeside Inn',
        state: 'Michigan',
        city: 'Traverse City',
        address: '101 Lakeview Drive',
        description: 'Experience the charm of lakeside living.',
        images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/213358946.jpg?k=7543bf1034889280244d69369b16f0fe62d6d9875152f559d8be742d3f0ed395&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/448214513.jpg?k=602176a9c7331318212310a04eb9a2fba72376d4553cc78797bdf2bfbc0b2332&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/214068911.jpg?k=2c940ac12d952e887497467c7fd41930f3ec222b08fceeb7931b54fc8f3d37f6&o=&hp=1'
            ],
        hotel_Id: 3
    },
    {
        name: 'Sunset Resort',
        state: 'Florida',
        city: 'Miami',
        address: '321 Sunset Boulevard',
        description: 'Enjoy breathtaking sunsets and luxury amenities.',
        images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/461646108.jpg?k=ece6e986f24dfac9f5004faa2c48aa91296c29071e113fe53f6b4a6a1161ccef&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/430815537.jpg?k=f32222067df55a7850c9aad006295392e2e7745861f3d07887cbaefa087e278a&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/546697290.jpg?k=a05a512dfe0eddd58f8859070a70a6aecbf01c6d35f823cfb6b2cb32e48764ab&o=&hp=1'
            ],
        hotel_Id: 4
    },
    {
        name: 'Ski Chalet',
        state: 'Colorado',
        city: 'Breckenridge',
        address: '555 Ski Slope Way',
        description: 'Cozy up by the fireplace after a day on the slopes.',
        images: ['https://example.com/image11.jpg', 'https://example.com/image12.jpg'],
        hotel_Id: 5
    },
    {
        name: 'Beachfront Paradise',
        state: 'Hawaii',
        city: 'Honolulu',
        address: '777 Beachfront Avenue',
        description: 'Experience paradise on the shores of Waikiki.',
        images: ['https://example.com/image13.jpg', 'https://example.com/image14.jpg'],
        hotel_Id: 6
    },
    {
        name: 'City Center Hotel',
        state: 'New York',
        city: 'New York City',
        address: '888 Broadway',
        description: 'Stay in the heart of the city that never sleeps.',
        images: ['https://example.com/image15.jpg', 'https://example.com/image16.jpg'],
        hotel_Id: 7
    },
    {
        name: 'Riverside Retreat',
        state: 'Oregon',
        city: 'Portland',
        address: '999 Riverside Drive',
        description: 'Relax by the tranquil riverbank surrounded by nature.',
        images: ['https://example.com/image17.jpg', 'https://example.com/image18.jpg'],
        hotel_Id: 8
    },
    {
        name: 'Desert Oasis Resort',
        state: 'Arizona',
        city: 'Scottsdale',
        address: '123 Desert Road',
        description: 'Escape to the luxurious desert oasis and spa.',
        images: ['https://example.com/image19.jpg', 'https://example.com/image20.jpg'],
        hotel_Id: 9
    }
];