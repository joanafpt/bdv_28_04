import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Modal } from 'react-native';
import Search from './Search';

const Squares = props => {
    const [isClickMode, setIsClickMode] = useState(false);

    const vaiPorFormulario = () => {
        setIsClickMode(false);
    }

    const cancelForm = () => {
        setIsClickMode(false); //closes the modal
    };


    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.container}>
                <View style={styles.sideBySide}>
                    <View style={styles.square}>
                        <Text style={styles.text}>Nome</Text>
                        <View style={styles.button}>
                            <Button style={styles.button}
                                title="OK"
                                onPress={() => setIsClickMode(true)} />
                        </View>
                    </View>
                    <View style={styles.square}>
                        <Text style={styles.text}>Produtor</Text>
                        <View style={styles.button}>
                            <Button style={styles.button}
                                title="OK"
                                onPress={() => setIsClickMode(true)} />
                        </View>
                    </View>
                </View>
                <View style={styles.sideBySide}>
                    <View style={styles.square}>
                        <Text style={styles.text}>Variedade</Text>
                        <View style={styles.button}>
                            <Button style={styles.button}
                                title="OK"
                                onPress={() => setIsClickMode(true)} />
                        </View>
                    </View>
                    <View style={styles.square}>
                        <Text style={styles.text}>Todos</Text>
                        <View style={styles.button}>
                            <Button style={styles.button}
                                title="OK"
                                onPress={() => alert('true')} />
                        </View>
                    </View>
                </View>
                <View style={styles.backButton}>
                    <Button
                        title="Voltar ao início"
                        color="#ff1a1a"
                        onPress={props.onCancel} />
                </View>

            </View>

            <Search visible={isClickMode}
                onSelect={vaiPorFormulario}
                onCancel={cancelForm} />


        </Modal>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightsalmon',
    },
    sideBySide: {
        flexDirection: 'row',
    },
    square: {
        width: 130,
        height: 130,
        borderWidth: 1.2,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: 'powderblue',
        margin: 10,
    },
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
    backButton: {
        marginTop: '4%',

    },
});

export default Squares;
