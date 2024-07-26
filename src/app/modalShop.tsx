import { Button } from '@/components/Button';
import DropdownComponent from '@/components/Dropdown';
import { Input } from '@/components/Input';
import { shops } from '@/server/data';
import { colors } from '@/styles/colors';
import { Link } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { useState } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';

interface ModalShopProps {
    setIsOpenModal: (value: boolean) => void
}

export function ModalShop({ setIsOpenModal }: ModalShopProps) {

    const [ name, setName ] = useState('')
    const [ date, setDate ] = useState('')

    function handleCreateShop(){
        shops.create({name, date})
        setIsOpenModal(false)
    }

  return (
    <View className='w-screen h-screen p-8 pt-16 absolute z-10 inset-0 bg-gray-700/90'>
        <View className='gap-6'>
            <View className='flex-row gap-4 py-3 border-b border-gray-400/25'>
                <Button onPress={() => setIsOpenModal(false)}>
                    <ArrowLeft size={24} color={colors.gray[300]}/>
                </Button>
                <Text className='text-white text-lg font-bold'>Criando lista de compras</Text>
            </View>
            <SafeAreaView className='gap-3'>
                <Input 
                    label='Nome' 
                    placeholder='Digite o nome que vc quer dar para essa compra'
                    onChangeText={setName}   
                />
                <Input 
                    label='Data previa' 
                    placeholder='Qual data pretende fazer essas compras'
                    onChangeText={setDate}
                />

                <Button onPress={handleCreateShop} className='w-full bg-green-400 rounded-full py-2 mt-4'>
                    <Text className='text-white w-full text-center text-lg font-medium'>Criar</Text>
                </Button>
            </SafeAreaView>
        </View>
    </View>
  );
}