import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    View
} from 'react-native';

import { CustomButton } from './CustomButton';

import {styles} from './App';

export const About = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Welcome to the Void</Text>
            <CustomButton title="Hewwo" onPress={() => {
                navigation.navigate('Home');
            }}></CustomButton>
        </View>
    );
}
