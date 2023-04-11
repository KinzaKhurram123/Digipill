import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Conformation from '../Screens/Register/Conformation';
import Login from '../Screens/Register/Login/Login';
import Signup from '../Screens/Register/Signup/Signup';
import Splash from '../Screens/Register/Splash';
import start from '../Screens/Register/Start';

const Stack = createNativeStackNavigator();

function RegisterStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Splash'}>
      <Stack.Screen name="Splah" component={Splash} />
      <Stack.Screen name="Start" component={start} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Conformation" component={Conformation} />
    </Stack.Navigator>
  );
}
export default RegisterStack;
