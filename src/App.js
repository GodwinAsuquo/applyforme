import Notification from "./components/Notification/Notification";
import SideNav from "./components/SideNav/SideNav";
import TopNav from "./components/TopNav/TopNav";
import "./components/TopNav/TopNav.css";
import "./components/SideNav/SideNav.css";

function App() {
  return (
    <section>
      <SideNav />
      <TopNav />
      <Notification />
    </section>
  );
}

export default App;
