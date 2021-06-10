import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [home, setHome] = useState('');
  const [story, setStory] = useState('');
  const [shouldShow, setShouldShow] = useState(false);
  const buttonHandler = () => {
    setShouldShow(!shouldShow)
  };

  return (
    <View style={styles.container}>
      <View style={styles.hello}>
        <Text style={styles.texts}>Hello!! Welcome to world of stories!!</Text>
        <Text style={styles.texts}>Share your incredible story here </Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder='Your name'
          onChangeText={(val) => setName(val)}
        />
      </View>
      <View>
        <TextInput
          keyboardType='numeric'
          style={styles.input}
          placeholder='Your age'
          onChangeText={(val) => setAge(val)}
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder='Your home'
          onChangeText={(val) => setStory(val)}
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder='Your story'
          onChangeText={(val) => setHome(val)}
        />
      </View>

      <View>
        <Button title='Update state' onPress={buttonHandler} />
      </View>
      <View>
        {
          shouldShow ?
            <View>
              <View>
                <Text style={styles.texts}>Hey, {name} !</Text>
                <Text style={styles.texts}>Appreciate your presence!</Text>

                <Text style={styles.texts}> Here goes your story - </Text>

                <Text style={styles.texts}> {story}</Text>
              </View>

              <View style={styles.sig}>
                <Text style={styles.texts}> {name} {age}</Text>
                <Text style={styles.texts}> {home}</Text>
              </View>
            </View>
            :
            null
        }

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello: {
    padding: 20,
    margin: 5
  },
  texts: {
    fontWeight: 'bold',
    color: '#43a6bd'
  },
  input: {
    borderWidth: 1,
    borderColor: '#43a6bd',
    padding: 10,
    margin: 10,
    width: 200
  },
  sig: {
    fontWeight: '300',
    justifyContent: 'flex-start',
  }
});
