import { StyleSheet, Platform, StatusBar } from 'react-native'


export const globalStyles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        paddingHorizontal: 20
    },
    title: {
        fontFamily: 'poppins-bold',
        fontSize: 37,
    }
})