import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

/**
 * Tags no React nao possuem valor semântico
 * Não possuem estilização própria
 * FlexBox é padrão no ReactNative, logo
 * todos os components possuem display: flex; por padrão.
 * Não há herança de estilos css dentro do RN
 * View: div, footer, header, aside,  main, section
 *
 * Text: p, span, strong, h1, h2, etc...
 * StyleSheet: Folha de estilos css
 */

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text>Hello GoStack</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
