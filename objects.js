var playlist = {"Michael Jackson": "Beat it"} 

function updatePlaylist(obj, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist] 
}