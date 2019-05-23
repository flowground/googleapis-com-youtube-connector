/**
 * Auto-generated action file for "YouTube Data" API.
 *
 * Generated at: 2019-05-23T09:33:22.182Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-youtube-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'youtube.search.list'
 * Endpoint Path: '/search'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "channelId",
    "channelType",
    "eventType",
    "forContentOwner",
    "forDeveloper",
    "forMine",
    "location",
    "locationRadius",
    "maxResults",
    "onBehalfOfContentOwner",
    "order",
    "pageToken",
    "part",
    "publishedAfter",
    "publishedBefore",
    "q",
    "regionCode",
    "relatedToVideoId",
    "relevanceLanguage",
    "safeSearch",
    "topicId",
    "type",
    "videoCaption",
    "videoCategoryId",
    "videoDefinition",
    "videoDimension",
    "videoDuration",
    "videoEmbeddable",
    "videoLicense",
    "videoSyndicated",
    "videoType"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "channelId": "channelId",
    "channelType": "channelType",
    "eventType": "eventType",
    "forContentOwner": "forContentOwner",
    "forDeveloper": "forDeveloper",
    "forMine": "forMine",
    "location": "location",
    "locationRadius": "locationRadius",
    "maxResults": "maxResults",
    "onBehalfOfContentOwner": "onBehalfOfContentOwner",
    "order": "order",
    "pageToken": "pageToken",
    "part": "part",
    "publishedAfter": "publishedAfter",
    "publishedBefore": "publishedBefore",
    "q": "q",
    "regionCode": "regionCode",
    "relatedToVideoId": "relatedToVideoId",
    "relevanceLanguage": "relevanceLanguage",
    "safeSearch": "safeSearch",
    "topicId": "topicId",
    "type": "type",
    "videoCaption": "videoCaption",
    "videoCategoryId": "videoCategoryId",
    "videoDefinition": "videoDefinition",
    "videoDimension": "videoDimension",
    "videoDuration": "videoDuration",
    "videoEmbeddable": "videoEmbeddable",
    "videoLicense": "videoLicense",
    "videoSyndicated": "videoSyndicated",
    "videoType": "videoType"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['auth_Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'youtube.search.list',
        pathName: '/search',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}