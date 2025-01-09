import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Colors } from '@/constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import OptionsMenu from '@/components/OptionsMenu';
import InputField from '@/components/InputField';
import HeaderComponent from '@/components/HeaderComponent';

const ListarCotacoes = ({ navigation }) => {

    const handleOptionSelect = (option) => {
        console.log('Opção selecionada:', option);
    };

    const handleReturn = () => {
        navigation.navigate('Options');
    };

    return (
        <View style={styles.container}>
            {/* Topo com menu, logo e ícone de retorno */}
            <HeaderComponent
                handleOptionSelect={handleOptionSelect}
                handleReturn={handleReturn}
                styles={headerStyles}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: Colors.light.background,
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

export default ListarCotacoes;