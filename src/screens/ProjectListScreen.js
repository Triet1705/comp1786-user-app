import { useEffect, useMemo, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { ProjectCard } from "../components/ProjectCard";
import { fetchProjects, searchProjects } from "../services/projectService";

export function ProjectListScreen() {
  const [projects, setProjects] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .finally(() => setLoading(false));
  }, []);

  const filteredProjects = useMemo(() => searchProjects(projects, query), [projects, query]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CW1 User Projects</Text>
      <TextInput
        style={styles.search}
        placeholder="Search by code, name, or description"
        value={query}
        onChangeText={setQuery}
      />

      {loading ? <Text style={styles.note}>Loading projects...</Text> : null}
      {!loading && filteredProjects.length === 0 ? (
        <Text style={styles.note}>No matching projects found.</Text>
      ) : null}

      <FlatList
        data={filteredProjects}
        keyExtractor={(item) => item.projectCode}
        renderItem={({ item }) => <ProjectCard project={item} />}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    paddingTop: 52,
    paddingHorizontal: 16
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1A237E"
  },
  search: {
    marginTop: 12,
    marginBottom: 10,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  note: {
    marginBottom: 8,
    color: "#475569",
    fontSize: 13
  },
  listContent: {
    paddingBottom: 40
  }
});
