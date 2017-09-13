import store from './store.js';

export function mapStateToProps(state) {
  return state;
}

export function mapDispatchToProps(dispatch) {
  return {
    /* テキストエリアの内容を state.hello に保存する */
    updateHello: (text) => {
      dispatch( {type: 'HELLO_WORLD', hello: text} );
    },

    /* movieListオブジェクトを state.movieListに保存する */
    updateMoviewList: (movieList) => {
      dispatch( {type: 'MOVIE_LIST', movieList: movieList} )
    }
  }
}
