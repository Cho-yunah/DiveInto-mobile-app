import { Dimensions } from 'react-native';

const useAreaCalculate = () => {
  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;

  return { WIDTH, HEIGHT };
};

export default useAreaCalculate;
