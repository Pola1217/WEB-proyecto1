import { defineStore } from "pinia";
import _, { map } from 'underscore';

export const useProductsStore = defineStore("products", {
    state: () => ({
        products: [],

        localStorageProducts: [],
        
    }),

    getters: {
        getProducts: (state) => [...state.products],
    },

    actions: {

        newProduct(product) {
            this.localStorageProducts.push(product);
            this.products.push(product);

            localStorage.setItem('products', JSON.stringify(this.localStorageProducts));
        },

        loadProducts() {
            this.products = [
                {
                    'name': "Can-Shaped Cup Set",
                    'category': "Accessories",
                    'description': "The best way to drink your cold brew? In a mason jar, of course. And through a straw. So if you love cold brew, and love drinking it in style, this jar is what you need.",
                    'price': '29',
                    'rating': 4,
                    'image': '/best1.png',
                    
                },
                {
                    'name': "White Milk Frother",
                    'category': "Accessories",
                    'description': "Take your beverage break to the next level with our NEW Chamberlain Coffee Electric Milk Frother. Get creative with some fancy latte art, or add some frothed milk onto your beverage and call it a day.",
                    'price': '19',
                    'rating': 4,
                    'image': '/best1.png',
                },
                {
                    'name': "Social Dog Blend - Coffee Bag",
                    'category': "Coffee",
                    'description': "Time for a treat! The kind of brew thats made for sharing. Full bodied, complex & smooth with notes of milk chocolate, roasted peanuts, brown sugar, & a graham cracker finish.",
                    'price': '16',
                    'rating': 5,
                    'image': '/best1.png',
                },
                {
                    'name': "Fluffy Lamb Vanilla Blend Coffee",
                    'category': "Coffee",
                    'description': "Your favorite coffee...but better. Our Vanilla-flavored coffee blend is the perfect cozy roast for an afternoon treat. Pure and delicious, this delightful medium roast brew highlights Madagascar vanilla and roasted nuts. ",
                    'price': '18',
                    'rating': 2,
                    'image': '/best1.png',
                },
                {
                    'name': "Early Bird Blend - Coffee Bag",
                    'category': "Coffee",
                    'description': "This ones for the early risers. For the get-up and goers. For the ones who get shit done.",
                    'price': '20',
                    'rating': 3,
                    'image': '/best1.png',
                },
                {
                    'name': "Variety Box Single Serve",
                    'category': "Single",
                    'description': "Try them all and find your fave. Get two single-serve Chamberlain Single.",
                    'price': '20',
                    'rating': 3,
                    'image': '/best1.png',
                },
                {
                    'name': "Wildcat Instant Sticks (10pc)",
                    'category': "Single",
                    'description': "These instant coffee sticks are perfect for on-the-go when you’re short on energy and time. Just add water for the best coffee for the road!",
                    'price': '20',
                    'rating': 4,
                    'image': '/best1.png',
                },
                {
                    'name': "Social Dog Single Serve",
                    'category': "Single",
                    'description': "Time for a treat! The kind of brew that’s made for sharing.",
                    'price': '16',
                    'rating': 3,
                    'image': '/best1.png',
                },
                {
                    'name': "Careless Cat Single Serve",
                    'category': "Single",
                    'description': "Time for a treat! The kind of brew that’s made for sharing.",
                    'price': '16',
                    'rating': 5,
                    'image': '/best1.png',
                },
                {
                    'name': "Early Bird Single Serve",
                    'category': "Single",
                    'description': "This one’s for the early risers. For the get-up and goers. For the ones who get shit done.",
                    'price': '16',
                    'rating': 5,
                    'image': '/best1.png',
                },
                {
                    'name': "Matcha Green Tea Powder",
                    'category': "Tea",
                    'description': "Our Organic Matcha Green Tea Powder is vegan, gluten-free, full of antioxidants, and just simply delicious.",
                    'price': '20',
                    'rating': 5,
                    'image': '/best1.png',
                    
                },
                {
                    'name': "Vanilla Flavored Matcha Tea Powder",
                    'category': "Tea",
                    'description': "You heard it here first: vanilla is the secret to less stress. Mixed with our best selling Matcha, you’ve got a perfect beverage. ",
                    'price': '20',
                    'rating': 4,
                    'image': '/best1.png',
                },
                {
                    'name': "Mango Flavored Matcha Tea Powder",
                    'category': "Tea",
                    'description': "Like a trip to the tropics, Mango Matcha is all natural, rich in benefits, and just plain delicious. ",
                    'price': '20',
                    'rating': 5,
                    'image': '/best1.png',
                },
                {
                    'name': "Matcha Variety Pack",
                    'category': "Kit",
                    'description': "Try them ALL! Your matcha routine just leveled up with all three of our best selling Matcha green tea powders",
                    'price': '40',
                    'rating': 2,
                    'image': '/best1.png',
                },
                {
                    'name': "Super Matcha Bundle",
                    'category': "Kit",
                    'description': "We have your matcha routine sorted.",
                    'price': '40',
                    'rating': 5,
                    'image': '/best1.png',
                },
                {
                    'name': "Fancy Mouse Espresso Blend - Coffee Bag",
                    'category': "Coffee",
                    'description': "Chamberlain Coffees espresso blend. Available in both classic ground and whole bean.",
                    'price': '15',
                    'rating': 4,
                    'image': '/best1.png',
                },
                {
                    'name': "Witty Fox Hazelnut Blend Coffee",
                    'category': "Coffee",
                    'description': "Life’s short. Why not sip great (flavored) coffee? Witty Fox is always down for mischief.",
                    'price': '20',
                    'rating': 2,
                    'image': '/best1.png',
                },
                {
                    'name': "Sleepy Sloth Decaf Blend - Coffee Bag",
                    'category': "Coffee",
                    'description': "Love coffee but also love sleeping? The Sleepy Sloth decaf blend is perfect for those that want coffee but don’t need that extra energy.",
                    'price': '16',
                    'rating': 3,
                    'image': '/best1.png',
                },
                {
                    'name': "Cold Brew Elephant - XL Cold Brew Bags",
                    'category': "Single",
                    'description': "This is for the BIG TIME cold brew lovers. Start your morning the right way in just three steps",
                    'price': '35',
                    'rating': 1,
                    'image': '/best1.png',
                },
                {
                    'name': "Double Walled Mug",
                    'category': "Accesories",
                    'description': "Introducing the Double Walled Mug, an oh-so-cute piece of glassware to elevate your drink-of-choice, hot or cold.",
                    'price': '25',
                    'rating': 5,
                    'image': '/best1.png',
                },  
    
              ];
           
            this.localStorageProducts = JSON.parse(localStorage.getItem('products'));
            this.products = this.products.concat([...this.localStorageProducts]);

        },
        
        getProductsById(id) {
            const filteredProducts = this.products.filter((product) => id.toLowerCase() === product.name.toLowerCase());
            return filteredProducts ? {...filteredProducts[0] } : null
        },

        sortProducts(order) {

            switch (order) {
                case "0":
                    this.products = _.sortBy(this.products, "name");
                    break;
                case "1":
                    this.products = _.sortBy(this.products, "name").reverse();
                    break;
                case "2":
                    this.products = _.sortBy(this.products, "price");
                    break;
                case "3":
                    this.products = _.sortBy(this.products, "price").reverse();
                    break;
                 case "4":
                    this.products = _.sortBy(this.products, "category");
                    break;

            }
            },
        

        filter (index, filterNumb) {

            if (filterNumb == 'type') {
               
                console.log(index);

                switch (index) {
  
                    case "0":
                        this.loadProducts();
                        this.products = this.products.filter((product) => product.category == "Coffee");
                        
                        break;
                    case "1":
                        this.loadProducts();
                        this.products = this.products.filter((product) => product.category == "Tea");
                        
                        break;
                    case "2":
                        this.loadProducts();
                        this.products = this.products.filter((product) => product.category == "Accessories");
                        
                        break;
                    case "3":
                        this.loadProducts();
                        this.products = this.products.filter((product) => product.category == "Kit");
                        
                        break;
                    case "4":
                        this.loadProducts();
                        this.products = this.products.filter((product) => product.category == "Single");
                        
                        break;
                    
                }
            };

            if (filterNumb == 'cost') {

                switch (index) {
                    case "0":
                        this.loadProducts();
                        this.products = this.products.filter((product) => product.price < 20);
                        break;
                    case "1":
                        this.loadProducts();
                        this.products = this.products.filter((product) =>  product.price < 30);
                        break;
                    case "2":
                        this.loadProducts();
                        this.products = this.products.filter((product) =>  product.price < 50);
                        break;
                    case "3":
                        this.loadProducts();
                        this.products = this.products.filter((product) =>  product.price > 50);
                        break;
                }
            };

            
        },
    }

});