import React , { useState } from 'react';
import { View , Text ,  TouchableOpacity  , StyleSheet , Image } from 'react-native';
import TaskCard from './TaskCard';
import Kimberly from '../../assets/Finance-assets/Kimberly.png';

export default function SharedTasks() {

  const [currentTab , setCurrentTab] = useState('shared');

  var shared = [styles.shared] ;
  var completed = [styles.completed];

  if (currentTab === 'shared') {
    shared.push(styles.currentTab);
  } else if (currentTab === 'completed') {
    completed.push(styles.currentTab);
  }

  function handleShared() {
    setCurrentTab('shared');
    console.log(currentTab);
  }

  function handleCompleted() {
    setCurrentTab('completed');
    console.log(currentTab);
  }

  return(
    <View style={styles.taskContainer}>

          <View style={styles.title}>
            <TouchableOpacity style = {shared} onPress = {handleShared}>
              <Text style={styles.subHeaderText}>Shared</Text>
              <Image source = {Kimberly} style = {styles.profileImage} />
            </TouchableOpacity>
              <TouchableOpacity style={completed} onPress = {handleCompleted}>
                  <Text style={styles.subHeaderText}>Completed</Text>
              </TouchableOpacity>
          </View>

          {/* Shared Task Container */}
          <View style = {styles.backgroundContainer}>
            <View style = {styles.taskCardContainer}>
              <TaskCard></TaskCard>
              <TaskCard></TaskCard>
            </View>
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
  taskContainer: {
    marginTop: 20,
    width: "95%",
    alignItems: "center",
  },
  title: {
    width: "95%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: 'center',
    
  },
  shared: {
    alignItems: 'center',
    padding: 10,
    maxWidth: 200,
    height: 50,
    flexDirection: "row",
  },
  currentTab: {
    backgroundColor: 'white',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  completed: {
    minHeight: 50,
    padding: 10,
    alignItems: 'center',
    flexDirection:' row',
  },
  profileImage: {
    marginLeft: 10,
    minWidth: 40,
    minHeight: 40,
    resizeMode: 'center',
  },
  subHeaderText: {
    fontSize: 22,
    alignItems: "center",
  },
  backgroundContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
  },
  taskCardContainer: {
    width: '90%',
  },
});
