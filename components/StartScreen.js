import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import Name from './Name';
import Producer from './Producer';
import Quality from './Quality';
import Complete from './Complete';
import CancelButtons from '../constants/CancelButtons';
import GenericLabels from '../constants/GenericLabels';

const StartScreen = props => {
    return (

        <Modal visible={props.visible} animationType="slide">
            <View style={styles.container}>
                <View style={styles.screen}>

                    <View style={styles.introTextContainer}>
                        <Text style={GenericLabels.startScreenIntroText}>Selecione o tipo de pesquisa</Text>
                    </View>

                    <View style={styles.sideBySide}>
                        <Name />
                        <Producer />
                    </View>

                    <View style={styles.sideBySide}>
                        <Quality />
                        <Complete />
                    </View>

                </View>


                <TouchableOpacity
                    style={CancelButtons.backTouchable}
                    onPress={props.onCancel}
                >
                    <Text style={CancelButtons.buttonLabel}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </Modal>
    )

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 100,
        paddingTop: 50
    },
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center', //aligns horiz
        backgroundColor: 'white'
    },
    sideBySide: {
        flexDirection: 'row',

    },
    introTextContainer: {
        marginVertical: 20,
    },
});

export default StartScreen;