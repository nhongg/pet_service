import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WellCome from './layout/WellCome';
import Login from './layout/Login';
import TrangChu from './layout/TrangChu'; // Import TrangChu

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WellCome">
        <Stack.Screen name="WellCome" component={WellCome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TrangChu" component={TrangChu} /> {/* Thêm TrangChu */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
