var ani = document.querySelectorAll('[data-anime]');
var animate = 'animate';

function Move(){
    var windowTop = window.pageYOffset +400;
    ani.forEach(function(element){
        if((windowTop)>element.offsetTop)
        {
            element.classList.add(animate)
        }
    })
    
}

window.addEventListener('mousemove', function(){ 
    Move();
})

