import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Colors } from '@/constants/Colors'; // Ajuste o caminho para o Colors conforme necessário
import Icon from 'react-native-vector-icons/MaterialIcons'; // Certifique-se de instalar react-native-vector-icons
import OptionsMenu from '@/components/OptionsMenu'; // Certifique-se de ter o componente OptionsMenu implementado

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
            <View style={styles.header}>
                {/* Menu de Opções no canto superior esquerdo */}
                <View style={styles.menuContainer}>
                    <OptionsMenu onSelectOption={handleOptionSelect} />
                </View>

                {/* Imagem pequena centralizada no topo */}
                <Image
                    source={require('../assets/images/logo-grupo-fertipar.png')}
                    style={styles.logo}
                />

                {/* Ícone de retorno no canto superior direito */}
                <TouchableOpacity onPress={handleReturn} style={styles.returnIcon}>
                    <Icon name="arrow-back" size={24}/>
                </TouchableOpacity>
            </View>

            {/* Campo N° Cotação e Data/Hora */}
            <View style={styles.row}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>N° Cotação</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o N° Cotação"
                        value={numeroCotacao}
                        onChangeText={setNumeroCotacao}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Data/Hora</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite a Data/Hora"
                        value={dataHora}
                        onChangeText={setDataHora}
                    />
                </View>
            </View>

            {/* Campo Data Validade e N° Dias p/ Retirada */}
            <View style={styles.row}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Data Validade</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite a Data Validade"
                        value={dataValidade}
                        onChangeText={setDataValidade}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>N° Dias p/ Retirada</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite os Dias"
                        keyboardType="numeric"
                        value={diasRetirada}
                        onChangeText={setDiasRetirada}
                    />
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
                    <Picker.Item label="Selecione o Supervisor" value="" color='#000000' />
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
        zIndex: 1, // Garantir que o menu fique acima de outros elementos,
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    inputContainer: {
        flex: 1,
        marginHorizontal: 5, // Espaçamento entre os inputs
    },
    label: {
        fontSize: 16,
        color: '#000000',
        marginBottom: 5,
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
    },
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});



export default AdicionarCotacao;
