import { colors } from "@/styles/colors";
import { AppleIcon, Beef, Carrot, Milk, Wheat } from "lucide-react-native";

interface IconCategoryProps {
    type: string;
}

export function IconCategory({ type }:IconCategoryProps) {

    if(type === "Padaria"){
        return <Wheat size={16} color={colors.gray[300]}/>
    }
    if(type === "Legume"){
        return <Carrot size={16} color={colors.gray[300]}/>
    }
    if(type === "Carne"){
        return <Beef size={16} color={colors.gray[300]}/>
    }
    if(type === "Bebida"){
        return <Milk size={16} color={colors.gray[300]}/>
    }

    return (
        <AppleIcon size={16} color={colors.gray[300]}/>
    )
}