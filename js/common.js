
let indicateImg = document.getElementsByClassName('cut-indicate');
let mainImg = document.getElementById('mainImg');

let imgArray = [];
for(let i=0; i < indicateImg.length; i++){
    let realImg = indicateImg[i].children;
    imgArray.push(realImg);
}
console.log(imgArray);
for(let i=0; i < imgArray.length ; i++){
    let imagenode = imgArray[i];
    let item = imagenode[0]
    
    item.addEventListener('click',function(){
        let imgurl =  this.getAttribute('src');
        mainImg.setAttribute('src', imgurl);
    })
}


