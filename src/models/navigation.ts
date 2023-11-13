import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RouteList = {
  Home: undefined;
  Repos: {
    userName: string;
  };
};

export type NavigationProp = NativeStackNavigationProp<RouteList>;

export type HomeRouteProp = RouteProp<RouteList, "Home">;
export type RepoRouteProp = RouteProp<RouteList, "Repos">;

export type HomeScreenProp = NativeStackNavigationProp<RouteList, "Home">;
export type RepoScreenProp = NativeStackNavigationProp<RouteList, "Repos">;
