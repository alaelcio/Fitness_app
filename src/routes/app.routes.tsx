import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Page } from '../screens/Page';
import { Datails } from '../screens/Datails';
import {Play,AddressBook,Airplay} from "phosphor-react-native";

const {Navigator,Screen} = createBottomTabNavigator();

export function AppRoutes(){

    return(
        <Navigator
         screenOptions={{
            headerShown:false,
            tabBarLabelPosition:'beside-icon',
            tabBarActiveTintColor:'#000',
            tabBarInactiveTintColor:'#fff',
            tabBarStyle:{
                position:'absolute',
                height:55,
                borderTopWidth:0,
                backgroundColor:'#0E7D77'
            },
            tabBarItemStyle:{
                position:'relative',
               
            }
         }}
        >
            <Screen
            name='home'
            component={Home}
            options={{
                tabBarIcon:()=> <Play size={25}/>,
                tabBarLabel:'Welcome'
               
            }}
            />

            <Screen
            name='page'
            component={Page}
            options={{
                tabBarIcon:()=> <AddressBook size={25}/>,
                tabBarLabel:'Page'
                
            }}
            />

            <Screen
            name='datails'
            component={Datails}
            options={{
               tabBarButton:() => null,
            }}
            />
        </Navigator>
    )
}