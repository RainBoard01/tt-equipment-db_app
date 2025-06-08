import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Table Tennis Equipment Database</Text>
			<Text style={styles.subtitle}>
				Explore comprehensive stats and information about table tennis
				equipment
			</Text>

			<View style={styles.buttonContainer}>
				<Link href='/rubbers' asChild>
					<Pressable style={[styles.button, styles.rubberButton]}>
						<Text style={styles.buttonText}>🏓 Rubbers</Text>
						<Text style={styles.buttonSubtext}>Browse rubber sheets</Text>
					</Pressable>
				</Link>

				<Link href='/blades' asChild>
					<Pressable style={[styles.button, styles.bladeButton]}>
						<Text style={styles.buttonText}>🏏 Blades</Text>
						<Text style={styles.buttonSubtext}>
							Explore paddle blades
						</Text>
					</Pressable>
				</Link>
			</View>

			<View style={styles.statsContainer}>
				<View style={styles.statItem}>
					<Text style={styles.statNumber}>50+</Text>
					<Text style={styles.statLabel}>Rubber Models</Text>
				</View>
				<View style={styles.statItem}>
					<Text style={styles.statNumber}>30+</Text>
					<Text style={styles.statLabel}>Blade Models</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
		padding: 20,
		justifyContent: 'center',
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 10,
		color: '#333',
	},
	subtitle: {
		fontSize: 16,
		textAlign: 'center',
		marginBottom: 40,
		color: '#666',
		lineHeight: 22,
	},
	buttonContainer: {
		gap: 20,
		marginBottom: 40,
	},
	button: {
		padding: 20,
		borderRadius: 12,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	rubberButton: {
		backgroundColor: '#FF6B6B',
	},
	bladeButton: {
		backgroundColor: '#4ECDC4',
	},
	buttonText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#333',
		marginBottom: 5,
	},
	buttonSubtext: {
		fontSize: 14,
		color: '#333',
		opacity: 0.9,
	},
	statsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: 'white',
		padding: 20,
		borderRadius: 12,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 3.84,
		elevation: 3,
	},
	statItem: {
		alignItems: 'center',
	},
	statNumber: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#333',
	},
	statLabel: {
		fontSize: 14,
		color: '#666',
		marginTop: 5,
	},
});
