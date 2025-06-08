import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { sampleBlades } from '../data/sampleData';
import { Blade } from '../types/equipment';

// Simulated API call
const fetchBlades = async (): Promise<Blade[]> => {
	// Simulate network delay
	await new Promise(resolve => setTimeout(resolve, 500));
	return sampleBlades;
};

const BladeCard = ({ blade }: { blade: Blade }) => {
	const getHandleColor = (handle: Blade['handle']) => {
		switch (handle) {
			case 'straight':
				return '#2196F3';
			case 'flared':
				return '#4CAF50';
			case 'anatomic':
				return '#FF9800';
			case 'chinese_penhold':
				return '#F44336';
			case 'japanese_penhold':
				return '#9C27B0';
			default:
				return '#757575';
		}
	};

	return (
		<Link href={`/blade/${blade.id}`} asChild>
			<Pressable style={styles.card}>
				<View style={styles.cardHeader}>
					<Text style={styles.bladeName}>{blade.name}</Text>
					<Text style={styles.brand}>{blade.brand}</Text>
				</View>

				<View style={styles.compositionContainer}>
					<Text style={styles.compositionLabel}>
						Composition ({blade.plies} plies):
					</Text>
					<Text style={styles.composition}>
						{blade.composition.join(' + ')}
					</Text>
				</View>

				<View
					style={[
						styles.handleTag,
						{ backgroundColor: getHandleColor(blade.handle) },
					]}
				>
					<Text style={styles.handleText}>
						{blade.handle.replace('_', ' ')}
					</Text>
				</View>

				<View style={styles.statsRow}>
					<View style={styles.statItem}>
						<Text style={styles.statLabel}>Speed</Text>
						<Text style={styles.statValue}>{blade.speed}/10</Text>
					</View>

					<View style={styles.statItem}>
						<Text style={styles.statLabel}>Control</Text>
						<Text style={styles.statValue}>{blade.control}/10</Text>
					</View>

					<View style={styles.statItem}>
						<Text style={styles.statLabel}>Weight</Text>
						<Text style={styles.statValue}>{blade.weight}g</Text>
					</View>

					<View style={styles.statItem}>
						<Text style={styles.statLabel}>Price</Text>
						<Text style={styles.statValue}>${blade.price}</Text>
					</View>
				</View>

				<Text style={styles.description} numberOfLines={2}>
					{blade.description}
				</Text>
			</Pressable>
		</Link>
	);
};

export default function BladesScreen() {
	const {
		data: blades,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['blades'],
		queryFn: fetchBlades,
	});

	if (isLoading) {
		return (
			<View style={styles.centerContainer}>
				<Text style={styles.loadingText}>Loading blades...</Text>
			</View>
		);
	}

	if (error) {
		return (
			<View style={styles.centerContainer}>
				<Text style={styles.errorText}>Error loading blades</Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Table Tennis Blades</Text>
			<Text style={styles.subtitle}>
				{blades?.length || 0} blades available
			</Text>

			<FlatList
				data={blades}
				keyExtractor={item => item.id}
				renderItem={({ item }) => <BladeCard blade={item} />}
				contentContainerStyle={styles.listContent}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
		padding: 16,
	},
	centerContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 8,
		color: '#333',
	},
	subtitle: {
		fontSize: 16,
		color: '#666',
		marginBottom: 20,
	},
	loadingText: {
		fontSize: 16,
		color: '#666',
	},
	errorText: {
		fontSize: 16,
		color: '#f44336',
	},
	listContent: {
		gap: 16,
	},
	card: {
		backgroundColor: 'white',
		borderRadius: 12,
		padding: 16,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 3.84,
		elevation: 5,
	},
	cardHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		marginBottom: 8,
	},
	bladeName: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#333',
		flex: 1,
	},
	brand: {
		fontSize: 14,
		color: '#666',
		fontWeight: '500',
	},
	compositionContainer: {
		marginBottom: 12,
	},
	compositionLabel: {
		fontSize: 12,
		color: '#666',
		marginBottom: 4,
	},
	composition: {
		fontSize: 14,
		color: '#333',
		fontStyle: 'italic',
	},
	handleTag: {
		alignSelf: 'flex-start',
		paddingHorizontal: 12,
		paddingVertical: 4,
		borderRadius: 16,
		marginBottom: 12,
	},
	handleText: {
		color: 'white',
		fontSize: 12,
		fontWeight: '600',
		textTransform: 'capitalize',
	},
	statsRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 12,
	},
	statItem: {
		alignItems: 'center',
	},
	statLabel: {
		fontSize: 12,
		color: '#666',
		marginBottom: 2,
	},
	statValue: {
		fontSize: 14,
		fontWeight: '600',
		color: '#333',
	},
	description: {
		fontSize: 14,
		color: '#666',
		lineHeight: 20,
	},
});
