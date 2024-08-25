const musicContainer = document.getElementById('music-container');

const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');

const prgress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');

const title = document.getElementById('title');
const cover = document.getElementById('cover');

const currTime = document.getElementById('#currTime');
const durTime = document.getElementById('#durTime');

// song 标题

const songs =['多远都要在一起','10年','泡沫'];

let songIndex = 0;
loadSong(songs[songIndex]);

function loadSong(song){
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `image/${song}.png`;

}

// play song

function playSong(){
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

// Pause song

function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
}


// // Previous song

function prevSong(){
    songIndex--;

    if(songIndex < 0){
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);
    playSong();
}

// next song 

function nextSong(){
    songIndex++;

    if(songIndex > songs.length - 1){
        songIndex = 0;
    }
    loadSong(songs[songIndex])
    playSong();
}

function updateProgress(e){
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`

}

function setProgress (e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}


// get duration && currentTime for Time of  songs
function  DurTime (e){
    const {duration, currentTime} = e.srcElement;
    let sec;
    let sec_d;

    let min = (currentTime=== null) ? 0 : Math.floor(currentTime / 60);
    min =min<10?'0'+min:min;

    function get_sec(x){
        if(Math.floor(x)>=60){
            for(var i =1; i<=60;i++){
                if(Math.floor(x)>=60*i && Math.floor(x)<60*(i+1)){
                    sec = Math.floor(x) - (60*i);
                    sec = sec<10?'0'+sec:sec;
                }
            }
        }else{
            sec = Math.floor(x);
            sec = sec<10?'0'+sec:sec;
        }
    }

    get_sec(currentTime,sec);

    // change currentTimeDom 

    currTime.innerHTML = min +':'+sec;

    // define minutes duration

    let min_d =(isNaN(duration)===true) ? 0 : Math.floor(duration / 60);

    min_d =min_d<10?'0'+min_d:min_d;

    function get_sec_d (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec_d = Math.floor(x) - (60*i);
					sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				}
			}
		}else{
		 	sec_d = (isNaN(duration) === true)? '0':
		 	Math.floor(x);
		 	sec_d = sec_d <10 ? '0'+sec_d:sec_d;
		 }
	} 
    
	// define seconds duration
	
	get_sec_d (duration);

	// change duration DOM
	durTime.innerHTML = min_d +':'+ sec_d;

};
// Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
  
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });
  
  // Change song
  prevBtn.addEventListener('click', prevSong);
  nextBtn.addEventListener('click', nextSong);
  
  // Time/song update
  audio.addEventListener('timeupdate', updateProgress);
  
  // Click on progress bar
  progressContainer.addEventListener('click', setProgress);
  
  // Song ends
  audio.addEventListener('ended', nextSong);
  
  // Time of song
  audio.addEventListener('timeupdate',DurTime);
  
