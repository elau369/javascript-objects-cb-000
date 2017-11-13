var playlist = {Sinatra: "My Way"}


function removeFromPlaylist(playlist, artistName)
  {
    delete playlist.artistName;
    return playlist;
  }
