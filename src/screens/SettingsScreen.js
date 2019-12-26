import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { MenuButton, Logo } from '../components/header/header'
import { HeaderBackButton } from "react-navigation-stack"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default class SettingsScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
            headerTitle: <Logo />,
            headerBackTitle: 'Settings',
            headerLayoutPresent: 'center',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello. This's Settings screen</Text>
            </View>
        )
    }
}