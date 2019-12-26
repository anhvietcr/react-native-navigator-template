import React from 'react'
import {
    Image,
    Dimensions,
    TouchableOpacity,
    View,
} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"

const deviceWith = Dimensions.get("window").width;

export class Logo extends React.Component {
    render() {
        return (
            <View style={{flex: 0.8}}>
                <Image 
                    source={require('../../assets/logo.png')}
                    resizeMode="contain"
                    style={{
                        width: 140,
                        marginTop: 15,
                        alignSelf: 'center'
                    }}
                />
            </View>
        )
    }
}

export class MenuButton extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Icon 
                    name="md-menu"
                    size={30}
                    style={{
                        color: 'black',
                        paddingLeft: 10,
                    }}
                    />
            </TouchableOpacity>
        )
    }
}