import React from "react";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { createBottomTabNavigator, BottomTabScreenProps, BottomTabNavigationProp, BottomTabBarOptions  } from "@react-navigation/bottom-tabs";
import { RouteProp, ParamListBase, PartialRoute} from "@react-navigation/native";
import { Image, View, Platform } from "react-native";
import { TabRoutes, ScreenRoutes } from "./route-config";
const { Navigator: StackNavigator, Screen: StackScreen } = createStackNavigator();
const { Navigator:TabNavigator, Screen: TabScreen } = createBottomTabNavigator();


export const AppNavigator = () => {
  return (
    <StackNavigator
      screenOptions= { ({route}) => ({
        
      })}
    >
      {/* <StackScreen name="main" component={TabScreens} /> */}
      { ScreenRoutes.map(item => ( <StackScreen name={item.key} component={item.component} /> )) }
    </StackNavigator> 
  )
}

const _tabBarOptions: BottomTabBarOptions = {
  activeTintColor: "#6efbfb",
  inactiveTintColor: '#999999',
  style:{
    borderTopColor:'#EBEBEB'
  },
  labelStyle: {
    fontSize: 10,
    marginBottom: Platform.OS === "android" ? 5 : 8,
  }
};

export const TabScreens =  () =>  {
  // console.log(navigation, route)
  return (
    <TabNavigator
      screenOptions={({ route }) => ( {
        tabBarIcon: ({ focused, color, size }) => {
          console.log(focused, "route------->" ,route)
          const curRoute = TabRoutes.find(item => item.key === route.name);
          const img =  (focused ? curRoute?.ActiveIcon : curRoute?.icon) as any;
          return (
            <View>
              <Image source={img} style={{height: 20, width: 20}}/>
            </View>
          )
        }
      })
    }
    backBehavior={'none'}
    tabBarOptions={_tabBarOptions}
    >
      { TabRoutes.map(item => (<TabScreen name={item.key} key={item.key} component={item.component}/>)) }
    </TabNavigator>
  )
}