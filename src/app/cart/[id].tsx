import { Button } from "@/components/Button";
import { Item } from "@/components/Item";
import { Header } from "@/components/header";
import { colors } from "@/styles/colors";
import { Link, Redirect, useLocalSearchParams } from "expo-router";
import { ArrowLeft, BadgeDollarSign, Plus } from "lucide-react-native";
import { FlatList, Text, View } from "react-native";

import { shops } from '@/server/data'
import { useEffect, useState } from "react";
import { ModalItem } from "./modalItem";



export default function Card() {

    const { id } = useLocalSearchParams();

    const [ totalPrice, setTotalPrice ] = useState(0)
    const [isOpenModal, setIsOpenModal] = useState(false)

    const data = shops.getAll()
    const shop = data.find((element) => element.id === id)

    if(shop === undefined){
        return <Redirect href="/" />
    } 

    function calcPrice() {
        let total = 0
        setTotalPrice(0)
        if(shop?.items !== undefined && shop.items.length > 0){
            shop.items.map((item) => total += item.price)
            setTotalPrice(total)
        }
    }

    useEffect(() => {
        calcPrice()
    },[isOpenModal])

    return (
        <View className="flex-1 gap-6 bg-gray-700 p-8 pt-16 relative">
           <Header/>

           <View className="w-full flex-row justify-between items-center mt-6">
            <View className="flex-row gap-3 items-center">
                <Link href={'/'}>
                    <ArrowLeft size={24} color={colors.gray[400]}/>
                </Link>
                <Text className="text-lg text-white font-bold">{shop?.name}</Text>
            </View>
            <View>
                <Text className='text-gray-300 text-xs font-light leading-tight mb-1'>Valor esperado</Text>
                <View className='flex-row items-center gap-1'>
                    <BadgeDollarSign size={18} color={colors.green[400]}/>
                    <Text className='text-green-400 text-lg font-semibold leading-tight'>
                        {totalPrice.toFixed(2)}
                    </Text>
                </View>  
            </View>
           </View>

            <FlatList data={shop.items} renderItem={({item}) => <Item key={item.id} item={item}/>} keyExtractor={item => item.id}/>

            <Button onPress={() => setIsOpenModal(true)} className="w-10 h-10 p-8 justify-center items-center bg-white rounded-full absolute bottom-10 right-8 shadow">
                <Plus size={32} color={colors.gray[700]}/>
            </Button>

            {isOpenModal && (
                <ModalItem 
                    setIsOpenModal={setIsOpenModal}
                    id={id}
                />
            )}
        </View>
    )
}