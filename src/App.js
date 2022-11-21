import Notification from "./components/Notification/Notification";
import SideNav from "./components/SideNav/SideNav";
import TopNav from "./components/TopNav/TopNav";
import "./components/TopNav/TopNav.css";
import "./components/SideNav/SideNav.css";
import "./components/Notification/Notification.css";
import Footer from "./components/Footer";

function App() {
  return (
    <section>
      <SideNav />
      <TopNav />
      <Notification />
      <Footer />
    </section>
  );
}

export default App;
