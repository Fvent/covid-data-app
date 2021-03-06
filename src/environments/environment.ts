// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  historicUSValues: "https://api.covidtracking.com/v1/us/daily.json",
  currentUSValues: "https://api.covidtracking.com/v1/us/current.json",
  historicDateValuesUS:"https://api.covidtracking.com/v1/us/20200501.json",
  historicValuesForAllStates:"https://api.covidtracking.com/v1/states/daily.json",
  currentValuesForAllStates:"https://api.covidtracking.com/v1/states/current.json",
  currentValuesForSingleState:"https://api.covidtracking.com/v1/states/ca/current.json",
  historicValuesForSingleState:"https://api.covidtracking.com/v1/states/ca/daily.json",
  valuesForSingleStateOnSpecificDate:"https://api.covidtracking.com/v1/states/ca/20200501.json",
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
