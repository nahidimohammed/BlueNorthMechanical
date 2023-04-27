
copy = (id) => {
    const num = document.getElementById(id).select();
    document.execCommand("copy");
}
navbar = ()  => {
    if(document.getElementById("ckeckf").checked == false){
        document.getElementById("ckeckf").checked = true;
        document.getElementById("navhead").style.display="block";
    }
    else if (document.getElementById("ckeckf").checked == true)
    {
        document.getElementById("ckeckf").checked = false;
        document.getElementById("navhead").style.display="none";
    }
}

alerter = () => {
    document.getElementById("anno").style.display="none";
}
window.addEventListener('scroll', () => {
    var cards = document.querySelectorAll('content > div > div');
    for(var i = 0 ; i < cards.length ; i++){
        var windowheight = window.innerHeight ;
        var receltop = cards[i].getBoundingClientRect().top ;
        var revealpoint = 10;
        if (receltop < windowheight - revealpoint ){
            cards[i].classList.add('activecard');
        }
        //else if (receltop+550 > windowheight - revealpoint ) {
        else {
            cards[i].classList.remove('activecard');
        }
    }
});