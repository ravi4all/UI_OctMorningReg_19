// Function as a constructor
// function Song(id, name, url, img) {
//     this.id = id;
//     this.name = name;
//     this.url = url;
//     this.img = img;
// }

class Song {
    constructor(id, name, url, img) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.img = img;
        this.toDelete = false;
    }
}

var object = {
    "playList": [],

    "add": function(id, name, url, img) {
        var obj = new Song(id, name, url, img);
        this.playList.push(obj);
        console.log(this.playList);
    },

    "deleteSong": function(id) {
        var currentSong = this.playList.filter(function(obj) {
            return obj.id == id;
        });
        currentSong[0].toDelete = true;
        this.playList = this.playList.filter(function(obj) {
            return obj.toDelete == false;
        })
    }
}