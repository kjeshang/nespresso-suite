export interface Coffee {
    id: string;
    name: string;
    capsuleImage: string;
    sleeveImage: string;
    type: string;
    status: string;
    category: string;
    cupSize: string;
    headline: string;
    intensity: number | string;
    price: number;
    notes: string;
    taste: string;
    tasteProfile: TasteProfile;
    description: string;
    origin: string;
    roasting: string;
    contentsAllergens: string;
    ingredients: string;
    netWeight: string;
    uniqueName: string;
    estimatedIntensity: number | string;
    acidityClassification: string;
    bitternessClassification: string;
    roastinessClassification: string;
    bodyClassification: string;
    milkyTasteClassification: string;
    bitternessWithMilkClassification: string;
    roastinessWithMilkClassification: string;
    creamyTextureClassification: string;
    tasteProfileChart: string;
    textualInfo: string;
    wordCloud: string;
    featureResults: string;
    guide: string;
    recommendations: Recommendation[];
}

export interface TasteProfile {
    acidity: number;
    bitterness: number;
    roastiness: number;
    body: number;
    milkyTaste: number;
    bitternessWithMilk: number;
    roastinessWithMilk: number;
    creamyTexture: number;
}

export interface Recommendation {
    uniqueName: string;
    type: string;
    headline: string;
    cupSize: string;
    intensity: number | string;
    similarityScore: number;
}