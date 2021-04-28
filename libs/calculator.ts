import {PersonParams, HealthProfile} from "./../types";
import {createHealthProfile} from './../utils/bmi-calculator';

import memoize from "fast-memoize";

export function generateHealthProfiles(persons: Array<PersonParams>): Array<HealthProfile> {
  const memoizedCreateHealthProfile = memoize(createHealthProfile);
  return persons.map(person => memoizedCreateHealthProfile(person));
}

export function getNumberOfOverweightPeoples(personProfiles: Array<HealthProfile>){
  const numberOfOverweightPeoples = personProfiles.filter(person => person.BMI >= 25 && person.BMI <= 29.9).length;
  return numberOfOverweightPeoples;
}