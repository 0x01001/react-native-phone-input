import React from 'react';
import { View, Modal, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
import PropTypes from 'prop-types';

import styles from './style';
import Item from './item';
import BaseComponent from './BaseComponent';

let componentIndex = 0;

const propTypes = {
  data: PropTypes.array,
  onChange: PropTypes.func,
  initValue: PropTypes.string,
  // style: View.propTypes.style,
  // selectStyle: View.propTypes.style,
  // optionStyle: View.propTypes.style,
  // optionTextStyle: Text.propTypes.style,
  // sectionStyle: View.propTypes.style,
  // sectionTextStyle: Text.propTypes.style,
  // cancelStyle: View.propTypes.style,
  // cancelTextStyle: Text.propTypes.style,
  // overlayStyle: View.propTypes.style,
  cancelText: PropTypes.string,
};

const defaultProps = {
  data: [],
  onChange: () => {},
  initValue: 'Select me!',
  // style: {},
  // selectStyle: {},
  // optionStyle: {},
  // optionTextStyle: {},
  // sectionStyle: {},
  // sectionTextStyle: {},
  // cancelStyle: {},
  // cancelTextStyle: {},
  // overlayStyle: {},
  cancelText: 'cancel',
};

let { height, width } = Dimensions.get('window');

export default class ModalPicker extends BaseComponent {
  constructor(props) {
    super(props);
    //this._bind('onChange', 'open', 'close', 'renderChildren');
    this.state = {
      animationType: 'slide',
      modalVisible: false,
      transparent: false,
      selected: 'please select',
      // data: [],
      dataProvider: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(props.data),
    };
    this.layoutProvider = new LayoutProvider(
      i => {
        return this.state.dataProvider.getDataForIndex(i).line;
      },
      (type, dim) => {
        switch (type) {
          case 1:
            dim.width = width;
            dim.height = 37;
            break;
          case 2:
            dim.width = width;
            dim.height = 55;
            break;
          case 3:
            dim.width = width;
            dim.height = 74;
            break;
          default:
            dim.width = width;
            dim.height = 37;
        }
      },
    );
  }

  componentDidMount() {
    // this.setState({ selected: this.props.initValue });
    // this.setState({ cancelText: this.props.cancelText });
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   this.setState({ data: nextProps.data });
  // }

  onChange = data => {
    this.props.onChange(data);
    this.setState({ selected: data.label });
    this.close();
  };

  close = () => {
    this.setState({
      modalVisible: false,
    });
  };

  open = () => {
    this.setState({
      modalVisible: true,
    });
  };

  // renderSection(section) {
  //   return (
  //     <View key={section.key} style={[styles.sectionStyle, this.props.sectionStyle]}>
  //       <Text style={[styles.sectionTextStyle, this.props.sectionTextStyle]}>{section.label}</Text>
  //     </View>
  //   );
  // }

  // renderOption = ({ item }) => {
  //   return <Item data={item} onPress={() => this.onChange(item)} />;
  // };

  renderRow = (type, data) => {
    return <Item data={data} onPress={() => this.onChange(data)} />;
  };

  renderOptionList = () => {
    // const options = this.state.data.map(item => {
    //   if (item.section) {
    //     console.log('section.....');
    //     return this.renderSection(item);
    //   }

    //   return this.renderOption(item);
    // });
    const { data } = this.props;
    //console.log('data: ' + JSON.stringify(data));
    if (data) {
      return (
        <View style={[styles.overlayStyle, this.props.overlayStyle]} key={`modalPicker${componentIndex++}`}>
          <View style={styles.optionContainer}>
            <RecyclerListView
              // style={styles.optionList}
              rowRenderer={this.renderRow}
              dataProvider={this.state.dataProvider}
              layoutProvider={this.layoutProvider}
              onEndReachedThreshold={500}
              contentContainerStyle={{ borderWidth: 1, borderColor: '#ff0000' }}
            />
            {/* <FlatList style={styles.optionList} data={data} renderItem={this.renderOption} keyExtractor={(x, i) => x.key} /> */}
            {/* <ScrollView keyboardShouldPersistTaps="always">
              <View style={{ paddingHorizontal: 10 }}>{options}</View>
            </ScrollView> */}
          </View>
          <View style={styles.cancelContainer}>
            <TouchableOpacity onPress={this.close}>
              <View style={[styles.cancelStyle, this.props.cancelStyle]}>
                <Text style={[styles.cancelTextStyle, this.props.cancelTextStyle]}>{this.props.cancelText}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return null;
  };

  renderChildren = () => {
    if (this.props.children) {
      return this.props.children;
    }
  };

  render() {
    const dp = (
      <Modal
        transparent
        ref={ref => {
          this.modal = ref;
        }}
        visible={this.state.modalVisible}
        onRequestClose={this.close}
        animationType={this.state.animationType}>
        {this.renderOptionList()}
      </Modal>
    );

    return (
      <View style={this.props.style}>
        {dp}

        <TouchableOpacity onPress={this.open}>{this.renderChildren()}</TouchableOpacity>
      </View>
    );
  }
}

ModalPicker.propTypes = propTypes;
ModalPicker.defaultProps = defaultProps;
