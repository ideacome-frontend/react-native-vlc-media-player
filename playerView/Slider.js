/**
 * Created by yuanzhou.xu on 2018/5/16.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from 'react-native-slider';
import PropTypes from 'prop-types';
import TimeLimt from './TimeLimit';

export default class Slider extends Component {
  static defaultProps = {
    titleGolive: 'Go live',
    showLeftButton: true,
    showMiddleButton: true,
    showRightButton: true
  }

  render() {
    let {
      onValueChange,
      onSlidingComplete,
      currentTime,
      totalTime,
      sliderColor
    } = this.props;
    return (
      <View style={styles.progress}>
        {totalTime > 0 && (
          <Slider
            minimumTrackTintColor={sliderColor || "#30a935"}
            thumbStyle={styles.thumb}
            style={{ width: '100%' }}
            value={currentTime}
            maximumValue={totalTime}
            step={1}
            onValueChange={value => {
              onValueChange && onValueChange(value);
            }}
            onSlidingComplete={value => {
              onSlidingComplete && onSlidingComplete(value);
            }}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  progress: {
    flex: 1,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumb: {
    width: 6,
    height: 18,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
});
