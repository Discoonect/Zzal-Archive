import React from 'react';
import {StyleSheet, View} from 'react-native';
import styles from './styles';

export default props => {
  return <View style={[styles.defaultDivider, props.style]}></View>;
};
