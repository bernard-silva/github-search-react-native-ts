import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RouteList } from "../models/navigation";
import { Home } from "../screens/Home";
import { Repos } from "../screens/Repos";

const Stack = createNativeStackNavigator<RouteList>();

export function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ animation: "slide_from_left" }}
      />
      <Stack.Screen
        name="Repos"
        component={Repos}
        options={{ animation: "slide_from_right" }}
      />
    </Stack.Navigator>
  );
}
