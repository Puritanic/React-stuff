import React from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function ButtonGroup({ onTipPercentChange, tipPercent }) {
	return (
		<View style={styles.btnGroup}>
			<Button style={styles.btn} title="10%" onPress={() => onTipPercentChange(10)} />
			<Button style={styles.btn} title="20%" onPress={() => onTipPercentChange(20)} />
			<Button style={styles.btn} title="25%" onPress={() => onTipPercentChange(25)} />
			<TextInput
				style={styles.customTipInput}
				value={(tipPercent * 100).toString()}
				keyboardType="numeric"
				placeholder="0.00"
				onChangeText={onTipPercentChange}
				underlineColorAndroid="#fff"
				placeholderTextColor="#ccc"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	customTipInput: {
		height: 40,
		width: 80,
		padding: 5,
		color: '#fff',
	},
	btnGroup: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 10,
	},
	btn: {
		width: 60,
	},
});
