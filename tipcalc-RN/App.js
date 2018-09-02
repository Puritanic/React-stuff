import React from 'react';
import Expo from 'expo';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { Container, Content } from 'native-base';

import Header from './components/Header';
import Values from './components/Values';
import ButtonGroup from './components/ButtonGroup';

export default class App extends React.Component {
	state = {
		value: '',
		tip: 0.2,
		isReady: false,
	};

	async componentWillMount() {
		await Expo.Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
		});

		this.setState({ isReady: true });
	}

	onChangeText = value => this.setState({ value });

	onTipPercentChange = tip => {
		if (tip) {
			return this.setState({ tip: parseFloat(tip) / 100 });
		}
		return this.setState({ tip: 0 });
	};

	render() {
		if (!this.state.isReady) {
			return <Expo.AppLoading />;
		}
		return (
			<Container>
				<Header />
				<View style={styles.container}>
					<Content style={{ width: '100%' }}>
						<Values bill={this.state.value} tipPercent={this.state.tip} />
						<View style={styles.control}>
							<TextInput
								value={this.state.value}
								style={styles.input}
								keyboardType="numeric"
								placeholder="0.00"
								onChangeText={this.onChangeText}
								underlineColorAndroid="#fff"
								placeholderTextColor="#ccc"
							/>
							<ButtonGroup
								onTipPercentChange={this.onTipPercentChange}
								tipPercent={this.state.tip}
							/>
						</View>
					</Content>
				</View>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
		height: '100%',
		width: '100%',
	},
	control: {
		backgroundColor: '#212121',
		padding: 20,
	},
	input: {
		height: 40,
		width: '100%',
		borderColor: '#333',
		borderWidth: 1,
		padding: 5,
		color: '#fff',
	},
});
