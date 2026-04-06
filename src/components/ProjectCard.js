import { Pressable, StyleSheet, Text, View } from "react-native";

export function ProjectCard({ project }) {
  return (
    <Pressable style={styles.card}>
      <View style={styles.rowBetween}>
        <Text style={styles.code}>{project.projectCode}</Text>
        <Text style={styles.status}>{project.status}</Text>
      </View>
      <Text style={styles.name}>{project.projectName}</Text>
      <Text style={styles.description}>{project.projectDescription}</Text>
      <View style={styles.rowBetween}>
        <Text style={styles.meta}>Owner: {project.managerOwner}</Text>
        <Text style={styles.budget}>${Number(project.budget).toFixed(2)}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e5e7eb"
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  code: {
    fontSize: 12,
    color: "#475569",
    fontWeight: "700"
  },
  status: {
    fontSize: 12,
    color: "#1A237E",
    fontWeight: "700"
  },
  name: {
    marginTop: 6,
    fontSize: 17,
    fontWeight: "800",
    color: "#0f172a"
  },
  description: {
    marginTop: 6,
    fontSize: 13,
    color: "#475569"
  },
  meta: {
    marginTop: 10,
    fontSize: 12,
    color: "#334155"
  },
  budget: {
    marginTop: 10,
    fontSize: 15,
    color: "#0f172a",
    fontWeight: "800"
  }
});
