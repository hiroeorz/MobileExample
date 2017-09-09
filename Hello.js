import React from 'react';
import { View, Button, Alert , TextInput} from 'react-native';
import { connect } from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './action.js';
import { StackNavigator } from 'react-navigation';

class Hello extends React.Component {
  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, width:300, borderColor: 'gray', borderWidth: 1}}
          onChangeText={ (text) => this.props.updateHello(text) }
          value={ this.props.hello } />

          <Button title={ this.props.hello }
                onPress={ this._handlePress.bind(this) } />
      </View>
    );
  }

  /* ボタンをクリックされたら現在の state.helloの内容をアラートする。 */
  _handlePress(e) {
    Alert.alert(this.props.hello);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
