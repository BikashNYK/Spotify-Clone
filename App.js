// variable
let songIndex = 0;
let audioElement = new Audio('https://djmaza.live/files/download/id/6448');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName')
// songlist array
let songs = [
    { songName: "Killer from the North-Side", filepath: 'Music/1.mp3', coverPath: 'Music/1.webp' },
    { songName: "Da Da Da -Tanir Tyomcha", filepath: 'Music/2.mp3', coverPath: 'Music/2.jpg' },
    { songName: "Astronaut-in-The-Ocean-song", filepath: 'Music/3.mp3', coverPath: 'Music/3.jpg' },
    { songName: "HBIC-Raja Kumari", filepath: 'Music/4.mp3', coverPath: 'Music/4.webp' },
    { songName: "Secrets-The PropheC", filepath: 'Music/5.mp3', coverPath: 'Music/5.webp' },
    { songName: "Lifetime - Swedish House Mafia", filepath: 'Music/6.mp3', coverPath: 'Music/6.webp' },
    { songName: "Pro-Neffex", filepath: 'Music/7.mp3', coverPath: 'Music/7.webp' },
    { songName: "Carry_On_Wayward_Son", filepath: 'Music/8.mp3', coverPath: 'Music/8.jpg' },
    { songName: "Unison-Aperture-NCS-Release", filepath: 'Music/9.mp3', coverPath: 'Music/9.jpg' },
    { songName: "TGood-Times-NCS-Release", filepath: 'Music/10.mp3', coverPath: 'Music/10.jpg' },
];

songItems.forEach((e, i) => {
    // console.log(e);
    e.getElementsByTagName('img')[0].src = songs[i].coverPath;
    e.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});



// audioElement.play()

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        masterSongName.innerText = songs[songIndex].songName
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

// time Update listen

audioElement.addEventListener('timeupdate', () => {
    // console.log('update');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((e) => {
            e.classList.remove('fa-circle-pause');
            e.classList.add('fa-circle-play');
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity = 1;
    });
};


Array.from(document.getElementsByClassName('songItemPlay')).forEach((e) => {
    e.addEventListener('click', (e, i) => {
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `Music/${songIndex + 1}.mp3`;
        audioElement.play();
        masterSongName.innerText = songs[songIndex].songName
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        

    });
});


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0
    }else{
        songIndex +=1
    }
    audioElement.src = `Music/${songIndex + 1}.mp3`;
    audioElement.play();
    masterSongName.innerText = songs[songIndex].songName
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }else{
        songIndex -=1
    }
    audioElement.src = `Music/${songIndex + 1}.mp3`;
    audioElement.play();
    masterSongName.innerText = songs[songIndex].songName
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})
