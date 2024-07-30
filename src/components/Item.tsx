import { useState } from 'react';
import { AppleIcon, BadgeDollarSign, MoreVertical, Trash2 } from 'lucide-react-native';
import { Switch, Text, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { Button } from './Button';
import { colors } from '@/styles/colors';
import { Items } from '@/types/Item';
import clsx from 'clsx';
import { IconCategory } from './IconCategory';

type Props = {
  item: Items
}

export function Item({item} : Props) {

  const [ isShop, setIsShop ] = useState(false)

  return (
    <View 
      className={clsx('relative w-full h-28 p-3 flex-row justify-between bg-gray-500 border border-gray-400 rounded-lg mb-3', {
        'opacity-50': isShop
      })}
      
    >
      <View className='flex-row gap-4 items-center'>
        <View className='p-4 bg-gray-600 rounded-lg justify-center shadow-sm'>
          <BouncyCheckbox 
            size={25}
            fillColor="white"
            unFillColor="transparent"
            iconStyle={{borderRadius: 4, backgroundColor: 'transparent'}}
            innerIconStyle={{borderRadius: 4}}
            style={{  width: 25, height: 25 }}
            onPress={(isChecked: boolean) => setIsShop(isChecked)}
          />
        </View>
        <View className='w-28 gap-2'>
          <View className='flex-row gap-4 items-center'>
            <Text 
              className={clsx('text-gray-100 text-lg font-bold leading-tight line-clamp-2', {
                'line-through': isShop
              })}
            >
                {item.name}
              </Text>
            <View>
              <IconCategory type={item.category}/>
            </View>
          </View>
          <Text className={clsx('text-gray-300 text-sm font-regular leading-tight',{
            'line-through': isShop
          })}>{`${item.unity} ${item.metric}`}</Text>
        </View>
      </View>

      <View className='flex-row gap-3 items-center'>
        <View>
          <View className='flex-row items-center gap-1'>
            <BadgeDollarSign size={18} color={colors.green[400]}/>
            <Text className={clsx('text-green-400 text-lg font-semibold leading-tight',{
              'line-through': isShop
            })}>
              {item.price.toFixed(2)}
            </Text>
          </View>  
        </View>
        <Button  className='w-fit h-28 -right-3  fixed px-2 justify-center bg-gray-400 border border-gray-500'>
          <Trash2 size={24} color={colors.red[400]}/>
        </Button>
      </View>
    </View>
  );
}