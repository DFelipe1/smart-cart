import { useState } from 'react';
import { AppleIcon, BadgeDollarSign, MoreVertical, ShoppingBasket } from 'lucide-react-native';
import { Switch, Text, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { Button } from './Button';
import { colors } from '@/styles/colors';
import { Items } from '@/types/Item';

type Props = {
  item: Items
}

export function Item({item} : Props) {


  return (
    <View className='w-full h-28 p-3 flex-row justify-between bg-gray-500 border border-gray-400 rounded-lg mb-3'>
      <View className='flex-row gap-4 items-center'>
        <View className='p-4 bg-gray-600 rounded-lg justify-center shadow-sm'>
          <BouncyCheckbox 
            size={25}
            fillColor="white"
            unFillColor="transparent"
            iconStyle={{borderRadius: 4, backgroundColor: 'transparent'}}
            innerIconStyle={{borderRadius: 4}}
            style={{  width: 25, height: 25 }}
            onPress={(isChecked: boolean) => {console.log(isChecked)}}
          />
        </View>
        <View className='w-28 gap-2'>
          <View className='flex-row gap-4 items-center'>
            <Text className='text-gray-100 text-lg font-bold leading-tight line-clamp-2'>{item.name}</Text>
            <View>
              <AppleIcon size={16} color={colors.gray[300]}/>
            </View>
          </View>
          <Text className='text-gray-300 text-sm font-regular leading-tight'>{`${item.unity} ${item.metric}`}</Text>
        </View>
      </View>

      <View className='flex-row gap-3 items-center'>
        <View>
          <View className='flex-row items-center gap-1'>
            <BadgeDollarSign size={18} color={colors.green[400]}/>
            <Text className='text-green-400 text-lg font-semibold leading-tight'>
              20.00
            </Text>
          </View>  
        </View>
        <Button>
          <MoreVertical size={24} color={colors.gray[300]}/>
        </Button>
      </View>
    </View>
  );
}