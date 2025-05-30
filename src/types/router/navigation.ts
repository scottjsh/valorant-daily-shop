import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
// types
import { Theme } from "@/types/api/shop/theme";
import { WeaponSkin } from "@/types/api/shop/weapon-skin";
import { StoreOffer } from "@/types/api/shop/plugin-store";
import { Buddy, Offer, PlayerCard, Spray } from "@/types/api/shop";

export type RootStackParamList = {
    Accounts: undefined;
    Login: undefined;
    Logout: { username: string };
    Home: undefined;
    Plugin: { plugin: StoreOffer };
    SkinDetails: { skin: WeaponSkin, skinType: string, theme: Theme };
    PlayerCardDetails: { playercard: PlayerCard, offer: Offer };
    BuddyDetails: { buddy: Buddy, offer: Offer };
    SprayDetails: { spray: Spray, offer: Offer };
    CollectionDetails: undefined;
};

export type StoreStackParamList = {
    StoreStack: undefined;
};

export type LogoutScreenProps = NativeStackScreenProps<RootStackParamList, "Logout">;
export type PluginDetailScreenProps = NativeStackScreenProps<RootStackParamList, "Plugin">;
export type SkinDetailScreenProps = NativeStackScreenProps<RootStackParamList, "SkinDetails">;
export type BuddyDetailScreenProps = NativeStackScreenProps<RootStackParamList, "BuddyDetails">;
export type SprayDetailScreenProps = NativeStackScreenProps<RootStackParamList, "SprayDetails">;
export type PlayerCardDetailScreenProps = NativeStackScreenProps<RootStackParamList, "PlayerCardDetails">;
export type CollectionDetailScreenProps = NativeStackScreenProps<RootStackParamList, "CollectionDetails">;

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
