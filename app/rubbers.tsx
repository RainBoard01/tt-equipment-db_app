import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { sampleRubbers } from '../data/sampleData';
import { Rubber } from '../types/equipment';

// Simulated API call
const fetchRubbers = async (): Promise<Rubber[]> => {
	// Simulate network delay
	await new Promise(resolve => setTimeout(resolve, 500));
	return sampleRubbers;
};

const RubberCard = ({ rubber }: { rubber: Rubber }) => {
	const getTypeColor = (type: Rubber['type']) => {
		switch (type) {
			case 'inverted':
				return '#4CAF50';
			case 'short_pips':
				return '#FF9800';
			case 'long_pips':
				return '#F44336';
			case 'anti':
				return '#9C27B0';
			default:
				return '#757575';
		}
	};

	return (
		<Link href={`/rubber/${rubber.id}`} asChild>
			<Pressable style={styles.card}>
				<View style={styles.cardHeader}>
					<Text style={styles.rubberName}>{rubber.name}</Text>
					<Text style={styles.brand}>{rubber.brand}</Text>
				</View>

				<View
					style={[
						styles.typeTag,
						{ backgroundColor: getTypeColor(rubber.type) },
					]}
				>
					<Text style={styles.typeText}>
						{rubber.type.replace('_', ' ')}
					</Text>
				</View>

				<View style={styles.statsRow}>
					<View style={styles.statItem}>
						<Text style={styles.statLabel}>Speed</Text>
						<Text style={styles.statValue}>{rubber.speed}/10</Text>
					</View>

					<View style={styles.statItem}>
						<Text style={styles.statLabel}>Spin</Text>
						<Text style={styles.statValue}>{rubber.spin}/10</Text>
					</View>

					<View style={styles.statItem}>
						<Text style={styles.statLabel}>Control</Text>
						<Text style={styles.statValue}>{rubber.control}/10</Text>
					</View>

					<View style={styles.statItem}>
						<Text style={styles.statLabel}>Price</Text>
						<Text style={styles.statValue}>${rubber.price}</Text>
					</View>
				</View>

				<Text style={styles.description} numberOfLines={2}>
					{rubber.description}
				</Text>
			</Pressable>
		</Link>
	);
};

export default function RubbersScreen() {
	const {
		data: rubbers,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['rubbers'],
		queryFn: fetchRubbers,
	});

	if (isLoading) {
		return (
			<View style={styles.centerContainer}>
				<Text style={styles.loadingText}>Loading rubbers...</Text>
			</View>
		);
	}

	if (error) {
		return (
			<View style={styles.centerContainer}>
				<Text style={styles.errorText}>Error loading rubbers</Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Table Tennis Rubbers</Text>
			<Text style={styles.subtitle}>
				{rubbers?.length || 0} rubbers available
			</Text>

			<FlatList
				data={rubbers}
				keyExtractor={item => item.id}
				renderItem={({ item }) => <RubberCard rubber={item} />}
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
	rubberName: {
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
	typeTag: {
		alignSelf: 'flex-start',
		paddingHorizontal: 12,
		paddingVertical: 4,
		borderRadius: 16,
		marginBottom: 12,
	},
	typeText: {
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
