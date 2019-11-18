window.addEventListener("load", initEvents);
var audio;

function initEvents() {
    audio = document.querySelector("#audio");
    showAllSongs();
}

function showAllSongs() {
    var ul = document.querySelector("#songsList");
    songsList.forEach(function(obj) {
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.src = obj.song_thumb;
        img.className = "w-100";
        var span = document.createElement("span");
        span.innerHTML = obj.song_name;
        var btn = document.createElement("button");
        btn.innerHTML = "Add to playlist";
        btn.className = "btn btn-primary w-100";
        var playBtn = document.createElement("button");
        playBtn.className = "playBtn";
        playBtn.title = obj.song_id;
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(btn);
        li.appendChild(playBtn);
        ul.appendChild(li);
        playBtn.addEventListener("click", playSong);
        btn.addEventListener("click", addToPlayList);
    })
}

function playSong() {
    var song_id = event.srcElement.title;
    for (var i = 0; i < songsList.length; i++) {
        if (songsList[i].song_id == song_id) {
            var song_src = songsList[i].song_url;
        }
    }
    audio.src = song_src;
    audio.play();
}

function addToPlayList() {
    var songid = event.srcElement.parentElement.children[3].title;
    // console.log(songid);
    for (var i = 0; i < songsList.length; i++) {
        if (songsList[i].song_id == songid) {

            object.add(songsList[i].song_id, songsList[i].song_name,
                songsList[i].song_url, songsList[i].song_thumb)
            break
        }
    }
    showPlayList();
}

function deleteFromPlayList() {
    var songid = event.srcElement.parentElement.children[3].title;
    // console.log(songid);
    for (var i = 0; i < songsList.length; i++) {
        if (songsList[i].song_id == songid) {
            object.deleteSong(songsList[i].song_id);
            break
        }
    }
    showPlayList();
}

function showPlayList() {
    var ul = document.querySelector("#playList");
    ul.innerHTML = "";
    object.playList.forEach(function(obj) {
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.src = obj.img;
        img.className = "w-100";
        var span = document.createElement("span");
        span.innerHTML = obj.name;
        var btn = document.createElement("button");
        btn.innerHTML = "Delete";
        btn.className = "btn btn-primary w-75";
        var playBtn = document.createElement("button");
        playBtn.className = "playBtn";
        playBtn.title = obj.id;
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(btn);
        li.appendChild(playBtn);
        ul.appendChild(li);
        playBtn.addEventListener("click", playSong);
        btn.addEventListener("click", deleteFromPlayList);
    })
}