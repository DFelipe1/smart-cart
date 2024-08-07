import { Button } from "@/components/Button";
import { Shopping } from "@/components/Shopping";
import { Header } from "@/components/header";
import { shops } from "@/server/data";
import { colors } from "@/styles/colors";
import { ListFilter, Plus } from "lucide-react-native";
import { FlatList, Text, View } from "react-native";
import { ModalShop } from "./modalShop";
import { useEffect, useState } from "react";

export default function Home() {

    const [isOpenModal, setIsOpenModal] = useState(false)

    const data = shops.getAll()

    return (
        <View className="flex-1 gap-6 bg-gray-700 p-8 pt-16 relative">
            <Header/>

            <View className="w-full flex-row justify-between mt-6">
                <Text className="text-lg text-white font-bold">Minhas Compras</Text>
                <Button className="py-1 px-3 bg-gray-500 rounded-full">
                    <ListFilter color={colors.white} size={24}/>
                </Button>
            </View>

                
            <FlatList data={data} renderItem={({item}) => <Shopping  key={item.id} shop={item}/>} keyExtractor={item => item.id || '0'}/>
            
            <Button onPress={() => setIsOpenModal(true)} className="w-10 h-10 p-8 justify-center items-center bg-white rounded-full absolute bottom-10 right-8 shadow">
                <Plus size={32} color={colors.gray[700]}/>
            </Button>

            {isOpenModal && (
                <ModalShop setIsOpenModal={setIsOpenModal}/>
            )}
        </View>
    )
}