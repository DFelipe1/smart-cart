import { icons, LucideProps } from 'lucide-react-native'

type Props = {
    name: string
    color: string
    size: number
}

export function Icon({ name, color, size }: Props) {

    const LucideIcon = icons[name]

    return (
         <LucideIcon color={color} size={size} />
    )
}