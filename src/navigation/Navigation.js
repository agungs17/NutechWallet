import React, { Profiler } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NutechColor, wp } from '../utils';

// screen
import Login from '../screens/login/Login'
import Home from '../screens/home/Home'
import Register from '../screens/register/Register';
import Profile from '../screens/profile/Profile';
import EditProfile from '../screens/profile/EditProfile';
import Transaction from '../screens/transaction/Transaction';



const Stack = createStackNavigator();

const Navigation = () => {
    const auth = useSelector(state => state.ReducerAuth)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {!auth.isLogin ?
                    <>
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={{
                                headerShown: false
                            }}
                        />
                        <Stack.Screen
                            name="Register"
                            component={Register}
                            options={{
                                headerShown: false
                            }}
                        />
                    </>
                    :
                    <>
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={{
                                headerShown: false
                            }}
                        />
                        <Stack.Screen
                            name="Profile"
                            component={Profile}
                            options={({ navigation }) => ({
                                title: 'Your Profile',
                                headerStyle: {
                                    backgroundColor: NutechColor.ORANGE,
                                    elevation: 0
                                },
                                headerTintColor: NutechColor.WHITE,
                                headerTitleStyle: {
                                    fontFamily: 'Nunito-Bold',
                                    color: NutechColor.WHITE,
                                    fontSize: wp(5)
                                },
                                headerTitleAlign: 'center',
                                headerRight: () => (
                                    <TouchableOpacity style={{ marginRight: 15 }} onPress={() => navigation.navigate("EditProfile")} >
                                        <Icon name={'account-edit'} size={wp(6.5)} color={NutechColor.WHITE} />
                                    </TouchableOpacity>
                                ),
                            })}
                        />
                        <Stack.Screen
                            name="EditProfile"
                            component={EditProfile}
                            options={({ navigation }) => ({
                                title: '',
                                headerStyle: {
                                    backgroundColor: NutechColor.BG_COLOR,
                                    elevation: 0
                                },
                                headerTintColor: NutechColor.TEXT_DEFAULT,
                                headerTitleStyle: {
                                    fontFamily: 'Nunito-Bold',
                                    color: NutechColor.WHITE,
                                    fontSize: wp(5)
                                },
                                headerTitleAlign: 'center',
                            })}
                        />
                        <Stack.Screen
                            name="Transaction"
                            component={Transaction}
                            options={({ navigation }) => ({
                                title: 'Your Transaction',
                                headerStyle: {
                                    backgroundColor: NutechColor.ORANGE,
                                    elevation: 0
                                },
                                headerTintColor: NutechColor.WHITE,
                                headerTitleStyle: {
                                    fontFamily: 'Nunito-Bold',
                                    color: NutechColor.WHITE,
                                    fontSize: wp(5)
                                },
                                headerTitleAlign: 'center',
                            })}
                        />
                    </>
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;