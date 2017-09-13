const initialState = {
  hello: "Hello World",
  movieList: { title: "", description: "", movies: [] }
}

export default function reducer(state = initialState, action) {
  switch(action.type) {

    /* テキストエリアの内容を state.hello に保存する */
    case 'HELLO_WORLD':
      return {
        ...state,
        hello: action.hello
      };

    /* ムービー情報をJSONで取得したものを state.movieList に保存する */
    case 'MOVIE_LIST':
      return {
        ...state,
        movieList: action.movieList
      };

    default:
      return state
  }
}
