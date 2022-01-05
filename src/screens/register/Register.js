import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Alert } from 'react-native';
import Buttons from '../../components/Buttons';
import InputTitle from '../../components/InputTitle';
import { backgroundAuth, NutechColor, wp } from '../../utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { registerService } from '../../services';

const Register = (props) => {
    const [showPass1, setShowPass1] = useState(false)
    const [showPass2, setShowPass2] = useState(false)
    const [form, setForm] = useState({ email: '', first_name: '', last_name: '', password: '', confirm_pass: '' })
    const { password, confirm_pass  } = form

    const onChangeText = (text, key) => {
        setForm({ ...form, [key]: text })
    }

    const onPressRegister = () => {
        if (password.length < 8) {
            Alert.alert('Error!', 'Minimum password is 8 character')
            return false
        }
        if (password != confirm_pass) {
            Alert.alert('Error!', 'Password and confirm password must same')
            return false
        }
        let newForm = form;
        // destructuring karna confirm_pass ga allow masuk backend
        delete newForm['confirm_pass'];
        registerService(newForm).then((res) => {
            Alert.alert(res.status == 0 ? 'Sukses' : 'Error!', res.message)
            if (res.status == 0) {
                goBack();
            }
        }).catch((e) => {
            e = String(e)
            Alert.alert('Error!', 'Something has error!')
        })
    }

    const goBack = () => {
        props.navigation.goBack();
    }

    return (
        <ImageBackground source={{ uri: backgroundAuth }} resizeMode="cover" style={styles.imgBackground}>
            <View style={styles.container}>
                <View style={{ alignSelf: 'center', paddingVertical: 10, paddingBottom: 15 }}>
                    <Text style={styles.textTitle}>Register Account</Text>
                </View>
                <View style={{ paddingBottom: 15 }}>
                    <InputTitle
                        valueText={form.email}
                        keyName={'email'}
                        textTitle={'Email'}
                        onChangeText={(text, keyName) => onChangeText(text, keyName)}
                        extendInput={<Icon name={'email'} size={wp(5)} color={NutechColor.DIM_GRAY} />}
                    />
                    <InputTitle
                        valueText={form.first_name}
                        textTitle={'First Name'}
                        keyName={'first_name'}
                        onChangeText={(text, keyName) => onChangeText(text, keyName)}
                        extendInput={<Icon name={'card-account-details'} size={wp(5)} color={NutechColor.DIM_GRAY} />}
                    />
                    <InputTitle
                        textTitle={'Last Name'}
                        valueText={form.last_name}
                        keyName={'last_name'}
                        onChangeText={(text, keyName) => onChangeText(text, keyName)}
                        extendInput={<Icon name={'card-account-details'} size={wp(5)} color={NutechColor.DIM_GRAY} />}
                    />
                    <InputTitle
                        valueText={form.password}
                        keyName={'password'}
                        textTitle={'Password'}
                        secureTextEntry={!showPass1}
                        onChangeText={(text, keyName) => onChangeText(text, keyName)}
                        extendInput={showPass1 ? <Icon name={'eye-off'} size={wp(5)} color={NutechColor.DIM_GRAY} /> : <Icon name={'eye'} size={wp(5)} color={NutechColor.DIM_GRAY} />}
                        onPressExtend={() => setShowPass1(!showPass1)}
                    />
                    <InputTitle
                        valueText={form.confirm_pass}
                        keyName={'confirm_pass'}
                        textTitle={'Confirm Password'}
                        secureTextEntry={!showPass2}
                        onChangeText={(text, keyName) => onChangeText(text, keyName)}
                        extendInput={showPass2 ? <Icon name={'eye-off'} size={wp(5)} color={NutechColor.DIM_GRAY} /> : <Icon name={'eye'} size={wp(5)} color={NutechColor.DIM_GRAY} />}
                        onPressExtend={() => setShowPass2(!showPass2)}
                    />
                </View>
                <Buttons
                    handleButton={onPressRegister}
                    containerStyle={{ backgroundColor: NutechColor.BLUE, padding: 10, borderRadius: 20, }}
                    renderList={
                        <View style={{ alignItems: 'center' }}><Text style={{ fontFamily: 'Nunito-Bold', color: NutechColor.WHITE }}>Register Now</Text></View>
                    }
                />
                <Buttons
                    handleButton={goBack}
                    containerStyle={{ paddingTop: 10, borderRadius: 20 }}
                    renderList={
                        <View style={{ alignItems: 'center' }}><Text style={{ fontFamily: 'Nunito-Bold', color: NutechColor.BLUE }}>Back</Text></View>
                    }
                />
            </View>
        </ImageBackground>
    );
}

export default Register;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        paddingVertical: 20,
        paddingBottom: 25,
        borderRadius: 20,
        marginHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: NutechColor.WHITE
    },
    imgBackground: {
        flex: 1,
        justifyContent: "center"
    },
    textTitle: {
        fontSize: wp(5.5),
        color: NutechColor.TEXT_DEFAULT,
        fontFamily: 'Nunito-Bold',
    }
})