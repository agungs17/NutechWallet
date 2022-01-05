import React from 'react';
import { TextInput, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NutechColor } from '../utils';

export default function InputTitle({ keyName, textTitle, keyboardType, valueText, secureTextEntry, extendInput, onPressExtend, onChangeText, firstExtend }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{textTitle}</Text>
            <View style={styles.textBoxContainer}>
                {firstExtend && (
                    <View style={{ justifyContent: 'center', paddingHorizontal: 4 }}>
                        {firstExtend}
                    </View>
                )}

                <View style={{ width: (extendInput || firstExtend) ? (firstExtend && extendInput) ? '82%' : '90%' : '100%' }}>
                    <TextInput
                        underlineColorAndroid='transparent'
                        style={styles.input}
                        placeholder={textTitle}
                        keyboardType={keyboardType == undefined ? 'default' : keyboardType}
                        secureTextEntry={secureTextEntry == undefined ? false : secureTextEntry}
                        onChangeText={(text) => onChangeText(text, keyName)}
                        value={valueText}
                        autoCapitalize='none'
                    />
                </View>
                {extendInput && (
                    <>
                        {onPressExtend ?
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.touachableButton}
                                onPress={() => onPressExtend()}
                            >
                                {extendInput}
                            </TouchableOpacity>
                            :
                            <View
                                style={styles.touachableButton}
                            >
                                {extendInput}
                            </View>
                        }
                    </>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5
    },
    input: {
        height: 40,
        position: 'relative',
        fontFamily: 'Nunito-Regular'
    },
    title: {
        fontFamily: 'Nunito-Bold',
        color: NutechColor.TEXT_DEFAULT,
        paddingBottom: 5
    },
    textBoxContainer: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: NutechColor.GRAY,
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingLeft : 10
    },
    touachableButton: {
        top: 6,
        height: 40,
        paddingVertical: 3,
    },
});