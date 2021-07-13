import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
export interface P {

}

export interface S {

}
export class Index extends React.Component<P, S>{

  render() {
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        <View>
          <Text style={styles.name}>
            开始react-native
          </Text>
        </View>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  name:{
    color: "#f2f2",
  }
})