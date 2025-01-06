import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Colors } from '@/constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import OptionsMenu from '@/components/OptionsMenu';
import InputField from '@/components/InputField';
import HeaderComponent from '@/components/HeaderComponent';

const AdicionarCotacao = ({ navigation }) => {
    const [numeroCotacao, setNumeroCotacao] = useState('');
    const [dataHora, setDataHora] = useState('');
    const [dataValidade, setDataValidade] = useState('');
    const [diasRetirada, setDiasRetirada] = useState('');
    const [supervisor, setSupervisor] = useState('');
    const [gerente, setGerente] = useState('');

    const handleOptionSelect = (option) => {
        console.log('Opção selecionada:', option);
    };

    const handleReturn = () => {
        navigation.navigate('Options'); // Substitua 'OptionsScreen' pelo nome correto da tela
    };

    const handleSubmit = () => {
        console.log({ numeroCotacao, dataHora, dataValidade, diasRetirada, supervisor, gerente });
    };

    return (
        <View style={styles.container}>
            {/* Topo com menu, logo e ícone de retorno */}
            <HeaderComponent
                handleOptionSelect={handleOptionSelect}
                handleReturn={handleReturn}
                styles={headerStyles}
            />

            {/* Campo N° Cotação e Data/Hora */}
            <View style={styles.row}>
                <View style={styles.inputContainer}>
                    <InputField label="N° Cotação" value={numeroCotacao} onChangeText={setNumeroCotacao} placeholder="Digite o N° Cotação" keyboardType="numeric"/>
                </View>
                <View style={styles.inputContainer}>
                    <InputField label="Data/Hora" value={dataHora} onChangeText={setDataHora} placeholder="Digite a Data/Hora" keyboardType="numeric"/>
                </View>
            </View>

            {/* Campo Data Validade e N° Dias p/ Retirada */}
            <View style={styles.row}>
                <View style={styles.inputContainer}>
                    <InputField label="Data Validade" value={dataValidade} onChangeText={setDataValidade} placeholder="Digite a Data Validade"/>
                </View>
                <View style={styles.inputContainer}>
                    <InputField label="N° Dias p/ Retirada" value={diasRetirada} onChangeText={setDiasRetirada} placeholder="Digite os Dias" keyboardType="numeric"/>
                </View>
            </View>

            {/* Campo Supervisor */}
            <Text style={styles.label}>Supervisor</Text>
            <View style={styles.selectContainer}>
                <Picker
                    selectedValue={supervisor}
                    onValueChange={(itemValue) => setSupervisor(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Selecione o Supervisor" value=""/>
                    <Picker.Item label="Supervisor 1" value="supervisor1" />
                    <Picker.Item label="Supervisor 2" value="supervisor2" />
                </Picker>
            </View>

            {/* Campo Gerente */}
            <Text style={styles.label}>Gerente</Text>
            <View style={styles.selectContainer}>
                <Picker
                    selectedValue={gerente}
                    onValueChange={(itemValue) => setGerente(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Selecione o Gerente" value="" />
                    <Picker.Item label="Gerente 1" value="gerente1" />
                    <Picker.Item label="Gerente 2" value="gerente2" />
                </Picker>
            </View>

            {/* Botão para salvar */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: Colors.light.background,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputContainer: {
        flex: 1,
        marginHorizontal: 5, // Espaçamento entre os inputs
    },
    label: {
        fontSize: 14,
        marginBottom: 5,
        color: '#333',
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: Colors.dark.border,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: Colors.light.inputBackground,
    },
    selectContainer: {
        marginBottom: 15,
        borderWidth: 1,           // Adiciona borda ao redor do campo
        borderColor: Colors.dark.border, // Define a cor da borda
        borderRadius: 5,         // Borda arredondada
        backgroundColor: Colors.light.inputBackground, // Cor de fundo do campo
        paddingHorizontal: 10,    // Adiciona preenchimento lateral
    },
    picker: {
        height: 52,             // Define uma altura apropriada
        color: Colors.dark.text, // Ajusta a cor do texto
        padding: 0,
    },
    button: {
        backgroundColor: 'black',
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

// Estilo específico para o HeaderComponent
const headerStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 20,
        width: '100%',
    },
    menuContainer: {
        width: 50,
        alignItems: 'flex-start',
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    returnIcon: {
        width: 50,
        alignItems: 'flex-end',
    },
});

export default AdicionarCotacao;