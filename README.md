## Health Profile Calculator

This app creates a health profile based on Height and Weight of a given person. It accepts data in person. The data provided must be in the JSON format as provided

```ts

   { 
     Gender: string;
     HeightCm: number;
     WeightKg: number;
   }

```

## Formula for Creation of BMI Value

BMI (kg/m^2) = Mass (in Kg) / Height (in M)^2

## Table for Mapping Values

| Min BMI | Max BMI | BMI Category | Health Risk | |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 0    |    18.4   | Underweight         | Malnutrition Risk  | 
| 18.5 | 24.9      | Normal Weight       | Low Risk           | 
| 25   | 29.9      | Overweight          | Enhanced Risk      | 
| 30   | 34.9      | Moderately Obese    | Medium Risk        |  
| 35   | 39.9      | Severly Obese       | High Risk          | 
| 40   | 40+ | Very Severly Obese  | Very High Risk     | 


## Building, Testing & Deployment 

1. Install Dependencies

```
  npm install
```

2. Build Project

```
  npm run build
```

3. Test Project 

```
  npm run test
```

4. Run Project 

```
  npm start
```

## Using the Service

A server would be up once the service has started. In order to interact with the project. You must provide an API endpoint, from where the data is to be fetched. 

For example, if runnning locally.

Request Format: 

```html
   https://localhost:3000?url=<url-to-your-api-endpoint>
```

Response: 
  The response would be a json object with generated health profiles for given set of data. In case of error, a 400 response would be sent with error message. 