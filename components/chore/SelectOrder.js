import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import ProfilePic from "../../assets/Finance-assets/Kimberly.png";

export default function SelectOrder(props) {
    // use onOrderChange to hook order array change

    // replace fakebackend with realbackend
    // fakebackend is an array of users that can assign the order to
    const [fakebackend, setFakebackend] = useState([
        {
            userid: "000001",
            username: "kimberly",
            imageSource:  ProfilePic
        },
        {
            userid: "000002",
            username: "johndoe",
            imageSource:  ProfilePic
        },
        {
            userid: "000003",
            username: "janedoe",
            imageSource:  ProfilePic
        },
        {
            userid: "000004",
            username: "maryjane",
            imageSource:  ProfilePic
        },
    ])

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
            props.onOrderChange(arr)
        }
    })

    return(
        <View style={styles.container}>
            {
                fakebackend.map((user, index) => {
                    return counter.includes(index) ?
                        (
                            <TouchableOpacity style={styles.item} onPress={() => setOrder(index)}>
                                <Image style={{opacity: 0.35, borderWidth: 4, borderColor: "#36BC7C", borderRadius: 100}} source={user.imageSource}/>
                                <View style={styles.textoverlay}>
                                    <Text style={styles.text}>{counter.indexOf(index)+1}</Text>
                                </View>
                            </TouchableOpacity>
                        ) :
                        (
                            <TouchableOpacity style={styles.item} onPress={() => setOrder(index)}>
                                <Image source={user.imageSource}/>
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