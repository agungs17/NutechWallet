import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import InputTitle from './InputTitle';
import Modals from './Modals'
import { NutechColor, hp, wp, wordAmmount } from '../utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Buttons from './Buttons';

const ModalTransaction = ({ autoClose, modalHandle, modalShow, onSubmit, textSubmit, nameIcon }) => {
    const [form, setForm] = useState({ amount: '' })
    const { amount } = form;

    useEffect(() => {
        setForm({ amount: '' })
    }, [modalShow]);

    const onChangeText = (text, key) => {
        setForm({ ...form, [key]: text })
    }

    return (
        <Modals
            autoClose={autoClose}
            modalShow={modalShow}
            modalHandle={modalHandle}
            renderList={
                <View style={[styles.modalContent, { padding: 20 }]}>
                    <InputTitle
                        firstExtend={<Text style={{ fontFamily: 'Nunito-Bold', fontSize: wp(3), color: NutechColor.TEXT_DEFAULT }}>Rp.</Text>}
                        valueText={amount}
                        keyName={'amount'}
                        keyboardType={'numeric'}
                        textTitle={'Amount'}
                        onChangeText={(text, keyName) => onChangeText(text, keyName)}
                        extendInput={<Icon name={nameIcon} size={wp(5)} color={NutechColor.DIM_GRAY} />}
                    />
                    <View style={{ paddingTop: 10 }}>
                        <Buttons
                            handleButton={() => onSubmit(form)}
                            containerStyle={{ backgroundColor: NutechColor.BLUE, padding: 10, borderRadius: 20, }}
                            renderList={
                                <View style={{ alignItems: 'center' }}><Text style={{ fontFamily: 'Nunito-Bold', color: NutechColor.WHITE }}>{textSubmit}</Text></View>
                            }
                        />
                        <Buttons
                            handleButton={modalHandle}
                            containerStyle={{ paddingTop: 10, borderRadius: 20 }}
                            renderList={
                                <View style={{ alignItems: 'center' }}><Text style={{ fontFamily: 'Nunito-Bold', color: NutechColor.BLUE }}>Back</Text></View>
                            }
                        />
                    </View>
                </View>
            }
        />
    );
}

export default ModalTransaction;

const styles = StyleSheet.create({
    modalContent: {
        marginHorizontal: 20,
        backgroundColor: NutechColor.WHITE,
        borderRadius: 10
    },
    textModal: {
        fontSize: wp(4),
        fontFamily: 'Nunito-Regular',
        color: NutechColor.TEXT_DEFAULT
    },
})