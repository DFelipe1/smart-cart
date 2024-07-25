import { Button } from '@/components/Button';
import DropdownComponent from '@/components/Dropdown';
import { colors } from '@/styles/colors';
import { Link } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
const categories = [
    { label: 'Padaria', value: '1' },
    { label: 'Legume', value: '2' },
    { label: 'Carne', value: '3' },
    { label: 'Fruta', value: '4' },
    { label: 'Bebida', value: '5' },
];

const metrics = [
    { label: 'Un.', value: '1' },
    { label: 'L.', value: '2' },
    { label: 'Kg.', value: '3' },
];

interface ModalShopProps {
    setIsOpenModal: (value: boolean) => void
}

export function ModalShop({ setIsOpenModal }: ModalShopProps) {


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
                <View className='gap-2'>
                    <Text className='text-gray-200'>Nome:</Text>
                    <TextInput
                        className='w-full p-2 bg-gray-500 border border-gray-300/30 rounded-md'
                    />
                </View>

                <View className='gap-2'>
                    <Text className='text-gray-200'>Data Prevista:</Text>
                    <TextInput
                        className='w-full p-2 bg-gray-500 border border-gray-300/30 rounded-md'
                    />
                </View>

                <Button className='w-full bg-green-400 rounded-full py-2 mt-4'>
                    <Text className='text-white w-full text-center text-lg font-medium'>Adicionar</Text>
                </Button>
            </SafeAreaView>
        </View>
    </View>
  );
}