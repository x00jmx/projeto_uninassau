import { Image, StyleSheet, View } from "react-native";

export default function Logo() {
    return (
        <View style={styles.logo}>
            <Image source={require("../../../assets/expo.icon/Assets/logo.png")} style={{width: '100%', height: '100%'}} resizeMode="contain"/>
        </View>   
    )
}

const styles = StyleSheet.create({
    logo:{
        width: 290,
        height: 100,
        
}})