import Expressions from "./components/Expressions";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import WelcomeMessage from "./components/WelcomeMessage";
import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";
import List from "./components/List";
import UserList from "./components/UserList";
import ProductList from "./components/ProductList";
import Props from "./components/Props";
import Person from "./components/Person";


function App(){
  return( <div>
    <Header />
    <Footer />
    <MainContent />
    <WelcomeMessage />
    <Expressions />
    <Greeting />
    <ProductInfo />
    <List />
    <UserList />
    <ProductList />
    <Props />
    <Person />
  </div>
  )}
export default App;