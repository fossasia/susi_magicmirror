/**
 * Created by betterclever on 6/28/17.
 */
import * as WebRequest from "web-request";

export interface LocationData {
    latitude : number;
    longitude: number;
    geoSource: string;
}

const DEFAULT_API_ENDPOINT = "api.susi.ai";

export class ChatAPI {
    private apiEndpoint : string;
    private accessToken : string;
    private timezoneOffset: number;
    private location : LocationData;

    constructor(apiEndpoint: string = DEFAULT_API_ENDPOINT,
                timezoneOffset: number = null,
                location: LocationData = null,
                accessToken: string = null){
        this.apiEndpoint = apiEndpoint;
        this.accessToken = accessToken;
        this.location = location;
        this.timezoneOffset = timezoneOffset;
    }

    public async askSusi(query: string) : Promise<any> {

        // TODO: Use access token and location parameters
        let requestString = 'http://api.susi.ai/susi/chat.json?q=' + query;

        let response = await WebRequest.get(requestString);
        return JSON.parse(response.content);

    }
}