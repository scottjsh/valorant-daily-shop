import * as SecureStore from "expo-secure-store";
import axios, { AxiosRequestConfig } from "axios";

// ----------------------------------------------------------------------

const requestWithHeaders = async (options: AxiosRequestConfig<any>) => {
    try {
        return await axios.request(options);
    } catch (error) {
        console.error(`Error in ${options.url}:`, error);
        throw error;
    }
};

// ----------------------------------------------------------------------

const valorantProvider = {
    getUserInfo: async () => {
        const accessToken = await SecureStore.getItemAsync("access_token");
        const options = {
            method: "GET",
            url: "https://auth.riotgames.com/userinfo",
            headers: { Authorization: `Bearer ${accessToken}` }
        };

        const response = await requestWithHeaders(options);

        if (response.data?.sub) {
            await SecureStore.setItemAsync("sub", response.data.sub);
        }
    },

    getUserBalance: async (): Promise<{
        radianitePoint: string,
        valorantPoint: string,
        kingdomCredit: string,
    }> => {
        const [accessToken, entitlementsToken, sub] = await Promise.all([
            SecureStore.getItemAsync("access_token"),
            SecureStore.getItemAsync("entitlements_token"),
            SecureStore.getItemAsync("sub")
        ]);

        const options = {
            method: "GET",
            url: `https://pd.eu.a.pvp.net/store/v1/wallet/${sub}`,
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "X-Riot-Entitlements-JWT": ` ${entitlementsToken}`
            }
        };

        const response = await requestWithHeaders(options);

        const balance = {
            radianitePoint: response.data?.Balances["e59aa87c-4cbf-517a-5983-6e81511be9b7"].toString(),
            valorantPoint: response.data?.Balances["85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741"].toString(),
            kingdomCredit: response.data?.Balances["85ca954a-41f2-ce94-9b45-8ca3dd39a00d"].toString()
        };

        await SecureStore.setItemAsync("radianite_point", balance.radianitePoint);
        await SecureStore.setItemAsync("valorant_point", balance.valorantPoint);
        await SecureStore.setItemAsync("kingdom_credit", balance.kingdomCredit);

        return balance;
    }
};

export default valorantProvider;