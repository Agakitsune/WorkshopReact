import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    View
} from 'react-native';

import { CustomButton } from './CustomButton';

import {styles} from './App';

export const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the Void</Text>
            <TextInput style={styles.input} placeholder={"What do you want?"}></TextInput>
            <CustomButton title="Money Converter" onPress={() => {
                navigation.navigate('Money');
            }} ></CustomButton>
            <CustomButton title="About" onPress={() => {
                navigation.navigate('About');
            }} ></CustomButton>
            <CustomButton title="Todo" onPress={() => {
                navigation.navigate('Todo');
            }} ></CustomButton>
        </View>
    );
}
