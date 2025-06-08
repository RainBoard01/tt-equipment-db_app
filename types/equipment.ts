export interface Rubber {
	id: string;
	name: string;
	brand: string;
	type: 'inverted' | 'short_pips' | 'long_pips' | 'anti';
	hardness: number; // 30-50+ degrees on the Japanese hardness scale
	speed: number; // 1-10 scale
	spin: number; // 1-10 scale
	control: number; // 1-10 scale
	tackiness: number; // 1-10 scale
	price: number;
	weight: number; // grams
	thickness: number[]; // available thicknesses in mm
	imageUrl?: string;
	description: string;
	pros: string[];
	cons: string[];
	recommendedFor: string[];
}

export interface Blade {
	id: string;
	name: string;
	brand: string;
	plies: number;
	composition: string[]; // materials like 'koto', 'ayous', 'carbon', etc.
	weight: number; // grams
	speed: number; // 1-10 scale
	control: number; // 1-10 scale
	stiffness: number; // 1-10 scale (1 = very flexible, 10 = very stiff)
	price: number;
	handle:
		| 'straight'
		| 'flared'
		| 'anatomic'
		| 'chinese_penhold'
		| 'japanese_penhold';
	thickness: number; // mm
	imageUrl?: string;
	description: string;
	pros: string[];
	cons: string[];
	recommendedFor: string[];
}

export interface EquipmentStats {
	totalRubbers: number;
	totalBlades: number;
	avgRubberPrice: number;
	avgBladePrice: number;
}
