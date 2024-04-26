import { Button } from "@/components/Button";
import { Shopping } from "@/components/Shopping";
import { Header } from "@/components/header";
import { colors } from "@/styles/colors";
import { ListFilter } from "lucide-react-native";
import { FlatList, Text, TouchableOpacity, View } from "react-native";


export default function Home() {
    const data = [
        {
            id: "1",
            name: "Festunha da minha gata",
            date: "06/Jun - 9AM",
            price: "25,90",
            items: {
                id: "1",
                name: "Batata",
                category: "fruta",
                unity: 2,
                metric: "Kg",
                price: "25,90",
            }

        },
        {
            id: "2",
            name: "Compras do mês",
            date: "06/Jun",
            price: "25,90",
            items: {
                id: "1",
                name: "Batata",
                category: "fruta",
                unity: 2,
                metric: "Kg",
                price: "25,90",
            }

        },
        {
            id: "3",
            name: "sacolão",
            date: "06/Jun",
            price: "25,90",
            items: {
                id: "1",
                name: "Batata",
                category: "fruta",
                unity: 2,
                metric: "Kg",
                price: "25,90",
            }

        },
    ];

    return (
        <View className="flex-1 gap-6 bg-gray-700 p-8 pt-16">
           <Header/>

           <View className="w-full flex-row justify-between mt-6">
            <Text className="text-lg text-white font-bold">Minhas Compras</Text>
            <Button className="py-1 px-3 bg-gray-500 rounded-full">
                <ListFilter color={colors.white} size={24}/>
            </Button>
           </View>

            
           <FlatList data={data} renderItem={({item}) => <Shopping key={item.id} shop={item}/>} keyExtractor={item => item.id}/>
        </View>
    )
}