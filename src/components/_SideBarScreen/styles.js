import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

	//for icon
	textIcon: {
		fontFamily: 'roboto',
		fontSize : 15
	}, 
	textNumb: {
		fontFamily: 'roboto',
		marginLeft: 16 
	},
	textProfiles:{
		color: 'white'
	},
	styleSidebar:{ 
		backgroundColor: '#ccf5ff' 
	},
	textSidebar:{ 
		color: '#333', fontFamily:'roboto', 
		fontSize:13
	},
	//for image
	sideImage:{
		 width: 22, height: 22, tintColor: 'blue',
		 alignSelf: 'flex-start',
	}
});

export default styles;
