export function mapStateToProps(state) {
  return state;
}

export function mapDispatchToProps(dispatch) {
  return {
    /* ツイートを投稿する */
    updateHello: (text) => {
      dispatch( {type: 'HELLO_WORLD', hello: text} );
    }
  }
}
