'use strict';

import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const PADDING = 8;
const BORDER_RADIUS = 5;
const FONT_SIZE = 16;
const HIGHLIGHT_COLOR = 'rgba(0,118,255,0.9)';
const OPTION_CONTAINER_HEIGHT = 400;

export default StyleSheet.create({
  overlayStyle: {
    width: width,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },

  optionContainer: {
    // borderRadius: BORDER_RADIUS,
    width: width * 0.8,
    height: OPTION_CONTAINER_HEIGHT,
    backgroundColor: 'rgba(255,255,255,0.8)',
    left: width * 0.1,
    top: (height - OPTION_CONTAINER_HEIGHT) / 2,
  },

  cancelContainer: {
    left: width * 0.1,
    top: (height - OPTION_CONTAINER_HEIGHT) / 2 + 10,
  },

  selectStyle: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    // borderRadius: BORDER_RADIUS,
  },

  selectTextStyle: {
    textAlign: 'center',
    color: '#333',
    fontSize: FONT_SIZE,
  },

  cancelStyle: {
    // borderRadius: BORDER_RADIUS,
    width: width * 0.8,
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: PADDING,
  },

  cancelTextStyle: {
    textAlign: 'center',
    color: '#333',
    fontSize: 18,
  },

  optionStyle: {
    padding: PADDING,
    borderWidth: 1,
    borderColor: '#000',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  optionList: { paddingHorizontal: 10 },

  optionView1: { flex: 0.15 },
  optionView2: { flex: 0.7, alignItems: 'center' },
  optionView3: { flex: 0.15, alignItems: 'flex-end' },
  optionImage: { width: 30, height: 16 },

  optionTextStyle: {
    textAlign: 'center',
    fontSize: FONT_SIZE,
    color: HIGHLIGHT_COLOR,
  },
  optionLabelStyle: {
    textAlign: 'center',
    color: '#434343',
    fontSize: FONT_SIZE,
  },
  optionDialCodeStyle: {
    textAlign: 'center',
    color: 'grey',
    fontSize: 14,
  },

  sectionStyle: {
    padding: PADDING * 2,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  sectionTextStyle: {
    textAlign: 'center',
    fontSize: FONT_SIZE,
  },
});
