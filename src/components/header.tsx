import { Image, View } from "react-native";

export function Header() {
    return (
        <View className="w-full items-center py-3">
            <Image 
                source={require('@/assets/logo.png')}
                resizeMode="contain"
            />
        </View>
    )
}