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

import MenuBar from "../components/MenuBar";
import RoommateCard from "../components/RoommateCard";
import GroupPayCard from "../components/GroupPayCard";

import addBillButton from "../assets/Finance-assets/AddBill.png";
import TopUpLogo from "../assets/Finance-assets/TopUp.png";
import ScanLogo from "../assets/Finance-assets/Scan.png";
import TransferLogo from "../assets/Finance-assets/Transfer.png";
import PayerLogo from "../assets/Finance-assets/Payers.png";
import PayeeLogo from "../assets/Finance-assets/Payee.png";

export default function FinanceScreen({ navigation }) {
  const [budget, setBudget] = useState(100);
  const [shopping, setShopping] = useState(20);

  var shoppingBudget = (shopping / budget) * 100;
  console.log(shoppingBudget);

  return (
    <SafeAreaView style={styles.container}>
      {/* <MenuBar navigation = {navigation} /> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Balance Section */}

        <Text style={styles.balanceText}> Wallet </Text>
        <Text style={{ color: "#943855", fontSize: 50 }}>$100.00</Text>
        <Text style={{ color: "#943855", opacity: 0.7, fontSize: 18 }}>
          Current Balance
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.walletButton}>
            <Image source={TopUpLogo} style={styles.walletButtonLogo}></Image>
            <Text>Top Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.walletButton}>
            <Image source={ScanLogo} style={styles.walletButtonLogo}></Image>
            <Text>Scan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.walletButton}>
            <Image
              source={TransferLogo}
              style={[styles.walletButtonLogo, { marginBottom: 14 }]}
            ></Image>
            <Text>Transfer</Text>
          </TouchableOpacity>
        </View>

        {/* Monthly Budget Section */}

        <View style={styles.budgetContainer}>
          <Text style={{ position: "absolute", left: 0, fontSize: 24 }}>
            Monthly Budget
          </Text>
          <TouchableOpacity style={styles.budgetManageButton}>
            <Text style={styles.budgetManageButtonText}>Manage</Text>
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
            <Text style={styles.createNewTitle}>Pay Roommates</Text>
            <Text style={styles.createNewButton}>Pay Me</Text>
            <TouchableOpacity
              style={{ position: "absolute", right: 0, fontSize: 18 }}
            >
              <Image source={addBillButton}></Image>
            </TouchableOpacity>
          </View>

          {/* Roommate Bill Container */}
          <View style={styles.roommateBillPanel}>
            {/* Swiping Left and Right to display payees and payers */}
            <View
              style={{
                width: "90%",
                paddingVertical: 5,
                alignItems: "center",
              }}
            >
              <View
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
                <Image source={PayerLogo} style={styles.payLogoStyle}></Image>
                <Image source={PayeeLogo} style={styles.payLogoStyle}></Image>
              </View>

              {/* TODO - Maybe the bar need to use Carousel, need to explore */}
              <View style={styles.payProgressBar}></View>
            </View>

            {/* Display each roommate and how much  */}
            {/* Here may need an array to store the information and then use javascript map function  */}
            <RoommateCard
              name="Jixiang"
              profileImage=""
              description="Air-Con Fee"
              amount="$20.00"
              status="True"
            ></RoommateCard>
            <RoommateCard
              name="Jixiang"
              profileImage=""
              description="Air-Con Fee"
              amount="$20.00"
              status="True"
            ></RoommateCard>
            <RoommateCard
              name="Jixiang"
              profileImage=""
              description="Air-Con Fee"
              amount="$20.00"
              status="True"
            ></RoommateCard>
          </View>
        </View>

        {/* Group Pay Section */}
        <View style={styles.roommateContainer}>
          <View style={{ width: "100%", height: 50, flexDirection: "row" }}>
            <Text style={styles.createNewTitle}>Group Payment</Text>
            <Text style={styles.createNewButton}>New Split</Text>
            <TouchableOpacity
              style={{ position: "absolute", right: 0, fontSize: 18 }}
            >
              <Image source={addBillButton}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.roommateBillPanel}>
            {/* Display each roommate and how much  */}
            {/* Here may need an array to store the information and then use javascript map function  */}
            <GroupPayCard
              totalAmount="$20.00"
              amountPaid="$15.00"
              description="Frozen yoghurt @ llaollao"
            ></GroupPayCard>
            <GroupPayCard
              totalAmount="$45.00"
              amountPaid="$45.00"
              description="Din Tai Fung"
            ></GroupPayCard>
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
    color: "#E16363",
    fontSize: 20,
    marginBottom: 10,
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
    justifyContent: "center",
    alignItems: "center",
  },
  walletButtonLogo: {
    width: "100%",
    alignSelf: "center",
    marginRight: 5,
    marginBottom: 5,
  },
  budgetContainer: {
    width: "95%",
    height: 80,
    flexDirection: "row",
  },
  budgetManageButton: {
    position: "absolute",
    right: 0,
    borderWidth: 2,
    borderColor: "#E16363",
    borderRadius: 10,
  },
  budgetManageButtonText: {
    padding: 5,
    paddingHorizontal: 10,
    color: "#E16363",
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
    width: "95%",
    borderRadius: 20,
    paddingVertical: 10,
  },
  createNewTitle: {
    position: "absolute",
    left: 0,
    fontSize: 24,
    marginTop: 7,
  },
  createNewButton: {
    position: "absolute",
    right: 40,
    fontSize: 24,
    marginTop: 7,
    color: "#826335",
  },
  payLogoStyle: {
    marginVertical: 10,
    width: 120,
    height: 50,
  },
  payProgressBar: {
    backgroundColor: "#696363",
    opacity: 0.3,
    width: "90%",
    height: 10,
    borderRadius: 10,
  },
});
