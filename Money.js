import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    View,
    ActivityIndicator
} from 'react-native';

import {styles} from './App';
import { CustomButton } from './CustomButton';

function convert(base, to, amount) {
    return amount;
}

const key = "crava1b4hdgtngbek4b2sginkq4fdp9e89e2e0pori98pjkc498brqo";

export const Money = ({ navigation }) => {
    const [base, onChangeBase] = React.useState('');
    const [to, onChangeTo] = React.useState('');
    const [amount, onChangeAmount] = React.useState('');
    const [value, setValue] = React.useState('');
    const [isLoading, setLoading] = React.useState(false);

    const convert = async () => {
        setLoading(true);
        const url = `https://anyapi.io/api/v1/exchange/convert?base=${base}&to=${to}&amount=${amount}&apiKey=${key}`;
        try {
            const response = await fetch(url);
            const json = await response.json();
            setValue(json.converted);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Base:</Text>
            <TextInput
                style={styles.input}
                placeholder={"Base"}
                onChangeText={onChangeBase} />
            <Text>Amount:</Text>
            <TextInput
                style={styles.input}
                placeholder={"Amount"}
                onChangeText={onChangeAmount} />
            <Text>To:</Text>
            <TextInput
                style={styles.input}
                placeholder={"To"}
                onChangeText={onChangeTo} />
            {isLoading ? (
                <>
                    <Text>Loading...</Text>
                    <ActivityIndicator size='large'/>
                </>
            ) : (
                <Text>{value}</Text>
            )}
            <CustomButton title={"Convert"} onPress={convert}></CustomButton>
            <CustomButton title={"See the Rates"} onPress={() => {
                navigation.navigate('Rate');
            }}></CustomButton>
        </View>
    );
}
