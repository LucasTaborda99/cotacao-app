import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import OptionsMenu from '../components/OptionsMenu';
import Icons from 'react-native-vector-icons/MaterialIcons';

const OptionsScreen = ({ navigation }) => {
    const handleOptionSelect = (option) => {
        if (option === 'Cotação') {
            // Navegar para a tela de Adicionar Cotação
            navigation.navigate('AdicionarCotacao');
        } else if (option === 'Listar') {
            // Navegar para a tela de Listar Cotação
            navigation.navigate('ListarCotacoes');
        }
    };

    return (
        <View style={styles.container}>
            {/* Menu de Opções no canto superior esquerdo */}
            <View style={styles.menuContainer}>
                <OptionsMenu onSelectOption={handleOptionSelect} />
            </View>

            {/* Imagem pequena centralizada no topo */}
            <Image source={require('../assets/images/logo-grupo-fertipar.png')} style={styles.logo} />

            {/* Ícones de opções abaixo da imagem */}
            <View style={styles.optionsContainer}>
                <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionSelect('Cotação')}>
                    <Icons name="library-add" size={90} color={'#009951'} style={styles.icon} />
                    <Text style={styles.optionText}>Adicionar Cotação</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionSelect('Listar')}>
                    <Icons name="format-list-bulleted" size={90} color={'#009951'} style={styles.icon} />
                    <Text style={styles.optionText}>Listar Cotações</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start', // Mudado para começar do topo
        alignItems: 'center',
        backgroundColor: Colors.light.background,
    },
    menuContainer: {
        position: 'absolute', // Para garantir que fique no canto superior esquerdo
        top: 20, // Distância do topo
        left: 20, // Distância da lateral esquerda
        zIndex: 1, // Garantir que o menu fique acima de outros elementos,
        marginTop: 40,
    },
    logo: {
        width: 50, // Imagem menor
        height: 50,
        resizeMode: 'contain',
        marginTop: 20, // Distância do topo
    },
    optionsContainer: {
        flexDirection: 'row', // Empilhar ícones e textos verticalmente
        justifyContent: 'space-between', // Centraliza os itens na direção vertical
        alignItems: 'center', // Centraliza os itens na direção horizontal
        width: '100%',
        marginTop: 40, // Espaçamento entre a imagem e os botões
        padding: 20, // Espaçamento interno
    },
    optionButton: {
        alignItems: 'center', // Centraliza o ícone e o texto dentro do botão
        marginBottom: 20, // Espaço entre os botões
    },

    optionText: {
        color: '#000000',
        fontSize: 16,
    },
    icon: {
        marginBottom: 10, // Espaçamento entre o ícone e o texto
    },
});

export default OptionsScreen;
