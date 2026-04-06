import { StatusBar } from "expo-status-bar";
import { ProjectListScreen } from "./src/screens/ProjectListScreen";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ProjectListScreen />
    </>
  );
}
