import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { MenuButton, Logo } from '../components/header/header'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <MenuButton onPress={() => navigation.openDrawer() } />,
            headerTitle: <Logo />,
            headerBackTitle: 'Home',
            headerLayoutPresent: 'center',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello. This's Home screen</Text>
            </View>
        )
    }
}