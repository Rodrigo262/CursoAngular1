interface AudioPlayer{
    audioVolume: number,
    songDuration: number,
    song: string;
    details: Details
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Estopa",
        year: 1995
    }
}

const song = 'New song'
const {
    song:anotherSong, 
    songDuration:Duration,
    details
} = audioPlayer;

const {author:newAutor} = details;
// console.log('Song:', anotherSong);
// console.log('Autor:', newAutor);
// console.log('Duracion:', Duration);

const [, , p3]: string[]=[`Goku`,`Vegeta`,`Trunk`]
//const a = dbz[3] || 'Personaje no encontrado'
console.error('Personaje 3:', p3)

