import React, { useEffect } from 'react';
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

const style = StyleSheet.create({
  entry: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const ScrollRate = ({ list, update }) => {
    console.log("Scroll", list)
    return (
        <ScrollView style={styles.view}>
            {
                list.map((item) => {
                    return (
                        <View style={style.entry}>
                            <Switch
                                onValueChange={(value) => {item.trigger = value; update(list)}}
                                value={item.trigger}/>
                            <Text>{item.text}</Text>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}

export const Todo = ({ navigation, route }) => {
    const [list, setList] = React.useState(route.params ? route.params.list : []);

    console.log("todo", list);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>You need to do</Text>
            <ScrollRate list={list} update={setList}></ScrollRate>
            <CustomButton title="Add a task" onPress={() => {
                navigation.navigate('Add', {list: list, update: setList});
            }} ></CustomButton>
        </View>
    );
}
