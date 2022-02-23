const defaultState = {
  fetchSongsPending: true,
  songPlaying: false,
  timeElapsed: 0,
  songId: 0,
  viewType:'songs',
  songPaused: true
};

export const songsReducer = (state = defaultState, action) => {

  switch (action.type) {


  case "FETCH_SONGS_PENDING":
    return {
      ...state,
      fetchSongsPending: true
    };

  case "FETCH_SONGS_SUCCESS":
    return {
      ...state,
      songs: action.songs,
      fetchSongsError: false,
      fetchSongsPending: false,
      viewType: 'songs'
    };

  case "FETCH_SONGS_ERROR":
    return {
      ...state,
      fetchSongsError: true,
      fetchSongsPending: false
    };

  case "SEARCH_SONGS_PENDING":
    return {
      ...state,
      searchSongsPending: true
    };

  case "SEARCH_SONGS_SUCCESS":

    return {
      ...state,
      albumSearch: action.albumSearch,
      searchSongsError: false,
      searchSongsPending: false,
      viewType: 'search'
    };

  case "SEARCH_SONGS_ERROR":
    return {
      ...state,
      searchSongsError: true,
      searchSongsPending: false
    };

  
  default:
    return state;
  }

};

export default songsReducer;