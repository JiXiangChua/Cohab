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
import addBillButton from "../assets/Finance-assets/AddBill.png";
import RoommateCard from "../components/RoommateCard";
import GroupPayCard from "../components/GroupPayCard";

export default function FinanceScreen() {
  const [budget, setBudget] = useState(100);
  const [shopping, setShopping] = useState(20);

  var shoppingBudget = (shopping / budget) * 100;
  console.log(shoppingBudget);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Balance Section */}

        <Text style={styles.balanceText}> Wallet </Text>
        <Text style={{ color: "#8A8585" }}> Current Balance </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.walletButton}></TouchableOpacity>
          <TouchableOpacity style={styles.walletButton}></TouchableOpacity>
          <TouchableOpacity style={styles.walletButton}></TouchableOpacity>
        </View>

        {/* Monthly Budget Section */}

        <View style={styles.budgetContainer}>
          <Text style={{ position: "absolute", left: 0, fontSize: 24 }}>
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

        {/* Monthly Budget Display */}
        <View>
          <Text style={{ color: "#8A8585" }}> $ 710 / $1000</Text>
        </View>

        {/* Roommate Section */}
        <View style={styles.roommateContainer}>
          <View style={{ width: "100%", height: 50, flexDirection: "row" }}>
            <Text
              style={{
                position: "absolute",
                left: 0,
                fontSize: 24,
                marginTop: 7,
              }}
            >
              Roommates
            </Text>
            <Text
              style={{
                position: "absolute",
                right: 40,
                fontSize: 24,
                marginTop: 7,
              }}
            >
              New Bill
            </Text>
            <TouchableOpacity
              style={{ position: "absolute", right: 0, fontSize: 18 }}
            >
              <Image source={addBillButton}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.roommateBillPanel}>
            {/* Display each roommate and how much  */}
            {/* Here may need an array to store the information and then use javascript map function  */}
            <RoommateCard
              name="Jixiang"
              profileImage=""
              description="Air-Con Fee"
              amount="$20"
              status="True"
            ></RoommateCard>
            <RoommateCard
              name="Jixiang"
              profileImage=""
              description="Air-Con Fee"
              amount="$20"
              status="True"
            ></RoommateCard>
            <RoommateCard
              name="Jixiang"
              profileImage=""
              description="Air-Con Fee"
              amount="$20"
              status="True"
            ></RoommateCard>
          </View>
        </View>

        {/* Group Pay Section */}
        <View style={styles.roommateContainer}>
          <View style={{ width: "100%", height: 50, flexDirection: "row" }}>
            <Text
              style={{
                position: "absolute",
                left: 0,
                fontSize: 24,
                marginTop: 7,
              }}
            >
              Group Payment
            </Text>
            <Text
              style={{
                position: "absolute",
                right: 40,
                fontSize: 24,
                marginTop: 7,
              }}
            >
              New Split
            </Text>
            <TouchableOpacity
              style={{ position: "absolute", right: 0, fontSize: 18 }}
            >
              <Image source={addBillButton}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.roommateBillPanel}>
            {/* Display each roommate and how much  */}
            {/* Here may need an array to store the information and then use javascript map function  */}
            <GroupPayCard amount="$20"></GroupPayCard>
            <GroupPayCard amount="$20"></GroupPayCard>
          </View>
        </View>
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
    width: "95%",
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
  roommateContainer: {
    marginTop: 20,
    width: "95%",
    alignItems: "center",
  },
  roommateBillPanel: {
    alignItems: "center",
    backgroundColor: "#FFFAF2",
    width: "90%",
    borderRadius: 20,
    paddingVertical: 10,
  },
});
