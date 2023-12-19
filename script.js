const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  
  e.target.matches('.next') && slider.append(items[0]);
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);

$(document).ready(function (e) {
  $('.item').on('click', function () {

    const currItem = $(this);
    console.log(this)
    
    const items = document.querySelectorAll('.item');
    if(items[2] == this){
      console.log("First photo");
      slider.append(items[0])
    }
    else if(items[3] == this){
      console.log("second photo")
      slider.append(items[0])
      slider.append(items[1])
    }
    else if(items[4] == this){
      console.log("second photo")
      slider.append(items[0])
      slider.append(items[1])
      slider.append(items[2])

    }
    else if(items[5] == this){
      console.log("second photo")
      slider.append(items[0])
      slider.append(items[1])
      slider.append(items[2])
      slider.append(items [3])
    }
  });
});
