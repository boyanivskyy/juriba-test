// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    youtubeApiKey: 'AIzaSyA_s2Fj67_niSW0MIa2gup0bu-ttMQhQgk',
    // apiUrl: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyA_s2Fj67_niSW0MIa2gup0bu-ttMQhQgk&maxResults=50&type=video&part=snippet&q=john'
    apiUrl:
        'https://www.googleapis.com/youtube/v3/search?key=AIzaSyA_s2Fj67_niSW0MIa2gup0bu-ttMQhQgk&maxResults=50&type=video&part=snippet&q=john',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.