import React, { useEffect } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, StyleSheet, Alert, StatusBar, Platform, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile, setLogout } from '../../redux';
import { firstCapital, NutechColor, wp } from '../../utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = () => {
    const auth = useSelector(state => state.ReducerAuth)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProfile())
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{
                    backgroundColor: NutechColor.ORANGE,
                }}
                >
                    <View>
                        <Image
                            source={{ uri: 'https://cambodiaict.net/wp-content/uploads/2019/12/computer-icons-user-profile-google-account-photos-icon-account.jpg' }}
                            style={{
                                height: 110,
                                width: 110,
                                borderRadius: 60,
                                alignSelf: "center",
                                marginVertical: 15,
                                borderWidth: 3,
                                borderColor: 'white',
                                backgroundColor: 'white',
                                resizeMode: 'cover'
                            }}
                        />
                    </View>
                    <View style={{ paddingBottom: 20 }}>
                        <Text style={{
                            fontSize: wp(4.5),
                            color: "white",
                            alignSelf: "center",
                            fontFamily: 'Nunito-Bold'
                        }}>
                            {firstCapital(auth.profile.first_name) + " " + firstCapital(auth.profile.last_name)}
                        </Text>
                        <Text style={{
                            fontSize: wp(4),
                            color: "white",
                            alignSelf: "center",
                            fontFamily: 'Nunito-Regular'
                        }}>
                            {firstCapital(auth.profile.email)}
                        </Text>
                    </View>
                </View>


                <View style={{ paddingTop: 20, flexDirection: 'column' }}>
                    <View style={{ paddingLeft: 25, marginBottom: 20, width: '100%', paddingBottom: 18, borderBottomWidth: 1, borderColor: '#DCDCDC' }}>
                        <Text style={{ color: 'gray', fontSize: wp(3.5), fontFamily: 'Nunito-Bold' }}>
                            <Icon name="card-account-details" size={19} color="gray" />{"  "}First Name
                        </Text>
                        <Text style={{ marginLeft: 30, color: '#202020', fontSize: wp(3.3), paddingTop: 8, fontFamily: 'Nunito-Regular' }}>
                            {firstCapital(auth.profile.first_name)}
                        </Text>
                    </View>
                    <View style={{ paddingLeft: 25, marginBottom: 20, width: '100%', paddingBottom: 18, borderBottomWidth: 1, borderColor: '#DCDCDC' }}>
                        <Text style={{ color: 'gray', fontSize: wp(3.5), fontFamily: 'Nunito-Bold' }}>
                            <Icon name="card-account-details" size={19} color="gray" />{"  "}Last Name
                        </Text>
                        <Text style={{ marginLeft: 30, color: '#202020', fontSize: wp(3.3), paddingTop: 8, fontFamily: 'Nunito-Regular' }}>
                            {firstCapital(auth.profile.last_name)}
                        </Text>
                    </View>
                    <View style={{ paddingLeft: 25, marginBottom: 20, width: '100%', paddingBottom: 18, borderBottomWidth: 1, borderColor: '#DCDCDC' }}>
                        <Text style={{ color: 'gray', fontSize: wp(3.5), fontFamily: 'Nunito-Bold' }}>
                            <Icon name="email" size={19} color="gray" />{"  "}Email
                        </Text>
                        <Text style={{ marginLeft: 30, color: '#202020', fontSize: wp(3.3), paddingTop: 8, fontFamily: 'Nunito-Regular' }}>
                            {firstCapital(auth.profile.email)}
                        </Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 25, width: '100%', paddingVertical: 10, justifyContent: 'center' }}>
                    <TouchableOpacity delayPressIn={0} onPress={() => { dispatch(setLogout()) }} style={[styles.buttons, styles.boxShadow]}><Text style={styles.buttonsText}>Logout</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: NutechColor.BG_COLOR
    },
    buttons: {
        height: 45,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: NutechColor.ORANGE,
        borderRadius: 15,
        borderColor: 'transparent',
        borderWidth: 1,
        marginTop: 5
    },
    boxShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1.5,
        },
        shadowOpacity: 0.29,
        shadowRadius: 0.45,
        elevation: 4,
    },
    buttonsText: {
        color: '#fff',
        fontSize: wp(4),
        fontFamily: 'Nunito-Bold'
    },
})