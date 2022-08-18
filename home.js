let arrowTop = document.getElementById('top-arrow');
let banner = document.getElementById('banner');

arrowTop.addEventListener("click", function(){
  alert('hi');
  banner.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

    