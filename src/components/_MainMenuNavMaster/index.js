import React, { Component } from 'react';
import { StackNavigator } from "react-navigation";
//component from MainMenu 
import MainScreenNavigator from '../_TabScreen'

import Merchandises from '../_ListMenuNavMaster/Merchandise'
import Categorys from '../_ListMenuNavMaster/Category'
import Units from '../_ListMenuNavMaster/Unit'
import Suppliers from '../_ListMenuNavMaster/Supplier'
import Customers from '../_ListMenuNavMaster/Customer'

//
// import InsertStudent from '../_ListMenuNavMaster/_container/insertStudents'
// import UpdateStudents from '../_ListMenuNavMaster/_container/updateStudents'
import UpdateMerchandises from '../_ListMenuNavMaster/Containers/UpdateMerchandises'
export default (MainMenuNavMaster = StackNavigator({
	Home: {
		screen: MainScreenNavigator, //untuk go back sbelumnya
		navigationOptions: {
			header: null,
		}
	},
	Merchandises : {
		screen : Merchandises,
		navigationOptions : {
			header : null
		}
	},
	Categorys : {
		screen : Categorys,
		navigationOptions : {
			header : null
		}
	},
	Units : {
		screen : Units,
		navigationOptions : {
			header : null
		}
	},
	Suppliers : {
		screen : Suppliers,
		navigationOptions : {
			header : null
		}
	},
	Customers : {
		screen : Customers,
		navigationOptions : {
			header : null
		}
	},
	// //
	// InsertStudent : {
	// 	screen : InsertStudent

	// },
	UpdateMerchandises : {
		screen : UpdateMerchandises
	}

},
    {
            mode: 'modal',
    }
));
