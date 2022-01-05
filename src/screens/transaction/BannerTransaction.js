import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid, ActivityIndicator, Platform, Alert, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { setBalance, setTopUp, setTransfer } from '../../redux/actions/ActionTransaction';
import { NutechColor, hp, wp, wordAmmount, alertStyle, checkAmount } from '../../utils';
import ModalTransaction from '../../components/ModalTransaction';

const BannerTransaction = () => {
    const [modal, setModal] = useState(false)
    const [modal1, setModal1] = useState(false)
    const [param, setParam] = useState('')
    const balance = useSelector(state => state.ReducerBalance)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setBalance())
    }, []);

    const getBalace = () => {
        if (Platform.OS == 'android') {
            ToastAndroid.show("Refreshing...", ToastAndroid.SHORT);
        }
        dispatch(setBalance())
    }

    const onChangeModal = () => {
        setModal(!modal)
    }

    const onChangeModal1 = () => {
        setModal1(!modal1)
    }

    const onSubmit = (form) => {
        if (checkAmount(form.amount, 50000)) {
            dispatch(setTopUp(form)).then((res) => {
                if (res.status == 0) {
                    Alert.alert(
                        "Success",
                        res.message,
                        [
                            { text: "OK", onPress: () => onChangeModal() }
                        ]
                    );
                }
            })
        }
    }

    const onSubmit1 = (form) => {
        if (checkAmount(form.amount, 10000)) {
            dispatch(setTransfer(form)).then((res) => {
                if (res.status == 0) {
                    Alert.alert(
                        "Success",
                        res.message,
                        [
                            { text: "OK", onPress: () => onChangeModal1() }
                        ]
                    );
                }
            })
        }
    }

    return (
        <>
            <ModalTransaction
                textSubmit={'Top Up'}
                modalShow={modal}
                nameIcon={'cash-plus'}
                modalHandle={onChangeModal}
                onSubmit={(form) => onSubmit(form)}
            />
            <ModalTransaction
                textSubmit={'Transfer'}
                modalShow={modal1}
                nameIcon={'cash-refund'}
                modalHandle={onChangeModal1}
                onSubmit={(form) => onSubmit1(form)}
            />
            <View style={{ backgroundColor: NutechColor.ORANGE, paddingVertical: 9, elevation: 3, borderRadius: 12, flexDirection: 'row', elevation: 4, justifyContent: 'space-around', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => getBalace()} style={{
                    backgroundColor: NutechColor.LIGHT_ORANGE,
                    borderRadius: 8,
                    flexDirection: 'column',
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                    elevation: 4,
                    width: '35%'
                }}>
                    {balance.loading ?
                        <View style={{ paddingVertical: 14 }}>
                            <ActivityIndicator size="small" color={NutechColor.ORANGE} />
                        </View>
                        :
                        <>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='cash-multiple' size={hp(4)} color={NutechColor.ORANGE} style={{ marginBottom: 6, marginTop: -5 }} />
                                <Text style={{
                                    fontFamily: 'Nunito-Regular',
                                    fontSize: wp(3.8),
                                    color: NutechColor.TEXT_DEFAULT,
                                }}>
                                    {" "}Balance
                                </Text>
                            </View>
                            <Text style={{
                                fontFamily: 'Nunito-Bold',
                                fontSize: wp(3.2),
                                color: NutechColor.TEXT_DEFAULT,
                            }}>
                                {'Rp.' + wordAmmount(balance.data)}
                            </Text>
                        </>
                    }
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingHorizontal: 5, alignItems: 'center' }} onPress={onChangeModal}>
                    <Icon name='cash-plus' size={hp(4)} color={NutechColor.WHITE} style={{ marginBottom: 1 }} />
                    <Text style={{ fontFamily: 'Nunito-Bold', color: NutechColor.WHITE, fontSize: wp(3) }}>Top Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingHorizontal: 5, alignItems: 'center' }} onPress={onChangeModal1}>
                    <Icon name='cash-refund' size={hp(3.8)} color={NutechColor.WHITE} style={{ marginBottom: 6 }} />
                    <Text style={{ fontFamily: 'Nunito-Bold', color: NutechColor.WHITE, fontSize: wp(3) }}>Transfer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingHorizontal: 5, alignItems: 'center' }} onPress={() => alertStyle()}>
                    <Icon name='rocket-launch' size={hp(3.7)} color={NutechColor.WHITE} style={{ marginBottom: 4.5 }} />
                    <Text style={{ fontFamily: 'Nunito-Bold', color: NutechColor.WHITE, fontSize: wp(3) }}>Explore</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default BannerTransaction;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})