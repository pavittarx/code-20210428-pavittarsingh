import {calculateBMIValue, bMIToHealthProfileMapper} from "../utils/bmi-calculator";

test('Check BMI Value is a Number', ()=>{
  expect(calculateBMIValue(150, 84)).toBeDefined();
  expect(calculateBMIValue(120, 54)).not.toBeNaN();
})

test('Health Profile is generated correctly', () => {
  expect(bMIToHealthProfileMapper(25)).toBeDefined();
  expect(bMIToHealthProfileMapper(50)).toHaveProperty('BMICategory');
  expect(bMIToHealthProfileMapper(32)).toHaveProperty('HealthRisk');
});