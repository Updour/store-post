import React, { Component } from 'react';
import { StackNavigator } from "react-navigation";

import Agen from "./Agen";
import Guide from "./Guide"
import About from "./About"
import Call from "./Call";
import Logout from "./Logout";

const Profiles = StackNavigator({
  Agen : { screen : Agen},
  Guide: { screen: Guide },
  Call: { screen: Call },
  About: { screen: About },
  Logout: { screen: Logout }
});
export default Profiles;
