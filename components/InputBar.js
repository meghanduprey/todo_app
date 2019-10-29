import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const InputBar = (props) => {
  return (
    <View style={styles.inputContainer }>
      <TextInput
      style={styles.input}
      onChangeText={(todoInput) => props.textChange(todoInput)}
      value={props.todoInput}
      />
      <TouchableOpacity style={styles.addButton} onPress={props.addNewTodo}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOffset: { width: 0, height: 3},
    shadowColor: '#171717',
    shadowOpacity: .1
  },
  input: {
    backgroundColor: '#f3f3f3',
    flex: 1,
    fontSize: 18,
    height: 35
  },
  addButton: {
    width: 100,
    backgroundColor: '#ffce00',
    alignItems: 'center',
    justifyContent: 'center'
  },
  addButtonText: {
    color: '#171717',
    fontSize: 18,
    fontWeight: '700'
  }
})

export default InputBar