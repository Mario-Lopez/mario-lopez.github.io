window.addEventListener('scroll',function()
{
    let limite = this.document.getElementById('aboutMe');
    let menu = this.document.getElementById('menu');
    // let menuoptions = document.getElementsByClassName('menu-nav-item');
    
    let posicionobj1 = limite.getBoundingClientRect().top;
    // console.log(posicionobj1);

    let inicio = window.innerHeight/2;
    if(posicionobj1 < inicio){
        menu.style.background='#000';
        menu.style.height='65px';
        // for (let i = 0; i < menuoptions.length; i++) {
        //     menuoptions[i].style.color="#fff";
            
        // }
    }else
    {
        menu.style.background='linear-gradient(to top, #03b2b800, #000000)';
        menu.style.height='100px';
        // for (let i = 0; i < menuoptions.length; i++) {
        //     menuoptions[i].style.color="#000";
            
        // }
    }
})

function abrirMenu(){
    var contentmenuMovil = document.getElementById("contentmenuMovil");
    var menuMovil = document.getElementById("menuMovil");
    contentmenuMovil.style.visibility="visible";
    menuMovil.style.width="100%";
    menuMovil.style.opacity="1";
}
function cerrarMenu(){
    var contentmenuMovil = document.getElementById("contentmenuMovil");
    var menuMovil = document.getElementById("menuMovil");
    contentmenuMovil.style.visibility="hidden";
    menuMovil.style.width="0%";
    menuMovil.style.opacity="0";
}