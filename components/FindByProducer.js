import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Modal, TouchableOpacity } from 'react-native';
import ResultsByProducer from './ResultsByProducer';
import MenuCancelButtons from '../constants/MenuCancelButtons';
import MenuGoForwardButtons from '../constants/MenuGoForwardButtons';
import OkInputButtons from '../constants/OkInputButtons';
import GenericStyleButtons from '../constants/GenericStyleButtons';
import ImputStyles from '../constants/ImputStyles';

import functions from "../functions/functions.js";

const FindByProducer = props => {
    const [enteredInput, setEnteredInput] = useState('');
    const [isClickMode, setIsClickMode] = useState(false);
    const [returnedData, setReturnedData] = useState([]);
    const [isLoading, setIsLoading] = useState(false); ////////////

    const cancelSearch = () => {
        setIsClickMode(false); //closes the modal
    };

    const getInput = (input) => {
        setEnteredInput(input);
    }

    const getProducer = () => {
        setIsClickMode(true);
        setIsLoading(true);
        functions.getDataProducerFromApi(enteredInput, callback);
    }

    const callback = (data) => {
        setReturnedData(returnedData => [...data]);
        setIsLoading(false);
    }

    return (

        <Modal visible={props.visible} animationType="slide">
            <View style={styles.container}>
                <View style={ImputStyles.inputContainer}>

                    <TextInput style={ImputStyles.textInput}
                      placeholder="Produtor"
                        onChangeText={getInput}
                        value={enteredInput} />

                    <TouchableOpacity
                        style={OkInputButtons.okButton}
                        onPress={() => getProducer()}
                    >
                        <Text style={OkInputButtons.buttonLabel}>OK</Text>
                    </TouchableOpacity>


                </View>


                <View style={GenericStyleButtons.backButton}>

                    <View style={GenericStyleButtons.firstButton}>
                        <TouchableOpacity
                            style={MenuCancelButtons.backTouchable}
                            onPress={props.onCancel}
                        >
                            <Text style={MenuCancelButtons.buttonLabel}>Voltar</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={GenericStyleButtons.secondButton}>
                        <TouchableOpacity
                            style={MenuGoForwardButtons.forwardTouchable}
                            onPress={props.onCancel}
                        >
                            <Text style={MenuGoForwardButtons.buttonLabel}>Início</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <ResultsByProducer visible={isClickMode}
                    onCancel={cancelSearch}
                    myDataAvailablePlease={returnedData}
                    availablePlease={isLoading}
                />
            </View>
        </Modal>

    )

}
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

});
export default FindByProducer;