const initialState = {
  hello: "Hello World"
}

export default function reducer(state = initialState, action) {
  switch(action.type) {

    /* ツイートを投稿する */
    case 'HELLO_WORLD':
      return {
        ...state,
        hello: action.hello
      };

    default:
      return state
  }
}
