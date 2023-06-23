import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';

import {styles} from './App';

export const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>{title}</Text>
        </TouchableOpacity>
    )
}
