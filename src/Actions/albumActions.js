export const fetchAlbumsPending = () => {
  return {
    type: 'FETCH_ALBUMS_PENDING'
  };
};

export const fetchAlbumsSuccess = (albums) => {
  return {
    type: 'FETCH_ALBUMS_SUCCESS',
    albums
  };
};

export const fetchSelectedAlbumSuccess = (selected) => {
  return {
    type: 'FETCH_ALBUMS_SELECTED_SUCCESS',
    selected
  };
};

export const fetchAlbumsError = () => {
  return {
    type: 'FETCH_ALBUMS_ERROR'
  };
};
export const fetchSelectedAlbum = ({access_token, id}) => {
  return dispatch => {
    const request = new Request(`https://api.spotify.com/v1/albums/${id}`, {
      headers: new Headers({
        'Authorization': 'Bearer ' + access_token
      })
    });

    dispatch(fetchAlbumsPending());
    fetch(request).then(res => {
      return res.json();
    }).then(res => {
      dispatch(fetchSelectedAlbumSuccess(res));
      
    }).catch(err => {
      dispatch(fetchAlbumsError(err));
    });
  };
};

export const fetchAlbums = (accessToken) => {
  return dispatch => {
    const request = new Request(`https://api.spotify.com/v1/me/albums`, {
      headers: new Headers({
        'Authorization': 'Bearer ' + accessToken
      })
    });

    dispatch(fetchAlbumsPending());

    fetch(request).then(res => {
      return res.json();
    }).then(res => {
      dispatch(fetchAlbumsSuccess(res.items));
    }).catch(err => {
      dispatch(fetchAlbumsError(err));
    });
  };
};

export const searchSongsPending = () => {
  return {
    type: 'SEARCH_SONGS_PENDING'
  };
};



export const searchSongsSuccess = (albumSearch) => {
  return {
    type: 'SEARCH_SONGS_SUCCESS',
    albumSearch
  };
};

export const searchSongsError = () => {
  return {
    type: 'SEARCH_SONGS_ERROR'
  };
};

export const searchAllAlbums = (searchTerm, accessToken) => {
  // if(!searchTerm){
  //   return
  // }
  return dispatch => {
    const request = new Request(`https://api.spotify.com/v1/search?q=${searchTerm}&type=album&limit=30`, {
      headers: new Headers({
        'Authorization': 'Bearer ' + accessToken,
        'Accept': 'application/json'
      })
    });

    dispatch(searchSongsPending());

    fetch(request).then(res => {
      if(res.statusText === "Unauthorized") {
        window.location.href = './';
      }
      return res.json();
    }).then(res => {
      res.items = res?.albums?.items?.map(item => {
        return {
          albumSearch: item.albums
        };
      });
      dispatch(searchSongsSuccess(res.albums));
    }).catch(err => {
      dispatch(fetchSongsError(err));
    });
  };
};