function gumtreeFixImages(){
  var filmStrip = document.getElementById('vip-tabs-images');
  if (!filmStrip) {
    return false;
  }
  
  var list = filmStrip.getElementsByTagName('ul')[0];
  if (!list){
    return false;
  }
  
  filmStrip.style.width = '100%';
  list.style.width = '100%';
}

gumtreeFixImages();