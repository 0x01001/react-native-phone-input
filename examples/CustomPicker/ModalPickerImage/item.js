import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

export default class Item extends PureComponent {
  static propTypes = {
    data: PropTypes.object,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    data: {},
    onPress: () => {},
  };

  render() {
    const { data, onPress } = this.props;
    return (
      <TouchableOpacity key={data.key} onPress={() => onPress()}>
        <View style={[styles.optionStyle, this.props.optionStyle]}>
          <View style={styles.optionView1}>
            <Image source={data.image} resizeMode="stretch" style={styles.optionImage} />
          </View>
          <View style={styles.optionView2}>
            <Text style={[styles.optionLabelStyle, this.props.optionTextStyle]}>{data.label}</Text>
          </View>
          <View style={styles.optionView3}>
            <Text style={[styles.optionDialCodeStyle, this.props.optionTextStyle]}>{data.dialCode}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
