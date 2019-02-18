import { StyleSheet, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5856d6'
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageGameOver: {
    width: width,
    height: height / 3,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    marginTop: '20%',
    borderWidth: 5
  }
});
