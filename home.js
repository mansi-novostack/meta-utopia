var document;

let arrowTop = document.getElementById('top-arrow');
let banner = document.getElementById('banner');
let playBtn = document.getElementsById('play-btn');
let imageContainer = document.getElementsById('image-container');
let videoContainer = document.getElementsById('video-container');




arrowTop.addEventListener("click", function(){
  alert('hi');
    banner.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  });


playBtn.addEventListener("click", function () {
  alert('hi');
  imageContainer.classList.add('hide');
  videoContainer.classList.remove('hide');
 
});

    