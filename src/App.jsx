import styles from "./App.module.css";
import RightPanel from "./components/rightPanel/RightPanel";
import SideBar from "./components/sideBar/SideBar";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.background}>
        <SideBar />
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
