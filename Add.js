import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    View,
    ActivityIndicator,
    ScrollView,
    Switch
} from 'react-native';

import {styles} from './App';
import { CustomButton } from './CustomButton';

export const Add = ({ navigation, route }) => {
    const [task, setTask] = React.useState('');

    const addEntry = () => {
        console.log(route.params);
        route.params.update([...route.params.list, {text: task, trigger: false}]);
        navigation.navigate('Todo', {list: route.params.list});
    }

    return (
        <View style={styles.container}>
            {/* <Text style={styles.text}>You need to do</Text> */}
            <TextInput style={styles.input} placeholder={"Enter a Task"} onChangeText={setTask}></TextInput>
            <CustomButton title="Add" onPress={addEntry}></CustomButton>
        </View>
    );
}
