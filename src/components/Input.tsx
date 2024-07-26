import { Text, TextInput, TextInputProps, View } from "react-native";

interface InputProps extends TextInputProps {
    label: string
}

export function Input({ label, ...rest }: InputProps){
    return(
        <View className='gap-2'>
            <Text className='text-gray-200'>{label}:</Text>
            <TextInput
                className='w-full px-3 py-4 text-gray-200 placeholder:text-gray-300/70 bg-gray-500 border border-gray-300/30 rounded-md'
                {...rest}
            />
        </View>
    )
}