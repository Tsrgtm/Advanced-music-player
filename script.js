const audio = new Audio();
const musicImage = document.getElementById('music-image');
const musicTitle = document.getElementById('music-title');
const musicDescription = document.getElementById('music-description');
const playPauseBtn = document.getElementById('play-pause-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const loopBtn = document.getElementById('loop-btn');
const timeSeek = document.getElementById('time-seek');
const musicListContainer = document.getElementById('music-list-container');
const musicList = document.getElementById('music-list');

// Your array of songs or playlist
// Music Data
const musicListData = [
    { title: "Aaye Ho Meri Zindagi Mein", description: "By Alka Yagnik", image: "images/music-playing.gif", src: "music/Aaye Ho Meri Zindagi Mein _ ALKA YAGNIK _ Raja Hindustani _ 1996.mp3" },
    { title: "Abhi Na Jaao Chhod Kar", description: "By Dev Anand _ Sadhana _ Mohd Rafi _ Asha Bhosle", image: "images/music-playing.gif", src: "music/Abhi Na Jaao Chhod Kar _ Dev Anand _ Sadhana _ Mohd Rafi _ Asha Bhosle _ Hum Dono (1961).mp3" },
    { title: "Ajib Dastan Hai Yeh", description: "By Lata Mangeshkar", image: "images/music-playing.gif", src: "music/Ajib Dastan Hai Yeh _ Lyrical Video _ Dil Apna Aur Preet Parai _ Instagram Hits _ Lata Mangeshkar.mp3" },
    { title: "Asal Mein", description: "By Darshan Raval", image: "images/music-playing.gif", src: "music/Asal Mein - Darshan Raval _ Official Video _ Indie Music Label - Latest Hit song 2020.mp3" },
    { title: "Aye Mere Humsafar", description: "By Udit Narayan, Alka Yagnik", image: "images/music-playing.gif", src: "music/Aye Mere Humsafar Full Video Song  Qayamat Se Qayamat Tak  Aamir Khan, Juhi Chawla.mp3" },
    { title: "Bade Acche Lagte Hai", description: "By Amit Kumar", image: "images/music-playing.gif", src: "music/Bade Acche Lagte Hai - Balika Badhu (1976) - Amit Kumar.mp3" },
    { title: "Choti Si Aasha", description: "By Roja _A.R. Rahman _Madhoo _Minmini", image: "images/music-playing.gif", src: "music/Chhoti Si Aasha - Roja _A.R. Rahman _Madhoo _Minmini _Official Video _Dil Hai Chotta Sa.mp3" },
    { title: "Hawa Hawai", description: "By Kavita Krishnamurthy", image: "images/music-playing.gif", src: "music/'Hawa Hawai_ Mr. India - Full VIDEO Song _ Sridevi _ Kavita Krishnamurthy.mp3" },
    { title: "Iktara", description: "By Javed Akhtar", image: "images/music-playing.gif", src: "music/Iktara Best Audio Song - Wake Up Sid_Ranbir Kapoor_Konkona Sen_Kavita Seth_Javed Akhtar.mp3" },
    { title: "Kabhi Kabhie Mere Dil Mein", description: "By Lata Mangeshkar", image: "images/music-playing.gif", src: "music/Kabhi Kabhie Mere Dil Mein _ Full Song _ Rakhee, Amitabh Bachchan, Shashi Kapoor _ Lata Mangeshkar.mp3" },
    { title: "Luka Chuppi_ Duniyaa", description: "By Akhil _ Dhvani B _ Abhijit V Kunaal V", image: "images/music-playing.gif", src: "music/Luka Chuppi_ Duniyaa Video Song _ Kartik Aaryan Kriti Sanon _ Akhil _ Dhvani B _ Abhijit V Kunaal V.mp3" },
    { title: "Nazm Nazm", description: "By Arko", image: "images/music-playing.gif", src: "music/Nazm Nazm - Lyrical _ Bareilly Ki Barfi _ Kriti Sanon, Ayushmann Khurrana & Rajkummar Rao _ Arko.mp3" },
    { title: "Night Changes", description: "By One Direction", image: "images/music-playing.gif", src: "music/One Direction - Night Changes.mp3" },
    { title: "Dandelions", description: "By Ruth B.", image: "images/music-playing.gif", src: "music/Ruth B. - Dandelions (Audio).mp3" },
    { title: "Saiyyan", description: "By Kailash Kher, Naresh Kamath, Paresh Kamath", image: "images/music-playing.gif", src: "music/Saiyyan (Lyrics) - Kailash Kher, Naresh Kamath, Paresh Kamath.mp3" },
    { title: "Shaam Hai Dhuan Dhuan", description: "By Tusar Gautam", image: "images/music-playing.gif", src: "music/Shaam Hai Dhuan Dhuan (HD) _ Ajay Devgn, Madhoo _ Diljale Song _ Poornima _ 90s Superhit Dance Song.mp3" },
    { title: "Until I Found You", description: "By Stephen Sanchez", image: "images/music-playing.gif", src: "music/Stephen Sanchez  Until I Found You Lyrics.mp3" },
    { title: "Sunana, Timi Khusi Ta Chhau Ni", description: "By Ujjwal Saagar", image: "images/music-playing.gif", src: "music/The Unloved । Parityakta । Sunana, Timi Khusi Ta Chhau Ni _ _ Ujjwal Saagar _ Official Song.mp3" },
    { title: "I Love You So", description: "By The Walters", image: "images/music-playing.gif", src: "music/The Walters -- I Love You So.mp3" },
    { title: "Udein Jab Jab Zulfen Teri", description: "By  Dilip Kumar, Vyjayantimala", image: "images/music-playing.gif", src: "music/Udein Jab Jab Zulfen Teri _ Video Song _ Naya Daur _ Dilip Kumar, Vyjayantimala _ NH Hindi Songs.mp3" },
    
    // Add more songs as needed
];


let currentSongIndex = 0;
let isShuffleOn = false;
let isLoopOn = false;

function updateMusicInfo() {
    const currentSong = musicListData[currentSongIndex];
    musicImage.src = currentSong.image;
    musicTitle.textContent = currentSong.title;
    musicDescription.textContent = currentSong.description;
    audio.src = currentSong.src;
}

function toggleShuffle() {
    isShuffleOn = !isShuffleOn;
    updateButtonState(shuffleBtn, isShuffleOn);
}

function toggleLoop() {
    isLoopOn = !isLoopOn;
    updateButtonState(loopBtn, isLoopOn);
}

function updateButtonIcons() {
    const isPlaying = !audio.paused;

    if (isPlaying) {
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
    updateButtonState(playPauseBtn, !audio.paused);
    updateButtonIcons(); // Call to update play/pause button icons
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + musicListData.length) % musicListData.length;
    updateMusicInfo();
    playPause();
    updateMusicList();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % musicListData.length;
    updateMusicInfo();
    playPause();
    updateMusicList();
}

function updateButtonState(button, isActive) {
    if (isActive) {
        button.classList.add('active');
    } else {
        button.classList.remove('active');
    }
}

function updateMusicList() {
    const musicListContainer = document.getElementById('music-list');
    musicListContainer.innerHTML = ''; // Clear existing list

    musicListData.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('music-list-item');
        listItem.textContent = `${index + 1}. ${song.title}`;

        if (index === currentSongIndex) {
            listItem.classList.add('current-music');
        }

        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            updateMusicInfo();
            playPause();
            scrollToCurrentSong();
            updateMusicList(); // Update list to indicate active music
        });

        musicListContainer.appendChild(listItem);
    });
}


function scrollToCurrentSong() {
    const currentSongItem = musicList.children[currentSongIndex];
    currentSongItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Event Listeners
audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    timeSeek.value = progress;
});

audio.addEventListener('loadedmetadata', () => {
    const minutes = Math.floor(audio.duration / 60);
    const seconds = Math.floor(audio.duration % 60);
    // Display total time (you need to add the logic to display this time)
});

// Seek functionality
timeSeek.addEventListener('input', () => {
    const seekTime = (timeSeek.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// Play the next song when the current song ends
audio.addEventListener('ended', () => {
    nextSong();
});

// Initializations
updateMusicInfo();
updateMusicList();