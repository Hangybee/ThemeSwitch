import { StatusBar, StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'
import { useColorScheme } from 'nativewind'

const App = () => {
    const {colorScheme, toggleColorScheme} = useColorScheme()
    console.log('1111111111',colorScheme)
    return (
        <View className="flex-1 flex justify-center items-center bg-white dark:bg-neutral-900 space-y-6">
       <StatusBar style={colorScheme=="dark"? "light": "dark"} />

       <View className="flex-row justify-center items-center space-x-2">
       <Text className="text-xl text-black dark:text-white">Dark Mode</Text>
            <Switch  value={colorScheme==='dark'} onChange={toggleColorScheme} />
            </View>
            <Text className="mx-4 text-justify" style={colorScheme=='dark'? styles.textWhite: styles.textBlack}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
        alignContent:'center',
        justifyContent:'center'
    },
    textWhite:{
        color:'white'
    },
    textBlack:{
        color:'black'
    }
})