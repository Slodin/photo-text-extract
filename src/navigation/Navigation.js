import {createStackNavigator} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import CropScreen from '../screens/CropScreen';

const RootStack = createStackNavigator({
  Home: { screen: HomeScreen },
  CropImage: {screen: CropScreen},
});

export default RootStack;
