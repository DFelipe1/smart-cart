import { Shop } from '@/types/shop';
import { BadgeDollarSign, MoreVertical, ShoppingBasket } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';
import { Button } from './Button';
import { colors } from '@/styles/colors';
import { Link, router } from 'expo-router';

type Props = {
  shop: Shop
}





export function Shopping({ shop }: Props ) {

  function navigate() {
    router.navigate({pathname: '/cart/[id]', params: { id: shop.id}})
  }

  return (
    <Pressable onPress={navigate} className='w-full h-28 p-3 flex-row justify-between bg-gray-500 border border-gray-400 rounded-lg mb-3'>
      <View className='flex-row gap-4 items-center'>
        <View className='p-4 bg-gray-600 rounded-lg justify-center shadow-sm'>
          <ShoppingBasket size={28} color={colors.white}/>
        </View>
        <View className='w-28 gap-2'>
          <Text className='text-gray-100 text-lg font-bold leading-tight line-clamp-2'>{shop.name}</Text>
          <Text className='text-gray-300 text-sm font-regular leading-tight'>{shop.date}</Text>
        </View>
      </View>

      <View className='flex-row gap-2 items-center'>
        <View>
          <Text className='text-gray-300 text-xs font-light leading-tight mb-1'>Valor esperado</Text>
          <View className='flex-row items-center gap-1'>
            <BadgeDollarSign size={18} color={colors.green[400]}/>
            <Text className='text-green-400 text-lg font-semibold leading-tight'>
              {shop.price?.toFixed(2)}
            </Text>
          </View>  
        </View>
        <Button>
          <MoreVertical size={24} color={colors.gray[300]}/>
        </Button>
      </View>
    </Pressable>
  );
}