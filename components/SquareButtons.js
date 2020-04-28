
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const SquareButtons = props => {
    return (
        <View style={{ ...styles.button, ...props.style }}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignContent: 'center',
        alignItems: 'center',
        width: 80,
        backgroundColor: 'white'
    }
    
});

export default SquareButtons;