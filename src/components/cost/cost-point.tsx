import { Image, View } from "react-native";
import { VariantProp } from "react-native-paper/lib/typescript/components/Typography/types";
// components
import Text from "@/components/typography/text";
// utils
import { getCurrencyByUuid } from "@/utils/currencies";

type Props = {
    currencyId: string;
    cost: number | string;
    textVariant?: VariantProp<string>
}

const CostPoint = ({ currencyId, cost, textVariant = "titleMedium" }: Props) => {
    return (
        <View
            style={{
                gap: 8,
                borderRadius: 50,
                alignItems: "center",
                flexDirection: "row",
            }}
        >
            <Image
                resizeMode="contain"
                style={{ width: 24, height: 24 }}
                source={getCurrencyByUuid(currencyId)}
            />
            <Text variant={textVariant} style={{ fontFamily: "Nota" }}>{cost}</Text>
        </View>
    );
};

export default CostPoint;
