import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { alertStyle, NutechColor, wp, } from '../../utils';
import Buttons from '../../components/Buttons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { setLogout } from '../../redux';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleNext = (params) => {
        if (params == 'Logout') {
            dispatch(setLogout());
        } else if (params == undefined) {
            alertStyle()
        } else {
            navigation.navigate(params)
        }
    }

    return (
        <View style={{ flexDirection: 'column', paddingBottom: 10 }}>
            <View style={{ paddingBottom: 15, paddingTop: 15 }}>
                <Text style={styles.textMenu}>Our service</Text>
            </View>
            <View style={{ justifyContent: 'flex-start' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Buttons
                        handleButton={() => handleNext('Transaction')}
                        containerStyle={{ backgroundColor: NutechColor.ORANGE, borderRadius: 10, height: 60, width: 60, elevation: 3, justifyContent: 'center', marginRight: wp(8.6), marginBottom: 30 }}
                        renderList={
                            <View style={{ alignItems: 'center' }}>
                                <Icon name={'swap-horizontal'} size={wp(7.3)} color={NutechColor.WHITE} />
                                <Text style={{ fontFamily: 'Nunito-Bold', color: NutechColor.WHITE, fontSize: wp(2.4) }}>Transaction</Text>
                            </View>
                        }
                    />
                    <Buttons
                        handleButton={() => handleNext()}
                        containerStyle={{ backgroundColor: NutechColor.ORANGE, borderRadius: 10, height: 60, width: 60, elevation: 3, justifyContent: 'center', marginRight: wp(8.6), marginBottom: 30 }}
                        renderList={
                            <View style={{ alignItems: 'center' }}>
                                <Icon name={'google'} size={wp(6.5)} color={NutechColor.WHITE} />
                                <Text style={{ fontFamily: 'Nunito-Bold', color: NutechColor.WHITE, fontSize: wp(2.2) }}>Google Pay</Text>
                            </View>
                        }
                    />
                    <Buttons
                        handleButton={() => handleNext()}
                        containerStyle={{ backgroundColor: NutechColor.ORANGE, borderRadius: 10, height: 60, width: 60, elevation: 3, justifyContent: 'center', marginRight: wp(8.6), marginBottom: 30 }}
                        renderList={
                            <View style={{ alignItems: 'center' }}>
                                <Icon name={'vote'} size={wp(7)} color={NutechColor.WHITE} />
                                <Text style={{ fontFamily: 'Nunito-Bold', color: NutechColor.WHITE, fontSize: wp(2.8) }}>OVO</Text>
                            </View>
                        }
                    />
                    <Buttons
                        handleButton={() => handleNext()}
                        containerStyle={{ backgroundColor: NutechColor.ORANGE, borderRadius: 10, height: 60, width: 60, elevation: 3, justifyContent: 'center', marginBottom: 30 }}
                        renderList={
                            <View style={{ alignItems: 'center' }}>
                                <Icon name={'cash'} size={wp(7)} color={NutechColor.WHITE} />
                                <Text style={{ fontFamily: 'Nunito-Bold', color: NutechColor.WHITE, fontSize: wp(2.8) }}>Dana</Text>
                            </View>
                        }
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Buttons
                        handleButton={() => handleNext()}
                        containerStyle={{ backgroundColor: NutechColor.ORANGE, borderRadius: 10, height: 60, width: 60, elevation: 3, justifyContent: 'center', marginRight: wp(8.6), marginBottom: 30 }}
                        renderList={
                            <View style={{ alignItems: 'center' }}>
                                <Icon name={'credit-card-scan'} size={wp(7)} color={NutechColor.WHITE} />
                                <Text style={{ fontFamily: 'Nunito-Bold', color: NutechColor.WHITE, fontSize: wp(2.8) }}>QRIS</Text>
                            </View>
                        }
                    />
                    <Buttons
                        handleButton={() => handleNext('Logout')}
                        containerStyle={{ backgroundColor: NutechColor.RED, borderRadius: 10, height: 60, width: 60, elevation: 3, justifyContent: 'center', marginRight: wp(8.6), marginBottom: 30 }}
                        renderList={
                            <View style={{ alignItems: 'center' }}>
                                <Icon name={'logout-variant'} size={wp(7)} color={NutechColor.WHITE} />
                                <Text style={{ fontFamily: 'Nunito-Bold', color: NutechColor.WHITE, fontSize: wp(2.8) }}>Logout</Text>
                            </View>
                        }
                    />
                </View>
            </View>
        </View>
    );
}

export default Menu;

const styles = StyleSheet.create({
    container: {
        backgroundColor: NutechColor.BG_COLOR,
        flex: 1,
    },
    scrollView: {
        paddingHorizontal: 25
    },
    textName: {
        fontFamily: 'Nunito-Bold',
        fontSize: wp(4.2),
        color: NutechColor.TEXT_DEFAULT
    },
    textSubName: {
        fontFamily: 'Nunito-Bold',
        fontSize: wp(3.7),
        color: '#808080'
    },
    textMenu: {
        fontFamily: 'Nunito-Bold',
        fontSize: wp(4),
        color: NutechColor.TEXT_DEFAULT,
    },
})