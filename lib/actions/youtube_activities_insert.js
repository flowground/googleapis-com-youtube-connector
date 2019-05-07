/**
 * Auto-generated action file for "YouTube Data" API.
 *
 * Generated at: 2019-05-07T14:42:09.404Z
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
 * Operation: 'youtube.activities.insert'
 * Endpoint Path: '/activities'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "part",
    "fields",
    "key",
    "oauth_token",
    "prettyPrint",
    "quotaUser",
    "userIp"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "part": "part",
    "fields": "fields",
    "key": "key",
    "oauth_token": "oauth_token",
    "prettyPrint": "prettyPrint",
    "quotaUser": "quotaUser",
    "userIp": "userIp",
    "channelId": "channelId",
    "kind": "kind",
    "playlistId": "playlistId",
    "videoId": "videoId",
    "resourceId": "resourceId",
    "bulletin": "bulletin",
    "channelItem": "channelItem",
    "comment": "comment",
    "favorite": "favorite",
    "like": "like",
    "playlistItemId": "playlistItemId",
    "playlistItem": "playlistItem",
    "adTag": "adTag",
    "clickTrackingUrl": "clickTrackingUrl",
    "creativeViewUrl": "creativeViewUrl",
    "ctaType": "ctaType",
    "customCtaButtonText": "customCtaButtonText",
    "descriptionText": "descriptionText",
    "destinationUrl": "destinationUrl",
    "forecastingUrl": "forecastingUrl",
    "impressionUrl": "impressionUrl",
    "promotedItem": "promotedItem",
    "reason": "reason",
    "seedResourceId": "seedResourceId",
    "recommendation": "recommendation",
    "author": "author",
    "imageUrl": "imageUrl",
    "referenceUrl": "referenceUrl",
    "type": "type",
    "social": "social",
    "subscription": "subscription",
    "upload": "upload",
    "contentDetails": "contentDetails",
    "etag": "etag",
    "id": "id",
    "channelTitle": "channelTitle",
    "description": "description",
    "groupId": "groupId",
    "publishedAt": "publishedAt",
    "height": "height",
    "url": "url",
    "width": "width",
    "default": "default",
    "high": "high",
    "maxres": "maxres",
    "medium": "medium",
    "standard": "standard",
    "thumbnails": "thumbnails",
    "title": "title",
    "snippet": "snippet",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['Oauth2']};
    securities['Oauth2'] = {token: cfg['Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'youtube.activities.insert',
        pathName: '/activities',
        method: 'post',
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