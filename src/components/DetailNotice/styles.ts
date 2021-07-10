import { StyleSheet } from 'react-native';
import * as Color from '@config/colors';

export const headerStyle = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#A9BBC9',
    padding: 20,
  },
  title: {
    color: Color.BasicText,
    fontWeight: '600',
  },
  date: {
    color: Color.DarkgrayText,
    fontSize: 12,
    paddingTop: 4,
  },
});

export const subContentsStyle = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: Color.underLine,
  },
  greeting: {
    paddingBottom: 25,
    lineHeight: 25,
  },
  title: {
    lineHeight: 25,
  },
});

export const editContentsStyle = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: Color.underLine,
  },
  contentsContainer: {
    paddingVertical: 16,
  },
  textHeigth: {
    lineHeight: 25,
  },
});

export const appreciationStyle = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  textLayout: {
    paddingBottom: 20,
  },
});
