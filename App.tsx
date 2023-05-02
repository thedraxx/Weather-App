import { CitiesWeatherProvider } from "./src/components/context/CitiesWeather";
import { SearchProvider } from "./src/components/context/Search";
import ButtomTabNavigator from "./src/navigator/ButtomTabNavigator";

function App(): JSX.Element {
  return (
    <SearchProvider>
      <CitiesWeatherProvider>
        <ButtomTabNavigator />
      </CitiesWeatherProvider>
    </SearchProvider>
  );
}

export default App;
