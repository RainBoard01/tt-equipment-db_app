import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';

const queryClient = new QueryClient();

export default function RootLayout() {
	return (
		<QueryClientProvider client={queryClient}>
			<Stack>
				<Stack.Screen name='index' options={{ title: 'TT Equipment DB' }} />
				<Stack.Screen name='rubbers' options={{ title: 'Rubbers' }} />
				<Stack.Screen name='blades' options={{ title: 'Blades' }} />
				<Stack.Screen
					name='rubber/[id]'
					options={{ title: 'Rubber Details' }}
				/>
				<Stack.Screen
					name='blade/[id]'
					options={{ title: 'Blade Details' }}
				/>
			</Stack>
			<StatusBar style='auto' />
		</QueryClientProvider>
	);
}
