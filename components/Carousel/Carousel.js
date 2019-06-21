class Carousel {
    constructor(carouselElement){
        this.carouselElement = carouselElement;
        this.leftButton = document.querySelector('.left-button');
        console.log(this.leftButton)
        this.rightButton = document.querySelector('.right-button');
        console.log(this.rightButton)
        this.images = document.querySelectorAll('.carousel > img');
        this.currentIndex = 1;
        this.image = document.querySelectorAll('.carousel > img')[0];
        this.leftButton.addEventListener('click', () => this.showSlide(this.currentIndex + 1));
        this.rightButton.addEventListener('click', () => this.showSlide(this.currentIndex - 1));
    }
    showSlide(slide_index){
        if(slide_index > 0 && slide_index < 5) {
            this.images.forEach(image => image.display = 'none')
            console.log(this.images)
            this.images[slide_index].display = 'block';
            this.currentIndex = slide_index;
        }
    }
}

let carousel = document.querySelector('.carousel');

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
