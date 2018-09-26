import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	//HEADER
	header:{
		backgroundColor: '#0000e6'
	},
	title: {
		alignItems:'center', 
		justifyContent:'center',
		color:'white'
	},
	content:{
		backgroundColor: '#efefef',
		flex: 1,
		backgroundColor: '#ccccff',
	},
	grid: {
		marginLeft: 7,
		marginRight: 7,
		flex : 1
	},
	col: {
		backgroundColor: '#ccccff', 
		height: 140,
		flex : 1	
	},
//for icon
	styleImage:{
		width: 100, 
		height: 100, 
		alignSelf:'center',
		marginTop:4
	},
	icon : {
		fontSize: 106,
		alignSelf:'center',
		color: '#3333ff'
	},
	contentIcon : {
		alignSelf:'center',
	},
	textIcon:{
		fontSize:15,
		fontFamily: 'roboto',
	},

//test content
	contentCard : {
		flexDirection: 'row'
	}
});

export default styles;
