const filterbuttons = document.querySelectorAll(".filter_buttons button");
const filterablecards = document.querySelectorAll(".filterable_cards .card");


console.log(filterbuttons, filterablecards);

// Define the filtercards function
const filtercards = e => {
    document.querySelector(".on").classList.remove("on");
    e.target.classList.add("on")
    console.log(e.target);

    filterablecards.forEach(card =>{
        card.classList.add("hide")

        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide")
        }
    })
};

filterbuttons.forEach(button => button.addEventListener("click", filtercards));

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
    
    
    // toggle menu/navbar script
    $('.menu-btn').click(function(){    
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

