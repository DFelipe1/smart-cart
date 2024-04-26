import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

type Props = TouchableOpacityProps & {
    children: React.ReactNode
}

export function Button({ children, ...rest }: Props) {
  return (
    <TouchableOpacity
        activeOpacity={0.7}
        {...rest}
    >
        { children }
    </TouchableOpacity>
  );
}