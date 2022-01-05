import React from 'react';
import { View } from 'react-native';

export default function Separator({ color }) {
    return (
        <View style={{ height: 1, backgroundColor: color }}/>
    )
}