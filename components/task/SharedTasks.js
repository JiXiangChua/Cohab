import React from 'react';
import { View , Text ,  TouchableOpacity  , StyleSheet } from 'react-native';
import TaskCard from './TaskCard';

export default function SharedTasks() {
  return(
    <View style={styles.taskContainer}>
          <View
            style={{
              width: "100%",
              height: 50,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.subHeaderText}>Shared</Text>

            <TouchableOpacity>
              <Text style={styles.createNewButton}>Completed</Text>
            </TouchableOpacity>
          </View>

          {/* Shared Task Container */}
          <View>
            {/* Swiping Left and Right to display payees and payers */}
            <View style={[styles.sharedTaskDisplayPanel]}>
              <TaskCard></TaskCard>
              <TaskCard></TaskCard>
            </View>
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD897",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  taskText: {
    color: "#E16363",
    fontSize: 20,
    fontWeight: "bold",
  },
  taskContainer: {
    marginTop: 20,
    width: "95%",
    alignItems: "center",
  },
  subHeaderText: {
    fontSize: 24,
    marginTop: 7,
  },
  createNewButton: {
    fontSize: 24,
    marginTop: 7,
    color: "#826335",
  },
  sharedTaskDisplayPanel: {
    width: "100%",
    height: 400,
    backgroundColor: "#777",
  },
});
