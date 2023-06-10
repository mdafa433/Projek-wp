 // Target tanggal dan waktu untuk countdown
 var targetDate = new Date(2023, 6, 0, 0, 0, 0);

 // Memperbarui countdown setiap 1 detik
 var countdown = setInterval(function() {
     // Mengambil waktu sekarang
     var currentDate = new Date();
     var timeDifference = targetDate.getTime() - currentDate.getTime();

     // Menghitung hari, jam, menit, dan detik
     var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
     var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

     // Menampilkan countdown pada elemen dengan id "countdown"
     document.getElementById("countdown").innerHTML = days + " hari, " + hours + " jam, " + minutes + " menit, " + seconds + " detik";

     // Menghentikan countdown jika waktu target sudah tercapai
     if (timeDifference < 0) {
         clearInterval(countdown);
         document.getElementById("countdown").innerHTML = "Pernikahan Telah Di Mulai!";
     }
 }, 1000);

 var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;
    document.addEventListener("DOMContentLoaded", function() {
    var audio = new Audio('lagu.mp3');
    audio.play();
});

function playPause(){
	if(count == 0){
		count = 1;
        audio.play();
		playPauseBTN.innerHTML = "❚❚";
	}else{
		count = 0;
		audio.pause();
		playPauseBTN.innerHTML = "►";
	}

}

function stop(){
	playPause()
	audio.pause();
	audio.currentTime = 0;
	playPauseBTN.innerHTML = "Play ►";
}

 
 function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);