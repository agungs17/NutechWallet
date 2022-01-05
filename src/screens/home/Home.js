import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, Dimensions, TouchableOpacity, ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile, setLogout } from '../../redux';
import { firstCapital, BannerCarousel, NutechColor, wp, News, subWords, hp, alertStyle } from '../../utils';
import Carousel from '../../components/Carousel'
import Buttons from '../../components/Buttons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BannerTransaction from '../transaction/BannerTransaction';
import Menu from './Menu';

var { width, height } = Dimensions.get('window');

width = width
height = 200

const Home = (props) => {
    const [size, setSize] = useState({ width, height })
    const auth = useSelector(state => state.ReducerAuth)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProfile())
    }, []);


    const handleNext = (params) => {
        if (params == 'Logout') {
            dispatch(setLogout());
        } else if (params == undefined) {
            alertStyle()
        } else {
            props.navigation.navigate(params)
        }
    }


    let banners = [];
    for (let i = 0; i < BannerCarousel.length; i++) {
        banners.push(
            <View key={i} style={{ width: size.width, height: height, justifyContent: 'center', alignItems: 'center', paddingTop: 14, paddingBottom: 25, paddingHorizontal: 2, elevation: 3 }}>
                <View style={{ backgroundColor: '#FFFFFF', height: "100%", width: "100%", flexDirection: 'column', borderRadius: 20, overflow: 'hidden', elevation: 6 }}>
                    <Image resizeMode={'cover'} style={{ height: "100%", width: "100%" }} source={{ uri: BannerCarousel[i].banner_url }} />
                </View>
            </View>
        )
    }

    let news = [];
    for (let i = 0; i < News.length; i++) {
        news.push(
            <TouchableOpacity
                onPress={() => handleNext()}
                key={i}
                style={{
                    backgroundColor: NutechColor.BLUE,
                    height: 200,
                    width: 150,
                    borderRadius: 15,
                    padding: 5,
                    marginRight: 20,
                    elevation: 5
                }}
            >
                <Image
                    resizeMode={'cover'}
                    source={{ uri: News[i].news_img }}
                    style={{ width: 140, borderRadius: 10, height: 130 }}
                />
                <View
                    style={{
                        flexDirection: "row",
                        width: 150,
                        alignItems: "center",
                    }}
                >
                    <View
                        style={{ padding: 5 }}
                    >
                        <Text
                            style={{
                                fontFamily: "Nunito-Bold",
                                fontSize: 14,
                                color: NutechColor.WHITE,
                            }}
                        >
                            {subWords(News[i].header, 14)}
                        </Text>
                        <Text
                            style={{
                                fontFamily: "Nunito-Regular",
                                fontSize: 12,
                                color: NutechColor.WHITE,
                            }}
                        >
                            {subWords(News[i].desc, 30)}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }


    const _onLayoutDidChange = (e) => {
        const layout = e.nativeEvent.layout;
        setSize({ width: layout.width, height: layout.height })
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 15, paddingTop: 20 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.textName}>
                            Hi, {firstCapital(auth.profile.first_name) + " " + firstCapital(auth.profile.last_name)}
                        </Text>
                        <Text style={styles.textSubName}>
                            Your wish is our priority
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => handleNext('Profile')} style={{ alignSelf: 'center' }}>
                        <Icon name={'account'} size={wp(7.5)} color={NutechColor.DIM_GRAY} />
                    </TouchableOpacity>
                </View>
                <View onLayout={_onLayoutDidChange}>
                    <Carousel
                        delay={3800}
                        style={size}
                        autoplay
                    >
                        {banners}
                    </Carousel>
                </View>
                <BannerTransaction />
                <Menu props={props} />
                <View style={{ flexDirection: 'column', paddingBottom: 20 }}>
                    <View style={{ paddingBottom: 15 }}>
                        <Text style={styles.textMenu}>Choose a news</Text>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {news}
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;

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