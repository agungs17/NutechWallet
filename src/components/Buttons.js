import React from 'react';
import { TouchableOpacity } from 'react-native';

export default function Buttons({ handleButton, renderList, containerStyle }) {
    return (
        <TouchableOpacity style={containerStyle} onPress={handleButton}>
            {renderList}
        </TouchableOpacity>
    )
}