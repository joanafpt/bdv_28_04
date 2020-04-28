import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import MenuCancelButtons from '../constants/MenuCancelButtons';
import MenuGoForwardButtons from '../constants/MenuGoForwardButtons';
import GenericStyleButtons from '../constants/GenericStyleButtons';
import Outputs from '../constants/Outputs';
import Separator from './Separator';
const ResultsByProducer = props => {

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.container}>
                <View style={Outputs.output}>
                    {props.availablePlease ?
                        <View style={Outputs.waitText}><Text>Por favor aguarde...</Text></View>
                        :
                        <View>
                            {typeof (props.myDataAvailablePlease[0]) !== 'string' ?
                                <FlatList
                                    keyExtractor={(item, index) => item._id}
                                    data={props.myDataAvailablePlease}
                                    renderItem={item => (
                                        <View style={Outputs.internalOutput}>
                                            <Text style={Outputs.outputText}>
                                            ID: {item.item['_id']} {"\n"}
                                            Nome: {item.item['Vinho ou Marca']}{"\n"}
                                            Produtor: {item.item['Produtor']}{"\n"}
                                            Qualidade: {item.item['Qualidade']} {"\n"}
                                            </Text>
                                            <Separator/> 
                                        </View>
                                    )}>
                                </FlatList>
                                :
                                <FlatList
                                keyExtractor={(item, index) => Math.random().toString()}
                                    data={props.myDataAvailablePlease[0]}
                                    renderItem={item => (
                                        <View style={Outputs.internalOutput}>
                                            <Text  style={Outputs.outputText}>
                                                {props.myDataAvailablePlease}
                                            </Text >
                                        </View>
                                    )}>
                                </FlatList>
                            }</View>
                    }
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
                            onPress={() => { alert("something happening here") }}
                        >
                            <Text style={MenuGoForwardButtons.buttonLabel}>Início</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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

export default ResultsByProducer;