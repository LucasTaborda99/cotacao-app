import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import OptionsMenu from './OptionsMenu';

const HeaderComponent = ({ handleOptionSelect, handleReturn, styles }) => {
    return (
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
                <Icon name="arrow-back" size={30} />
            </TouchableOpacity>
        </View>
    );
};

export default HeaderComponent;