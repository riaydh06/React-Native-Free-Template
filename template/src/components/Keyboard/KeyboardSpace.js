import React, {Component} from 'react';
import {Animated, Keyboard, StyleSheet} from 'react-native';

class KeyboardSpace extends Component {
  constructor(props) {
    super(props);

    this.keyboardHeight = new Animated.Value(0);
  }

  keyboardWillShow = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: event.endCoordinates.height,
      }),
    ]).start();
  };

  keyboardWillHide = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: 0,
      }),
    ]).start();
  };

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  componentDidMount() {
    this.keyboardWillShowSub = Keyboard.addListener(
      'keyboardWillShow',
      this.keyboardWillShow,
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      'keyboardWillHide',
      this.keyboardWillHide,
    );
  }

  render() {
    const {children} = this.props;
    return (
      <Animated.View style={{bottom: this.keyboardHeight, ...styles.wrapper}}>
        {children}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
  },
});

export default KeyboardSpace;
