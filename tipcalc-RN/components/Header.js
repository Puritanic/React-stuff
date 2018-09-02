import React from 'react';
import { StyleSheet, StatusBar, Platform } from 'react-native';
import { Header, Body, Right, Left, Title } from 'native-base';

export default function Head() {
	return (
		<Header style={styles.header}>
			<Left />
			<Body>
				<Title>Header</Title>
			</Body>
			<Right />
		</Header>
	);
}

const styles = StyleSheet.create({
	header: {
		// marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // or
		...Platform.select({
			android: {
				marginTop: StatusBar.currentHeight,
			},
		}),
	},
});
