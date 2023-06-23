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

const ScrollRate = ({ list, update }) => {
    console.log("Scroll", list)
    return (
        <ScrollView styles={styles.view}>
            {
                list.map((item) => {
                    return (
                        <View styles={styles.entry}>
                            <Switch
                                onValueChange={(value) => {item.trigger = value; update(list)}}
                                value={item.trigger}/>
                            <Text>{item.text}</Text>
                        </View>
                    )
                })
                // list.forEach((entry) => {
                //     return (
                //         <View style={styles.entry}>
                //             {/* <Switch */}
                //                 {/* // onValueChange={() => {entry.trigger = !entry.trigger; update(list)}} */}
                //                 {/* // value={entry.trigger}/> */}
                //             <Text>{entry.text}</Text>
                //         </View>
                //     )
                // })
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
