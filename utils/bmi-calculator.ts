import {PersonParams, HealthProfile} from "./../types"

const HealthProfileTable = [
  {
    Min: 0,
    Max: 18.4,
    BMICategory: "Underweight",
    HealthRisk: "Malnutrition Risk",
  },
  { Min: 18.5, Max: 24.9, BMICategory: "Normal Weight", HealthRisk: "Low Risk" },
  { Min: 25, Max: 29.9, BMICategory: "OverWeight", HealthRisk: "Enhanced Risk" },
  {
    Min: 30,
    Max: 34.9,
    BMICategory: "Moderately Obese",
    HealthRisk: "Medium Risk",
  },
  { Min: 35, Max: 39.9, BMICategory: "Severly Weight", HealthRisk: "High Risk" },
  {
    Min: 40,
    Max: Infinity,
    BMICategory: "Very Severly Weight",
    HealthRisk: "Very High RIsk",
  },
];

export function calculateBMIValue(heightInCms: number, weightInKgs: number): number {
  const heightInMeters = heightInCms / 100;

  return Math.floor(weightInKgs / Math.pow(heightInMeters, 2));
}

export function bMIToHealthProfileMapper(bmi: number) {
  return HealthProfileTable.find((item) => item.Min <= bmi && item.Max >= bmi);
}

export function createHealthProfile(person: PersonParams): HealthProfile {
  const BMI = calculateBMIValue(person.HeightCm, person.WeightKg);
  const {BMICategory, HealthRisk} = bMIToHealthProfileMapper(BMI)!;
  return {...person, BMI, BMICategory, HealthRisk};
}