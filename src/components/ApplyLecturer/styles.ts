import { StyleSheet } from 'react-native';
import * as Color from '@/src/config/colors';

const { borderBottomWidth, borderBottomColor } = Color.underLine;

export const commonInput = StyleSheet.create({
  container: {
    marginTop: 60,
    borderBottomColor: borderBottomColor,
    borderBottomWidth: borderBottomWidth,
  },
  topBlank: {
    marginTop: 24,
  },
  inputText: {
    fontSize: 16,
    color: Color.BlackText,
    paddingBottom: 9,
  },
});

export const UploadCertificate = StyleSheet.create({
  container: {
    height: 76,
    marginTop: 60,
    padding: 8,
    borderColor: borderBottomColor,
    borderWidth: 1,
    borderRadius: 8,
  },
  uploadButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#D8D8D8',
    fontSize: 14,
    paddingLeft: 12,
  },
  icon: {
    width: 60,
    height: 60,
    backgroundColor: '#CCD7DF',
    borderRadius: 8,
    color: '#F3F5F7',
    textAlign: 'center',
    lineHeight: 55,
  },
});
