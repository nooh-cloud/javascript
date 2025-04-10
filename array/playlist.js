const playlist = ["song1","song2","song3","song4","song5"];
playlist.push("song6");
playlist.pop();
let size = playlist.length;
playlist.shift();
let paly2 = playlist.toString();

const playlist2 = ["songx","songy","songz"];
const combined = playlist.concat(playlist2);
const nest = [["song1"],["song2"],["song3"]];
const flatt = nest.flat();

playlist.splice(2, 2, "newSong1", "newSong2");

playlist.sort();

playlist.push(playlist.slice(0, 2));

console.log(playlist);
console.log(paly2);
console.log(size);
console.log(combined);
console.log(flatt);