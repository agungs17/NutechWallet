import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colorStatus, firstCapital, NutechColor, wordAmmount, wp, hp } from '../../utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const ListTransaction = ({ data }) => {

    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'center', width: '18%' }}>
                {data.transaction_type == 'topup' ?
                    <Icon name='cash-plus' size={hp(5)} color={colorStatus(data.transaction_type)} style={{ marginBottom: 1 }} />
                    :
                    <Icon name='swap-horizontal' size={hp(5)} color={colorStatus(data.transaction_type)} style={{ marginBottom: 1 }} />
                }

            </View>
            <View style={{ flexDirection: 'column' }}>
                <Text style={[styles.textBold, { color: colorStatus(data.transaction_type), paddingBottom: 4 }]}>{firstCapital(data.transaction_type)}</Text>
                <Text style={[styles.textBold, { paddingBottom: 1 }]}>{'Rp.' + wordAmmount(data.amount)}</Text>
                <Text style={styles.textRegular}>{data.transaction_time}</Text>
            </View>
        </View>
    );
}

export default ListTransaction;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: NutechColor.BG_COLOR,
        paddingHorizontal: 22,
        paddingVertical: 15,
        flexDirection: 'row'
    },
    textBold: {
        fontFamily: 'Nunito-Bold',
        fontSize: wp(4),
    },
    textRegular: {
        fontFamily: 'Nunito-Regular',
        fontSize: wp(3.2)
    }
})