import { Dimensions, PixelRatio, Alert } from 'react-native';
import { NutechColor } from '.';

export function wp(size) {
    let screenWidth = Dimensions.get('window').width;
    const elemWidth = typeof size === "number" ? size : parseFloat(size);
    return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
}


export function hp(size) {
    let screenHeight = Dimensions.get('window').height;
    const elemHeight = typeof size === "number" ? size : parseFloat(size);
    return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
}

export function firstCapital(word) {
    if (word) {
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
    }
}

export const updateError = (error, stateUpdater) => {
    stateUpdater(error);
    setTimeout(() => {
        stateUpdater('')
    }, 2500)
}

export const alertStyle = () => {
    Alert.alert('Warning', 'Just prototype!')
}

export const checkForm = (value, type) => {
    if (value && type) {
        if (type == 'required') {
            return value.length > 0
        } else if (type == 'email') {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value);
        } else if (type == 'char8') {
            return value.length >= 8
        }
    }
}

export function subWords(words, len) {
    let word;
    word = words.length >= len ? words.substring(0, len) + '...' : words
    return word
}

export function wordAmmount(word) {
    if (word != '' || word != undefined) {
        var reverse = word.toString().split('').reverse().join(''),
            ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan.join('.').split('').reverse().join('');
        return ribuan;
    } else {
        return 'Invalid Value'
    }
}

export function colorStatus(word) {
    if (word == 'transfer') {
        return NutechColor.BLUE
    } else if (word == 'topup') {
        return NutechColor.GREEN
    }
}

export function checkAmount(word, min){
    if (word.length == 0) {
        Alert.alert('Error', 'Amount is required')
        return false;
    } else if (word < min) {
        Alert.alert('Error', 'Minimum amount is ' + min)
        return false;
    }else{
        return true;
    }
}