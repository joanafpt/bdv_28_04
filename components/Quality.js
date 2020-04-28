import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ClickableSquare from './ClickableSquare';
import FindByQuality from './FindByQuality';
import MenuSquaresLabels from '../constants/MenuSquaresLabels';
import OkButtonsInsideSquares from '../constants/OkButtonsInsideSquares';

const Quality = props => {
    const [isClickMode, setIsClickMode] = useState(false);

    const cancelSearch = () => {
        setIsClickMode(false); //closes the modal
    };

    return (

        <View>
            <ClickableSquare style={styles.square}>
                <Text style={MenuSquaresLabels.text}>Qualidade</Text>
                <View style={styles.button}>

                    <TouchableOpacity
                        style={OkButtonsInsideSquares.okButton}
                        onPress={() => setIsClickMode(true)}
                    >
                        <Text style={OkButtonsInsideSquares.buttonLabel}>OK</Text>
                    </TouchableOpacity>


                </View>
            </ClickableSquare>
            <FindByQuality visible={isClickMode}
                onCancel={cancelSearch} />
        </View>

    )

}
const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        color: 'white',
        marginBottom: '35%',
    },
    button: {
        alignContent: 'center',
        alignItems: 'center',
    },
});
export default Quality;