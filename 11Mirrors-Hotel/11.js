var heading = ["Courtyard Standard Room","Incognito Superior Room","Desire Deluxe Room"];
var para = ["A cozy well-designed room that takes you away from the urban hustle and provides you with the comfort and peace for a relaxing stay.","Created for those who prefer privacy, want to relax away from the urban hustle and enjoy a peaceful stay.","A place where you can follow your passion, relax in a spa-inspired bathroom and enjoy the sweetest dreams you ever had in the most comfortable king-sized bed."];
var image=["03.jpg","02.jpg","04.jpg"]
//array
var i = 0;

var headingElement = document.getElementById('box-h');
var paraElement = document.getElementById('box-p');
var imageElement=document.getElementById('gall');
//heading description
//heading img

function rightClick() {
    i = (i+1)%3;
    headingElement.innerHTML = heading[i];
    paraElement.innerHTML = para[i];
    imageElement.innerHTML=  '<img src="'+ image[i] +'">';
    document.getElementById('box-h').style.transition= ".5s";
    //headingdesc
    //img url
}
function backClick(){
    i=(3-i)%3
    headingElement.innerHTML = heading[i];
    paraElement.innerHTML = para[i];
    imageElement.innerHTML=  '<img src="'+ image[i] +'">';
    document.getElementById('box-h').style.transition= ".5s";
}
