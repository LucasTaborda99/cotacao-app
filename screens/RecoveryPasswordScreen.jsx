import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { Colors } from '@/constants/Colors';

const RecoveryScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    return (
        <View style={styles.container}>
            {/* Imagem ou logo */}
            <Image source={require('../assets/images/logo-grupo-fertipar.png')} style={styles.logo} />

            {/* Inputs */}
            <InputField label="Usuário" value={username} onChangeText={setUsername} placeholder="Usuário" />
            <InputField label="E-mail" value={email} onChangeText={setEmail} placeholder="E-mail"/>

            {/* Botão para enviar recuperação */}
            <Button title="Recuperar Senha" onPress={() => { /* Lógica de recuperação de senha */ }} />

            {/* Link de navegação de volta para o Login */}
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.backToLoginText}>Voltar para o Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light.background,
    },
    logo: {
        width: 200,
        height: 174.68,
        resizeMode: 'contain',
        marginBottom: 50,
    },
    backToLoginText: {
        marginTop: 15,
        color: Colors.light.tint,
        textAlign: 'center',
    },
});

export default RecoveryScreen;
