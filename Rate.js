import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    View,
    ActivityIndicator,
    ScrollView
} from 'react-native';

import {styles} from './App';
import { CustomButton } from './CustomButton';

const key = "crava1b4hdgtngbek4b2sginkq4fdp9e89e2e0pori98pjkc498brqo";

const ScrollRate = ({ data }) => {
    return (
        <ScrollView styles={styles.view}>
            {
                Object.entries(data).map(([key, value]) => {
                    return (
                        <Text>{key}: {value}</Text>
                    )
                })
            }
        </ScrollView>
    )
}

export const Rate = ({ navigation }) => {
    const [base, onChangeBase] = React.useState('');
    const [value, setValue] = React.useState({});
    const [isLoading, setLoading] = React.useState(false);

    const query = async () => {
        setLoading(true);
        const url = `https://anyapi.io/api/v1/exchange/rates?base=${base}&apiKey=${key}`;
        try {
            const response = await fetch(url);
            const json = await response.json();
            setValue(json.rates);
            console.log(json.rates);
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
            {isLoading ? (
                <>
                    <Text>Loading...</Text>
                    <ActivityIndicator size='large'/>
                </>
            ) : (
                <ScrollRate data={value} />
            )}
            <CustomButton title={"See the Rate"} onPress={query}></CustomButton>
            <CustomButton title={"Convert Money"} onPress={() => {
                navigation.navigate('Money');
            }}></CustomButton>
        </View>
    );
}