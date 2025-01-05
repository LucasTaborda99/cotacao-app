import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import Icons from 'react-native-vector-icons/MaterialIcons'

const OptionsMenu = ({ onSelectOption }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleMenu = () => {
        setIsVisible(!isVisible);
    };

    const handleOptionSelect = (option) => {
        onSelectOption(option);
        toggleMenu();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
                <View style={[styles.line, isVisible ? styles.rotateLine1 : null]} />
                <View style={[styles.line, isVisible ? styles.rotateLine2 : null]} />
                <View style={[styles.line, isVisible ? styles.rotateLine3 : null]} />
            </TouchableOpacity>

            {isVisible && (
                <View style={styles.menu}>
                    <TouchableOpacity onPress={() => handleOptionSelect('Conta')} style={styles.menuItem}>
                    {/* Ícone de usuário */}
                        <Icons name="account-circle" size={24} color={Colors.light.text} style={styles.icon} />
                        <Text style={styles.option}>Conta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleOptionSelect('Sair')} style={styles.menuItem}>
                        {/* Ícone de sair */}
                        <Icons name="exit-to-app" size={24} color={Colors.light.text} style={styles.icon} />
                        <Text style={styles.option}>Sair</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'relative',
    },
    menuButton: {
        width: 40,
        height: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        paddingHorizontal: 10, // Adicionando padding para melhorar a área de toque
        paddingVertical: 5, // Adicionando padding para melhorar a área de toque
    },
    line: {
        width: 30,
        height: 3,
        backgroundColor: Colors.light.text,
        borderRadius: 2,
    },
    // Rotação para formar um X
    rotateLine1: {
        transform: [{ rotate: '45deg' }],
        position: 'absolute',
    },
    rotateLine2: {
        opacity: 0, // Esconde a linha do meio
    },
    rotateLine3: {
        transform: [{ rotate: '-45deg' }],
        position: 'absolute',
    },
    menu: {
        backgroundColor: Colors.light.background,
        padding: 10,
        position: 'absolute',
        top: 40,
        borderRadius: 8,
        boxShadow: '0px 5px 15px rgba(0,0,0,0.1)',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    icon: {
        marginRight: 10, // Espaçamento entre o ícone e o texto
    },
    option: {
        paddingVertical: 10,
        fontSize: 16,
        color: Colors.light.text,
        width: '100',
    },
});

export default OptionsMenu;
