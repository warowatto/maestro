import id3 from 'id3js'

export default {
    getInfo (path) {
        return new Promise((resolve, reject) => {
            // id3({ file: path, type: id3.OPEN_LOCAL }, (err, tags) => {
            id3(path, (err, tags) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({
                        artist: tags.artist,
                        album: tags.album,
                        title: tags.title,
                        year: tags.year,
                        image: tags.v2.image
                    });
                }
            })
        })
    }
}