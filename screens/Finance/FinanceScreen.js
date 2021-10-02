import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RBSheet from "react-native-raw-bottom-sheet";
import Modal from "react-native-modal";
import Swipeable from "react-native-gesture-handler/Swipeable";

import MenuBar from "../../components/MenuBar";
import RoommateCard from "../../components/finance/RoommateCard";
import GroupPayCard from "../../components/finance/GroupPayCard";
import BudgetGraph from "../../components/finance/BudgetGraph";
import BasicText from "../../components/BasicText";

import addBillButton from "../../assets/icons/icon_designs-09.png";
import TopUpLogo from "../../assets/Finance-assets/TopUp.png";
import ScanLogo from "../../assets/Finance-assets/Scan.png";
import TransferLogo from "../../assets/Finance-assets/Transfer.png";
import PayerLogo from "../../assets/icons/icon_designs-06.png";
import PayeeLogo from "../../assets/icons/icon_designs-05.png";

export default function FinanceScreen({ navigation }) {
  const refRBSheet = useRef();

  const [modalVisible, setModalVisible] = useState(false);
  const [budget, setBudget] = useState(1000);
  const [payListButtonState, setPayListButtonState] = useState(false);
  const [roommate, setRoommate] = useState([
    {
      name: "Jixiang",
      profileImage: "",
      description: "Air-Con Fee",
      amount: "$20.00",
      status: "false", //true means paid already
    },
    {
      name: "Mavis",
      profileImage: "",
      description: "Grocery",
      amount: "$50.00",
      status: "false",
    },
    {
      name: "Mavis",
      profileImage: "",
      description: "Grocery",
      amount: "$50.00",
      status: "false",
    },
    {
      name: "James",
      profileImage: "",
      description: "Air-Con Fee",
      amount: "$20.00",
      status: "true",
    },
    {
      name: "Corner",
      profileImage: "",
      description: "Grocery",
      amount: "$50.00",
      status: "true",
    },
    {
      name: "Ali",
      profileImage: "",
      description: "Grocery",
      amount: "$50.00",
      status: "true",
    },
  ]);
  const [groupMate, setGroupMate] = useState([
    {
      totalAmount: "$20.00",
      amountPaid: "$15.00",
      description: "Frozen yoghurt @ llaollao",
    },
    {
      totalAmount: "$45.00",
      amountPaid: "$45.00",
      description: "Din Tai Fung",
    },
  ]);

  console.log("Entered Finance Screen");

  function toggleBudgetModal() {
    setModalVisible(!modalVisible);
  }

  function renderBudgetModal() {
    const [budgetAmount, setBudgetAmount] = useState("");

    return (
      <Modal
        isVisible={modalVisible}
        avoidKeyboard={true}
        animationIn="fadeIn"
        animationOut="fadeOut"
      >
        <View style={styles.budgetModal}>
          <BasicText style={{ fontSize: 20, textAlign: "center" }}>
            What is your new monthly budget?
          </BasicText>
          <View style={{ flexDirection: "row", marginVertical: "9%" }}>
            <BasicText
              style={{ fontSize: 20, marginRight: 5, alignSelf: "center" }}
            >
              $
            </BasicText>
            <TextInput
              style={styles.modalBudgetTextInput}
              placeholder="1000"
              keyboardType="numeric"
              onChangeText={(text) => setBudgetAmount(text)}
            ></TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={toggleBudgetModal}
              style={[
                styles.modalButton,
                {
                  backgroundColor: "#FFF",
                  borderWidth: 1,
                  borderColor: "#7B98FF",
                },
              ]}
            >
              <BasicText style={{ color: "#7B98FF" }}>Cancel</BasicText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (budgetAmount != null) {
                  setBudget(budgetAmount);
                }
                toggleBudgetModal();
              }}
              style={[styles.modalButton, { backgroundColor: "#36BC7C" }]}
            >
              <BasicText style={{ color: "#FFF" }}>Confirm</BasicText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  function renderPayRoomateScreen() {
    navigation.navigate("PayRoommate");
  }
  function renderPayGroupScreen() {
    navigation.navigate("PayGroup");
  }

  function renderRoommateBill() {
    return (
      <ScrollView
        contentContainerStyle={{ justifyContent: "center" }}
        showsVerticalScrollIndicator={false}
      >
        {roommate.map((items, index) => {
          if (payListButtonState === false && items.status == "false") {
            return (
              <View
                key={index}
                style={{
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <RoommateCard
                  key={index}
                  name={items.name}
                  profileImage={items.profileImage}
                  description={items.description}
                  amount={items.amount}
                  status={items.status}
                  payText="Pay"
                ></RoommateCard>
              </View>
            );
          } else if (payListButtonState === true && items.status == "true") {
            return (
              <View
                key={index}
                style={{
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <RoommateCard
                  key={index}
                  name={items.name}
                  profileImage={items.profileImage}
                  description={items.description}
                  amount={items.amount}
                  status={items.status}
                  payText="Paid"
                ></RoommateCard>
              </View>
            );
          }
        })}
      </ScrollView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <MenuBar navigation={navigation} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Balance Section */}

        <BasicText style={styles.balanceText}> Wallet </BasicText>
        <BasicText style={{ color: "#943855", fontSize: 50 }}>
          $100.00
        </BasicText>
        <BasicText style={{ color: "#943855", opacity: 0.7, fontSize: 18 }}>
          Current Balance
        </BasicText>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.walletButton}>
            <Image source={TopUpLogo} style={styles.walletButtonLogo}></Image>
            <BasicText>Top Up</BasicText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.walletButton}>
            <Image source={ScanLogo} style={styles.walletButtonLogo}></Image>
            <BasicText>Scan</BasicText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.walletButton}>
            <Image
              source={TransferLogo}
              style={[styles.walletButtonLogo, { marginBottom: 14 }]}
            ></Image>
            <BasicText>Transfer</BasicText>
          </TouchableOpacity>
        </View>

        {/* Monthly Budget Section */}

        <View style={styles.budgetContainer}>
          <BasicText style={{ position: "absolute", left: 0, fontSize: 24 }}>
            Monthly Budget
          </BasicText>
          <TouchableOpacity
            style={styles.budgetManageButton}
            onPress={toggleBudgetModal}
          >
            <BasicText style={styles.budgetManageButtonText}>Manage</BasicText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.progressBar}
            onPress={() => refRBSheet.current.open()}
          >
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
        {renderBudgetModal()}

        {/* Monthly Budget Display */}
        <View>
          <BasicText style={{ color: "#8A8585" }}>
            {" "}
            $ 710 / $ {budget}
          </BasicText>
        </View>

        {/* Roommate Section */}
        <View style={styles.roommateContainer}>
          <View style={{ width: "100%", height: 50, flexDirection: "row" }}>
            <BasicText style={styles.createNewTitle}>Pay Roommates</BasicText>
            <BasicText style={styles.createNewButton}>Pay Me</BasicText>
            <TouchableOpacity
              style={{ position: "absolute", right: -5, fontSize: 18 }}
              onPress={renderPayRoomateScreen}
            >
              <Image
                source={addBillButton}
                style={{ width: 50, height: 50 }}
              ></Image>
            </TouchableOpacity>
          </View>

          {/* Roommate Bill Container */}
          <View style={styles.roommateBillPanel}>
            {/* Swiping Left and Right to display payees and payers */}
            <View
              style={{
                width: "90%",
                alignItems: "center",
              }}
            >
              <View
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
                <TouchableOpacity onPress={() => setPayListButtonState(false)}>
                  <Image
                    source={PayerLogo}
                    style={[styles.payLogoStyle, { marginRight: 80 }]}
                  ></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPayListButtonState(true)}>
                  <Image source={PayeeLogo} style={styles.payLogoStyle}></Image>
                </TouchableOpacity>
              </View>

              {/* TODO - Maybe the bar need to use Carousel, need to explore */}
              {/* <View style={styles.payProgressBar}></View> */}
            </View>

            {/* Display each roommate and how much  */}
            {renderRoommateBill()}
          </View>
        </View>

        {/* Group Pay Section */}
        <View style={styles.roommateContainer}>
          <View style={{ width: "100%", height: 50, flexDirection: "row" }}>
            <BasicText style={styles.createNewTitle}>Group Payment</BasicText>
            <BasicText style={styles.createNewButton}>New Split</BasicText>
            <TouchableOpacity
              style={{ position: "absolute", right: -5, fontSize: 18 }}
              onPress={renderPayGroupScreen}
            >
              <Image
                source={addBillButton}
                style={{ width: 50, height: 50 }}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.roommateBillPanel}>
            {/* Display each roommate and how much  */}
            {groupMate.map((items, index) => {
              return (
                <GroupPayCard
                  key={index}
                  totalAmount={items.totalAmount}
                  amountPaid={items.amountPaid}
                  description={items.description}
                ></GroupPayCard>
              );
            })}
          </View>
        </View>

        {/* Bottom Sheet Render */}
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={650}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
            container: {
              borderRadius: 20,
              backgroundColor: "#6E2142",
            },
            draggableIcon: {
              backgroundColor: "#000",
            },
          }}
        >
          <BudgetGraph></BudgetGraph>
        </RBSheet>
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
    height: 420,
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
    width: 70,
    height: 65,
  },
  payProgressBar: {
    backgroundColor: "#696363",
    opacity: 0.3,
    width: "90%",
    height: 10,
    borderRadius: 10,
  },
  budgetModal: {
    height: 200,
    width: "90%",
    backgroundColor: "#FFFAF2",
    alignSelf: "center",
    borderRadius: 30,
    padding: 20,
    alignItems: "center",
  },
  modalButton: {
    width: 97,
    height: 32,
    borderRadius: 10,
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  modalBudgetTextInput: {
    height: 35,
    width: "40%",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#6E2142",
    borderRadius: 20,
    textAlign: "center",
  },
});
