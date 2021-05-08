/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import Navigator from "./app/navigator";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: "#FFF", flex: 1 }}>
        <Navigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
