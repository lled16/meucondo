import * as React from 'react';
import { Button, TextInput } from 'react-native-paper';
import styles from '../login/css/login';
import { View, Image } from 'react-native';



const LoginScreen = () => {
    const [text, setText] = React.useState("");
    const [pass, setPass] = React.useState("");
    return (

        <View style={styles.screen}>
            <label style={styles.labelPortaria}>
                PORTARIA
            </label>

            <Image
                source={require('../../../assets/images/loginImages/condo.png')}
                style={styles.imageCondo}
            />
            <TextInput
                mode="outlined"
                label="USUÁRIO"
                value={text}
                onChangeText={text => setText(text)}
                style={styles.input}
            />

            <TextInput
                mode="outlined"
                label="SENHA"
                value={pass}
                onChangeText={text => setPass(text)}
                style={styles.password}
                secureTextEntry={true}
            />
            <Button style={styles.loginButton} mode="contained" onPress={() => console.log('Pressed')}>
                Acessar
            </Button>
        </View>
    );
};

export default LoginScreen;