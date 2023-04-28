import { SearchProvider } from "./src/components/context";
import ButtomTabNavigator from "./src/navigator/ButtomTabNavigator";

function App(): JSX.Element {
  return (
    <SearchProvider>
      <ButtomTabNavigator />
    </SearchProvider>
  );
}

export default App;
