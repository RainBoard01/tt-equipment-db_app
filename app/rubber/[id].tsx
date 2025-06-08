import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { sampleRubbers } from '../../data/sampleData';
import { Rubber } from '../../types/equipment';

// Simulated API call
const fetchRubber = async (id: string): Promise<Rubber | undefined> => {
	await new Promise(resolve => setTimeout(resolve, 300));
	return sampleRubbers.find(rubber => rubber.id === id);
};

export default function RubberDetailScreen() {
	const { id } = useLocalSearchParams<{ id: string }>();

	const {
		data: rubber,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['rubber', id],
		queryFn: () => fetchRubber(id!),
		enabled: !!id,
	});

	if (isLoading) {
		return (
			<View style={styles.centerContainer}>
				<Text style={styles.loadingText}>Loading rubber details...</Text>
			</View>
		);
	}

	if (error || !rubber) {
		return (
			<View style={styles.centerContainer}>
				<Text style={styles.errorText}>Rubber not found</Text>
			</View>
		);
	}

	return (
		<ScrollView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>{rubber.name}</Text>
				<Text style={styles.brand}>{rubber.brand}</Text>
			</View>

			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Stats</Text>
				<Text>Speed: {rubber.speed}/10</Text>
				<Text>Spin: {rubber.spin}/10</Text>
				<Text>Control: {rubber.control}/10</Text>
				<Text>Price: ${rubber.price}</Text>
			</View>

			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Description</Text>
				<Text>{rubber.description}</Text>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
	centerContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	loadingText: {
		fontSize: 16,
		color: '#666',
	},
	errorText: {
		fontSize: 16,
		color: '#f44336',
	},
	header: {
		backgroundColor: 'white',
		padding: 20,
		alignItems: 'center',
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#333',
	},
	brand: {
		fontSize: 18,
		color: '#666',
		marginTop: 4,
	},
	section: {
		backgroundColor: 'white',
		padding: 20,
		marginBottom: 10,
	},
	sectionTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#333',
		marginBottom: 16,
	},
});
