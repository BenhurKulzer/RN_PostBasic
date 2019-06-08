import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.postContainer}>
          <Text style={styles.postTitulo}>Teste Post Titulo</Text>
          <Text style={styles.postDescricao}>Teste Post Descrição</Text>
          <Button style={styles.leiaMais} title="Leia Mais..." color="#538AE4" />
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitulo}>Teste Post Titulo</Text>
          <Text style={styles.postDescricao}>Teste Post Descrição</Text>
          <Button style={styles.leiaMais} title="Leia Mais..." color="#538AE4" />
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitulo}>Teste Post Titulo</Text>
          <Text style={styles.postDescricao}>Teste Post Descrição</Text>
          <Button style={styles.leiaMais} title="Leia Mais..." color="#538AE4" />
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitulo}>Teste Post Titulo</Text>
          <Text style={styles.postDescricao}>Teste Post Descrição</Text>
          <Button style={styles.leiaMais} title="Leia Mais..." color="#538AE4" />
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },

  postContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 3,
  },

  postTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  postDescricao: {
    color: '#666',
    marginBottom: 10,
  }
});
