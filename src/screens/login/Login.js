import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import Buttons from '../../components/Buttons';
import InputTitle from '../../components/InputTitle';
import { setLogin } from '../../redux';
import { backgroundAuth, NutechColor, nutechImage, wp } from '../../utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = (props) => {
    const dispatch = useDispatch();
    const [showPass, setShowPass] = useState(false)
    const [form, setForm] = useState({ email: '', password: '' })

    const onChangeText = (text, key) => {
        setForm({ ...form, [key]: text })
    }

    const onLogin = () => {
        dispatch(setLogin(form))
    }

    const registerPage = () => {
        props.navigation.navigate('Register')
    }

    return (
        <ImageBackground source={{ uri: backgroundAuth }} resizeMode="cover" style={styles.imgBackground}>
            <View style={styles.container}>
                <View style={{ alignSelf: 'center' }}>
                    <Image
                        style={{ width: 200, height: 120 }}
                        source={{ uri: nutechImage }}
                        resizeMode={'stretch'}
                    />
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
                        valueText={form.password}
                        keyName={'password'}
                        textTitle={'Password'}
                        secureTextEntry={!showPass}
                        onChangeText={(text, keyName) => onChangeText(text, keyName)}
                        extendInput={showPass ? <Icon name={'eye-off'} size={wp(5)} color={NutechColor.DIM_GRAY} /> : <Icon name={'eye'} size={wp(5)} color={NutechColor.DIM_GRAY} />}
                        onPressExtend={() => setShowPass(!showPass)}
                    />
                </View>
                <Buttons
                    handleButton={onLogin}
                    containerStyle={{ backgroundColor: NutechColor.ORANGE, padding: 10, borderRadius: 20 }}
                    renderList={
                        <View style={{ alignItems: 'center' }}><Text style={{ fontFamily: 'Nunito-Bold', color: NutechColor.WHITE }}>Login Account</Text></View>
                    }
                />
                <Buttons
                    handleButton={registerPage}
                    containerStyle={{ paddingTop: 10, borderRadius: 20 }}
                    renderList={
                        <View style={{ alignItems: 'center' }}><Text style={{ fontFamily: 'Nunito-Bold', color: NutechColor.BLUE }}>Register Account!</Text></View>
                    }
                />
            </View>
        </ImageBackground>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        paddingBottom: 23,
        borderRadius: 20,
        marginHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: NutechColor.WHITE
    },
    imgBackground: {
        flex: 1,
        justifyContent: "center"
    },
})