import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { sampleBlades } from '../../data/sampleData';
import { Blade } from '../../types/equipment';

// Simulated API call
const fetchBlade = async (id: string): Promise<Blade | undefined> => {
	await new Promise(resolve => setTimeout(resolve, 300));
	return sampleBlades.find(blade => blade.id === id);
};

export default function BladeDetailScreen() {
	const { id } = useLocalSearchParams<{ id: string }>();

	const {
		data: blade,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['blade', id],
		queryFn: () => fetchBlade(id!),
		enabled: !!id,
	});

	if (isLoading) {
		return (
			<View style={styles.centerContainer}>
				<Text style={styles.loadingText}>Loading blade details...</Text>
			</View>
		);
	}

	if (error || !blade) {
		return (
			<View style={styles.centerContainer}>
				<Text style={styles.errorText}>Blade not found</Text>
			</View>
		);
	}

	return (
		<ScrollView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>{blade.name}</Text>
				<Text style={styles.brand}>{blade.brand}</Text>
			</View>

			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Stats</Text>
				<Text>Speed: {blade.speed}/10</Text>
				<Text>Control: {blade.control}/10</Text>
				<Text>Stiffness: {blade.stiffness}/10</Text>
				<Text>Weight: {blade.weight}g</Text>
				<Text>Price: ${blade.price}</Text>
			</View>

			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Specifications</Text>
				<Text>Plies: {blade.plies}</Text>
				<Text>Handle: {blade.handle}</Text>
				<Text>Thickness: {blade.thickness}mm</Text>
				<Text>Composition: {blade.composition.join(' + ')}</Text>
			</View>

			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Description</Text>
				<Text>{blade.description}</Text>
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
