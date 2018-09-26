import React, { Component } from 'react';
import { StackNavigator } from "react-navigation";
//component from MainMenu 
import MainScreenNavigator from '../_TabScreen'

import Mutations from '../_ListMenuNavReport/Mutation'
import Purchases from '../_ListMenuNavReport/Purchase '
import Sales from '../_ListMenuNavReport/Sales'
import ReturnCustomers from '../_ListMenuNavReport/ReturnCustomer'
import ReturnSuppliers from '../_ListMenuNavReport/ReturnSupplier'

export default (MainMenuNavReport = StackNavigator({
	Home: {
		screen: MainScreenNavigator, //untuk go back sbelumnya
		navigationOptions: {
			header: null,
		}
	},
	Purchases : {
		screen : Purchases
	},
	Sales : {
		screen : Sales
	},
	ReturnSuppliers : {
		screen : ReturnSuppliers
	},
	Mutations : {
		screen : Mutations
	},
	ReturnCustomers : {
		screen : ReturnCustomers
	},
},
    {
        mode: 'modal',
    }
));
