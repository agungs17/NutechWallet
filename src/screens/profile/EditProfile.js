import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import InputTitle from '../../components/InputTitle';
import { NutechColor, wp } from '../../utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Buttons from '../../components/Buttons';
import { editProfileService } from '../../services';
import { setProfile } from '../../redux';

const EditProfile = (props) => {
    const auth = useSelector(state => state.ReducerAuth)
    const token = auth.token;
    const dispatch = useDispatch();
    const [form, setForm] = useState({ first_name: auth.profile.first_name, last_name: auth.profile.last_name })

    const onChangeText = (text, key) => {
        setForm({ ...form, [key]: text })
    }

    const onSubmit = () => {
        editProfileService(form, token).then((res) => {
            if (res.status == 0) {
                Alert.alert(
                    "Success",
                    res.message,
                    [
                        { text: "OK", onPress: () => props.navigation.goBack() }
                    ]
                );
                dispatch(setProfile())
            } else {
                Alert.alert('Error!', res.message)
            }
        }).catch((e) => {
            e = String(e)
            Alert.alert('Error!', 'Something has error!')
        })
    }


    return (
        <View style={styles.container}>
            <Text style={[styles.textTitle, { paddingBottom: 10 }]}>Edit Profile</Text>
            <InputTitle
                valueText={form.first_name}
                keyName={'first_name'}
                textTitle={'First Name'}
                onChangeText={(text, keyName) => onChangeText(text, keyName)}
                extendInput={<Icon name={'card-account-details'} size={wp(5)} color={NutechColor.DIM_GRAY} />}
            />
            <InputTitle
                valueText={form.last_name}
                keyName={'last_name'}
                textTitle={'Last Name'}
                onChangeText={(text, keyName) => onChangeText(text, keyName)}
                extendInput={<Icon name={'card-account-details'} size={wp(5)} color={NutechColor.DIM_GRAY} />}
            />
            <Buttons
                handleButton={onSubmit}
                containerStyle={{ backgroundColor: NutechColor.ORANGE, padding: 10, borderRadius: 20, marginTop: 12, elevation: 1 }}
                renderList={
                    <View style={{ alignItems: 'center' }}><Text style={{ fontFamily: 'Nunito-Bold', color: NutechColor.WHITE }}>Submit</Text></View>
                }
            />
        </View>
    );
}

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: NutechColor.BG_COLOR,
        paddingHorizontal: 20,
    },
    textTitle: {
        fontFamily: 'Nunito-Bold',
        fontSize: wp(4.5),
        color: NutechColor.TEXT_DEFAULT
    }
})