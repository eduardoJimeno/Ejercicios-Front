interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2005
    }
}

const song = 'New Song';
/* const {
    song:anotherSong, 
    songDuration:duration,
    details: {author}
} = audioPlayer; */
const { song:anotherSong, songDuration:duration, details } = audioPlayer;
const { author } = details;

/* console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
console.log('Author: ', author); */

const [ , , thrunks ='Not found']: string[] = ['Goku', 'Vegeta'];
//const thrunks = dbz[3] || 'No hay personaje';

console.error('Personaje 3: ', thrunks);


export{};