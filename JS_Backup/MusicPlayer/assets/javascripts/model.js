// Function as a constructor
// function Song(id, name, img, url, singer) {
//     this.id = id;
//     this.name = name;
//     this.img = img;
//     this.url = url;
//     this.singer = singer;
// }

class Song {
    constructor(id, name, img, url, singer) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.url = url;
        this.singer = singer;
        this.toDelete = false;
    }
}

var object = {
    "playList": [],
    "addToPlaylist": function(id, name, img, url, singer) {
        var song = new Song(id, name, img, url, singer);
        this.playList.push(song);
        console.log(this.playList);
    },

    "deleteItem": function(song_id) {
        var deleteSong = this.playList.filter(function(obj) {
            return obj.id == song_id;
        });
        console.log(deleteSong);
        deleteSong[0].toDelete = true;

        this.playList = this.playList.filter(function(obj) {
            return obj.toDelete == false;
        })
    }
}