import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text } from "react-native-paper";

import { Section } from "../Section";
import { useAuthorization } from "../utils/useAuthorization";
import { AccountDetailFeature } from "../components/account/account-detail-feature";
import { SignInFeature } from "../components/sign-in/sign-in-feature";

export function HomeScreen() {
  const { selectedAccount } = useAuthorization();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.screenContainer}>
        <Text
          style={styles.title}
          variant="displaySmall"
        >
          Solana Mobile dApp
        </Text>
        {selectedAccount ? (
          <AccountDetailFeature />
        ) : (
          <>
            <Section
              title="Solana SDKs"
              description="Pre-configured with Solana SDKs like Mobile Wallet Adapter and web3.js."
            />
            <Section
              title="UI Kit and Navigation"
              description="Utilizes React Native Paper components and the React Native Navigation library."
            />
            <Section
              title="Get started!"
              description="Connect or Sign in with Solana (SIWS) to link your wallet account."
            />
            <SignInFeature />
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  screenContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#904e95', // Dark purple background
  },
  title: {
    fontWeight: "bold",
    marginBottom: 12,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: "column",
    paddingVertical: 4,
  },
});
