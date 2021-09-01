import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import settingLogo from "../assets/Finance-assets/SettingsWheel.png";

export default function FinanceScreen() {
  const [budget, setBudget] = useState(100);
  const [shopping, setShopping] = useState(20);

  var shoppingBudget = (shopping / budget) * 100;
  console.log(shoppingBudget);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <View style={styles.balanceContainer}> */}
        <Text style={styles.balanceText}> Wallet </Text>
        <Text style={{ color: "#8A8585" }}> Current Balance </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.walletButton}></TouchableOpacity>
          <TouchableOpacity style={styles.walletButton}></TouchableOpacity>
          <TouchableOpacity style={styles.walletButton}></TouchableOpacity>
        </View>
        {/* </View> */}

        <View style={styles.budgetContainer}>
          <Text style={{ position: "absolute", left: 0, fontSize: 18 }}>
            Monthly Budget
          </Text>
          <TouchableOpacity style={{ position: "absolute", right: 0 }}>
            <Image source={settingLogo}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.progressBar}>
            <TouchableOpacity
              style={{
                backgroundColor: "red",
                width: "20%",
                height: 20,
                borderRadius: 10,
              }}
            ></TouchableOpacity>
          </TouchableOpacity>
        </View>

        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD897",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
    flexDirection: "column",
  },
  balanceContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  balanceText: {
    color: "#943855",
    fontSize: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    padding: 10,
    marginTop: 10,
  },
  walletButton: {
    backgroundColor: "#FFF",
    width: 100,
    height: 100,
    borderRadius: 20,
    margin: 10,
  },
  budgetContainer: {
    width: "80%",
    height: 80,
    flexDirection: "row",
  },
  progressBar: {
    backgroundColor: "#E1B468",
    position: "absolute",
    top: 50,
    marginHorizontal: 20,
    width: "90%",
    height: 20,
    borderRadius: 10,
  },
});
