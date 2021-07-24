import React from 'react';
import {View, Image, TouchableOpacity, Button} from 'react-native';
import styles from './styles';



const Header = () => {

  return (

    <View style={styles.container}>

        <TouchableOpacity>

            <Image style={styles.logo} source={require('../../assets/images/logo.png')} />

        </TouchableOpacity>

        <TouchableOpacity >

        <Image style={styles.menu} source={require('../../assets/images/menu.png')} />

        </TouchableOpacity>

    </View>

  );

};

export default Header;