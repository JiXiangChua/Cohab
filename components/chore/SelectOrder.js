import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import ProfilePic from "../../assets/Finance-assets/Kimberly.png";

export default function SelectOrder(props) {
    // use onOrderChange to hook order array change
    const groupmemURL = "http://<ID>/cohab/getGroupMembers?groupId=1";
  
    const init = {
        method: "GET",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
    };

    //code to store data from response
    const [fakebackend, setFakebackend] = useState([]);

    (async () => {
        try {
          const response = await fetch(groupmemURL, init);
          const json = await response.json();
          console.log(json);
          setFakebackend(json.members);
          if (json.status == "OK") {
            console.log("Successfully connected!");
          } else {
            console.log("NOPE");
            console.log(json.status);
          }
        } catch (error) {
          console.log(error);
        }
        var entry=0;
        for(entry=0;entry<fakebackend.Length;entry++){
            userid.push(fakebackend[entry]["userid"]);
            profileimg.push(fakebackend[entry]["profileimg"]);
          };
    })();

    // {order{userIndex, selected: true}}
    const [counter, setCounter] = useState(new Array())

    const setOrder = (index) => {
        if (counter.includes(index)) {
            counter.splice(counter.indexOf(index), 1)
        } else {
            counter.push(index)
        }
        let arr = counter
        setCounter(arr)
        setFakebackend([...fakebackend])
    }

    // returns the order array back to parent view if item(s) is selected
    // for example [user2, user1, user3]
    useEffect(() => {
        if (props.onOrderChange) {
            let arr = []
            for (let i = 0; i < counter.length; i++) {
                arr.push(fakebackend[counter[i]])
            }
            props.onOrderChange(arr);
        }
    })

    return(
        <View style={styles.container}>
            {
                fakebackend.map((user, index) => {
                    return counter.includes(index) ?
                        (
                            <TouchableOpacity style={styles.item} onPress={() => setOrder(index)}>
                                <Image style={{opacity: 0.35, borderWidth: 4, borderColor: "#36BC7C", borderRadius: 100}} source={user.profileimg}/>
                                <View style={styles.textoverlay}>
                                    <Text style={styles.text}>{counter.indexOf(index)+1}</Text>
                                </View>
                            </TouchableOpacity>
                        ) :
                        (
                            <TouchableOpacity style={styles.item} onPress={() => setOrder(index)}>
                                <Image source={user.profileimg}/>
                            </TouchableOpacity>
                        )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 20,
    },
    item: {
        marginTop: 10,
        marginHorizontal: 7,
    },
    image: {
        resizeMode: "contain",
        borderRadius: 10,
        opacity: 0.35
    },
    textoverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
    }
})