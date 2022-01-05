import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, VirtualizedList, View, Text, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Separator from '../../components/Separator';
import { setTransfer, setTrasaction } from '../../redux/actions/ActionTransaction';
import { NutechColor, wp, checkAmount } from '../../utils';
import ListTransaction from './ListTransaction'

const Transaction = () => {
    const tx = useSelector(state => state.ReducerTransaction)
    const dispatch = useDispatch();

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        dispatch(setTrasaction())
    }

    const renderItems = ({ item }) => <ListTransaction data={item} />

    return (
        <SafeAreaView style={styles.container}>
            {tx.loading ?
                <View style={{ justifyContent: 'center', flex: 1 }}><ActivityIndicator size="large" color={NutechColor.ORANGE} /></View>
                :
                <VirtualizedList
                    data={tx.data}
                    initialNumToRender={8}
                    onRefresh={getData}
                    refreshing={tx.loading}
                    renderItem={renderItems}
                    keyExtractor={data => data.transaction_id}
                    getItemCount={(data) => data.length}
                    getItem={(data, index) => data[index]}
                    ItemSeparatorComponent={() => <Separator color={"#DDD"} />}
                    ListEmptyComponent={<View style={[styles.container, { justifyContent: 'center', alignItems: 'center', }]}><Text style={styles.textEmpty}>No Data</Text></View>}
                />
            }
        </SafeAreaView>
    );
}

export default Transaction;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: NutechColor.BG_COLOR
    },
})