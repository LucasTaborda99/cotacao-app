import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { Colors } from '@/constants/Colors';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        navigation.navigate('Options');
    }

    return (
    <View style={styles.container}>
        {/* Imagem Centralizada */}
        <Image source={require('../assets/images/logo-grupo-fertipar.png')} style={styles.logo}/>

        {/* Inputs */}
        <InputField label="Usuário" value={username} onChangeText={setUsername} placeholder="Usuário"/>
        <InputField label="Senha" value={password} onChangeText={setPassword} secureTextEntry placeholder="Senha"/>

        {/* Botão */}
        <Button title="Acessar" onPress={handleLogin}/>

        {/* Link de Recuperação */}
        <TouchableOpacity onPress={() => navigation.navigate('RecoveryPassword')}>
            <Text style={styles.recoveryText}>Esqueci Minha Senha</Text>
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
    recoveryText: {
        marginTop: 15,
        color: Colors.light.tint,
        textAlign: 'center',
    },
});

export default LoginScreen;
