import { GestureResponderEvent } from 'react-native';

export type ProgressModalProps = {
  visible: boolean;
  onRequestClose?: () => void;
  preventParentEvent?: (event: GestureResponderEvent) => void;
  children: any;
};

export type S3BucketInfo = {
  bucket: string;
  key: string;
  size: number;
};
