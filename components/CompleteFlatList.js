import React from 'react';
import { View, Text, StyleSheet, Modal, Button, FlatList, TouchableOpacity } from 'react-native';
import MenuCancelButtons from '../constants/MenuCancelButtons';
import MenuGoForwardButtons from '../constants/MenuGoForwardButtons';
import GenericStyleButtons from '../constants/GenericStyleButtons';
import Outputs from '../constants/Outputs';
import Separator from './Separator';
import GenericLabels from '../constants/GenericLabels';

  const CompleteFlatList = ( props ) => {
             
   return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.container}>
                <View >
                    <Text style={GenericLabels.completeListIntroText}> Lista completa</Text>
                    <View style={Outputs.completeOutput}>
                        {props.availablePlease ?
                            <View style={Outputs.completeListWaitText}><Text>Por favor aguarde...</Text></View>
                            :
                            <FlatList
                                keyExtractor={(item, index) => item._id}
                                data={props.myDataAvailablePlease}
                                renderItem={item => (
                                    <View style={styles.internalOutput}>
                                        <Text style={Outputs.outputText}>
                                            ID: {item.item['_id']} {"\n"}
                                            Nome: {item.item['Vinho ou Marca']}{"\n"}
                                            Produtor: {item.item['Produtor']}{"\n"}
                                            Qualidade: {item.item['Qualidade']} {"\n"}
                                        </Text>
                                        <Separator />
                                    </View>
                                )}>
                            </FlatList>
                        }
                    </View>
                </View>

                <View style={GenericStyleButtons.backButton}>
                    <View style={GenericStyleButtons.firstButton}>
                        <TouchableOpacity
                            style={MenuCancelButtons.backTouchable}
                            onPress={props.onCancel}>
                            <Text style={MenuCancelButtons.buttonLabel}>Voltar</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={GenericStyleButtons.secondButton}>
                        <TouchableOpacity
                            style={MenuGoForwardButtons.forwardTouchable}
                             onPress={ () => {}}> 
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
export default CompleteFlatList;




/*
COISAS RETIRADAS DO CODIGO MAS Q N QUERO APAGAR:

  <Button title="teste"
                     onPress={() => alert(JSON.stringify(props.myDataAvailablePlease))} />
                    onPress={()=>  alert(Array.isArray(props.myDataAvailablePlease))}




                           <Spinner
                                   visible={props.visible}
                                   textContent={'Por favor aguarde...'}
                                   textStyle={styles.spinnerTextStyle}
                               />

*/
