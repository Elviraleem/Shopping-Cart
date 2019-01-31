var app = new Vue({
    
    el: '#app',
    
    data:{
        pages: 'home',
        message: 'hello Elvira',
//        image_1: 'images/PapaYyoAveces_home.png',
//        image_2: 'images/Cuentos-para-niños-no-tan-buenos_home.png',
//        image_3: 'images/Si-quieres-ver-una-ballena_home.png',
        images: {
           item1:  {
                item1: 'images/PapaYyoAveces_home.png' 
            },
            item2: {
                item2: 'images/Cuentos-para-niños-no-tan-buenos_home.png'
            },
           item3: {
                item3:'images/Si-quieres-ver-una-ballena_home.png'   
            }
              
                  }
    
        
},