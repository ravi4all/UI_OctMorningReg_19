window.addEventListener("load", initEvent);

var audio;
var current_song;

function initEvent() {
    audio = document.querySelector("#audio");
    current_song = document.querySelector("#current_song");
    showAllSongs();
}

function showAllSongs() {
    var ul = document.querySelector("#songsList");
    featuredSongs.forEach(function(song) {
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.src = song.song_poster;
        // img.className = "w-100";
        var h5 = document.createElement("h5");
        h5.innerHTML = song.song_name;
        var span = document.createElement("span");
        span.innerHTML = song.song_singer;
        var playBtn = document.createElement("button");
        var playlistBtn = document.createElement("button");
        playBtn.className = "play";
        playBtn.title = song.song_id;
        playlistBtn.className = "playList";
        var overlay = document.createElement("div");
        overlay.appendChild(playBtn);
        overlay.appendChild(playlistBtn);
        overlay.className = "overlay";
        li.appendChild(img);
        li.appendChild(h5);
        li.appendChild(span);
        li.appendChild(overlay);
        ul.appendChild(li);
        playBtn.addEventListener("click", playSong);
    })
}

function playSong() {
    var songId = event.srcElement.title;
    for (var i = 0; i < featuredSongs.length; i++) {
        if (featuredSongs[i].song_id == songId) {
            var songUrl = featuredSongs[i].song_path;
            var songName = featuredSongs[i].song_name;
            break
        }
    }
    audio.src = songUrl;
    current_song.innerHTML = songName;
    audio.play();
}