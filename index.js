let icons = document.getElementsByClassName('heart-icon');
let hearCountElement = document.getElementById('heart-count');
let count= 0; 
for (let icon of icons){
    icon.addEventListener("click",function(){
        count++
        hearCountElement.innerText = count; 
    })

}






