const Fade_Left = document.querySelectorAll('.fade');
const Fade_Top = document.querySelectorAll('.fade-top');

let ScrollYElement = [190 , 210];

function FadeLeft() {
    // alert(window.scrollY)
    for (i = 0 ; i < Fade_Left.length ; i++) {
        if (window.scrollY > 195){
            // console.log('hi')
            Fade_Left[i].style.transform = 'translatex(0)' 
            Fade_Left[i].style.opacity = 1

        }
        if ( window.scrollY < 195){
            Fade_Left[i].style.transform = 'translatex(-1800px)'
            Fade_Left[i].style.opacity = 0
        }
        if (window.scrollY > 1440 ){
            Fade_Left[i].style.transform = 'translatex(-1800px)'
            Fade_Left[i].style.opacity = 0
        }
    }
}

function FadeTop() {
    // alert(window.scrollY)
    for (i = 0 ; i < Fade_Top.length ; i++) {
        if (window.scrollY > 1715){
            // console.log('hi')
            Fade_Top[i].style.transform = 'translateY(0)' 
            Fade_Top[i].style.opacity = 1

        }
        if ( window.scrollY < 1715){
            Fade_Top[i].style.transform = 'translateY(-50px)' 
            Fade_Top[i].style.opacity = 0
        }
        // if (window.scrollY > 1440 ){
        //     Fade_Top[i].style.transform = 'translateY(-50px)' 
        //     Fade_Top[i].style.opacity = 1
        // }
    }
}



window.addEventListener('scroll', FadeLeft)
window.addEventListener('scroll', FadeTop)