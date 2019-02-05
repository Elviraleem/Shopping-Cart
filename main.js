var app = new Vue({

    el: '#app',

    created: function () {
        this.getData();
        this.windowWidth = window.innerWidth;
    },

    data: {
        pages: 'home',
        search: "",
        agesValue: "",
        themeValue: "",
        book: "",
        cart: [],
        myData: [],
        myAgenda: [],
        counter: 0,
        emptyCart: "Your cart is empty",
        aboutImage: "amy-shamblen-671056-unsplash.jpg",
        windowWidth: 0

    },

    methods: {

        showPages: function (id, book) {
            this.pages = id;
            this.book = book;

        },

        getData: function () {
            this.myData = myJson.books;
            this.myAgenda = myJson.agenda;
        },

        addToCart: function (item) {
            var cartItem = {
                "title": item.title,
                "price": item.price,
                "smallImage": item.cover_image,
                "quantity": this.counter
            }
            
            if(!this.checkIfBookIsInside(item)){
                this.counter = 0;
                this.cart.push(cartItem);
            }else{
                var itemInCart = this.cart.find(book => book.title == item.title);
                console.log( typeof itemInCart.quantity )
                let qty = Number(itemInCart.quantity) 
                itemInCart.quantity = qty + Number(this.counter);

            
                this.counter = 0;
                console.log(this.cart);
            }  
            
        },
        checkIfBookIsInside(item){
            return this.cart.filter(e => e.title === item.title).length > 0;
                
        },
        removeItemFromCart(index){
           this.cart.splice(index, 1);
            if(this.cart.length == 0) {
                console.log( this.emptyCart);
            }
        },
        getSliderImages() {
            //TODO: Comprobar que las imágenes no se repiten.
            var sliderImage = Math.floor(Math.random() * this.imagesLinks.length);
            var selectedImage = this.imagesLinks[sliderImage];
            return "images/" + selectedImage;
        },
        getSliderImagesTablet() {
            var sliderImageTablet = Math.floor(Math.random() * this.imagesLinksTablet.length);
            var selectedImage = this.imagesLinksTablet[sliderImageTablet];
            return "images/" + selectedImage;
        },
        getSliderImagesMobile() {
            var sliderImageMobile = Math.floor(Math.random() * this.imagesLinksMobile.length);
            var selectedImage = this.imagesLinksMobile[sliderImageMobile];
            return "images/" + selectedImage;

        },

        window(){
            this.windowWidth = window.innerWidth;
        }
        
    },

    computed: {
        filteredBooks: function () {
            return this.myData         
                .filter((book) => {
                    return book
                        .title
                        .toLowerCase()
                        .includes(this.search);

                })
                .filter((book) => {
                    return book
                        .ages
                        .includes(this.agesValue);
                })
                .filter((book) => {
                    return book
                        .theme
                        .includes(this.themeValue);
                })
        },
        /* Get the slider images from myData. I will call this function on getSliderImages() inside methods
            to have an array of all the images and with the lenght calculate the random so I can select one 
            and show it on the slider. */
        
        imagesLinks(){
            return this.myData.map((e) =>{
                return e.slider_image_web
            });   
        },
        imagesLinksTablet(){
            return this.myData.map((e) =>{
                return e.slider_image_tablet
            });   
        },
        imagesLinksMobile(){
            return this.myData.map((e) =>{
                return e.slider_image_mobile
            });   
        },
        bookSelected: function () {
            return this.myData.find(book => book.title == this.book);

        },
        totalItems(){
            return Number(this.cart.map(book => book.quantity).reduce((a, b) => a + b, 0));
        },
        
        totalPrice(){
            return Number(this.cart.map(book => book.quantity * Number(book.price)).reduce((a,b) => a + b, 0 ).toFixed(2));
            
            
            // var itemPrices = this.cart.map(function (book) {
            //     return book.price * book.quantity;
            // })
            
            // console.log(itemPrices);
            
        },
    }
  
});
