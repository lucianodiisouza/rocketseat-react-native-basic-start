import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";

import api from "./services/api";

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
  const [projects, setProjects] = useState([]);

  const getProjects = () => {
    api.get("projects").then((res) => {
      setProjects(res.data);
    });
  };

  useEffect(() => {
    getProjects();
  }, []);

  async function handleAddProject() {
    const res = await api.post("projects", {
      title: `Novo Projeto (RN) ${Date.now()}`,
      owner: "Luciano dii Souza",
    });

    const project = res.data;
    setProjects([...projects, project]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.title}>{project.title}</Text>
          )}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.6}
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
  },
  title: {
    color: "#fff",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#fff",
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
