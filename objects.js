var playlist = {Sinatra: "My Way"}


function removeFromPlaylist(playlist, artistName)
  {
    var newPlaylist = delete playlist.artistName;
    return newPlaylist;
  }
