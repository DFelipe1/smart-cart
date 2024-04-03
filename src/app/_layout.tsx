import "@/styles/global.css"

import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen"

import {
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    useFonts
} from '@expo-google-fonts/poppins'
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync()

export default function Layout() {
    const [ fontsLoaded ] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_700Bold,
    })

    if (fontsLoaded) {
        SplashScreen.hideAsync()
    }

    return (
        <>
            <StatusBar style="light"/>
            {fontsLoaded && <Slot/>}
        </>
    )
}