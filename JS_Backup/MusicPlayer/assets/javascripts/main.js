window.addEventListener("load", initEvent);

var audio;
var current_song;
var songId;

function initEvent() {
    audio = document.querySelector("#audio");
    current_song = document.querySelector("#current_song");
    document.querySelector("#next_song").addEventListener("click", nextSong);
    document.querySelector("#savePlaylist").addEventListener("click", savePlayList);
    showAllSongs();
    loadPlayList();
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
        playlistBtn.addEventListener("click", addtoplaylist);
    })
}

function playSong() {
    songId = event.srcElement.title;
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

function nextSong() {
    for (var i = 0; i < featuredSongs.length; i++) {
        if (featuredSongs[i].song_id == songId) {
            var songUrl = featuredSongs[i + 1].song_path;
            var songName = featuredSongs[i + 1].song_name;
            songId = parseInt(songId) + 1;
            break
        }
    }
    audio.src = songUrl;
    current_song.innerHTML = songName;
    audio.play();
}

function prevSong() {

}

function addtoplaylist() {
    var s_id = event.srcElement.parentElement.children[0].title;
    for (var i = 0; i < featuredSongs.length; i++) {
        if (featuredSongs[i].song_id == s_id) {
            object.addToPlaylist(featuredSongs[i].song_id, featuredSongs[i].song_name,
                featuredSongs[i].song_poster, featuredSongs[i].song_path,
                featuredSongs[i].song_singer);
            break
        }
    }
    showPlaylist();
}

function deleteSong() {
    var s_id = event.srcElement.parentElement.children[3].title;
    object.deleteItem(s_id);
    showPlaylist();
    savePlayList();
}

function showPlaylist() {
    var ul = document.querySelector("#playList");
    ul.innerHTML = "";
    object.playList.forEach(function(song) {
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.src = song.img;
        var h5 = document.createElement("h5");
        h5.innerHTML = song.name;
        var span = document.createElement("span");
        span.innerHTML = song.singer;
        var playBtn = document.createElement("button");
        playBtn.className = "play";
        playBtn.title = song.id;
        var deleteBtn = document.createElement("button");
        deleteBtn.className = "delete";
        li.appendChild(img);
        li.appendChild(h5);
        li.appendChild(span);
        li.appendChild(playBtn);
        li.appendChild(deleteBtn);
        ul.appendChild(li);
        playBtn.addEventListener("click", playSong);
        deleteBtn.addEventListener("click", deleteSong);
    });
}

function savePlayList() {
    if (window.localStorage) {
        var data = JSON.stringify(object.playList);
        localStorage.setItem("data", data);
    }
}

function loadPlayList() {
    if (window.localStorage) {
        if (localStorage.data) {
            var data = localStorage.getItem("data");
            object.playList = JSON.parse(data);
        }
    }
    showPlaylist();
}