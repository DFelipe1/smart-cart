import { Header } from "@/components/header";
import { colors } from "@/styles/colors";
import { ListFilter } from "lucide-react-native";
import { Text, View } from "react-native";


export default function Home() {
    return (
        <View className="flex-1 bg-gray-700 px-8 py-12">
           <Header/>

           <View className="w-full flex-row justify-between mt-6">
            <Text className="text-lg text-white font-bold">Minhas Compras</Text>
            <View>
                <ListFilter color={colors.white} size={24}/>
            </View>
           </View>
        </View>
    )
}