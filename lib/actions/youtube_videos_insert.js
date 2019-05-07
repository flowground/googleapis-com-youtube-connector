/**
 * Auto-generated action file for "YouTube Data" API.
 *
 * Generated at: 2019-05-07T14:42:09.439Z
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
 * Operation: 'youtube.videos.insert'
 * Endpoint Path: '/videos'
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
    "autoLevels",
    "notifySubscribers",
    "onBehalfOfContentOwner",
    "onBehalfOfContentOwnerChannel",
    "part",
    "stabilize",
    "userIp"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "autoLevels": "autoLevels",
    "notifySubscribers": "notifySubscribers",
    "onBehalfOfContentOwner": "onBehalfOfContentOwner",
    "onBehalfOfContentOwnerChannel": "onBehalfOfContentOwnerChannel",
    "part": "part",
    "stabilize": "stabilize",
    "userIp": "userIp",
    "alcoholContent": "alcoholContent",
    "restricted": "restricted",
    "videoGameRating": "videoGameRating",
    "ageGating": "ageGating",
    "caption": "caption",
    "acbRating": "acbRating",
    "agcomRating": "agcomRating",
    "anatelRating": "anatelRating",
    "bbfcRating": "bbfcRating",
    "bfvcRating": "bfvcRating",
    "bmukkRating": "bmukkRating",
    "catvRating": "catvRating",
    "catvfrRating": "catvfrRating",
    "cbfcRating": "cbfcRating",
    "cccRating": "cccRating",
    "cceRating": "cceRating",
    "chfilmRating": "chfilmRating",
    "chvrsRating": "chvrsRating",
    "cicfRating": "cicfRating",
    "cnaRating": "cnaRating",
    "cncRating": "cncRating",
    "csaRating": "csaRating",
    "cscfRating": "cscfRating",
    "czfilmRating": "czfilmRating",
    "djctqRating": "djctqRating",
    "djctqRatingReasons": "djctqRatingReasons",
    "ecbmctRating": "ecbmctRating",
    "eefilmRating": "eefilmRating",
    "egfilmRating": "egfilmRating",
    "eirinRating": "eirinRating",
    "fcbmRating": "fcbmRating",
    "fcoRating": "fcoRating",
    "fmocRating": "fmocRating",
    "fpbRating": "fpbRating",
    "fpbRatingReasons": "fpbRatingReasons",
    "fskRating": "fskRating",
    "grfilmRating": "grfilmRating",
    "icaaRating": "icaaRating",
    "ifcoRating": "ifcoRating",
    "ilfilmRating": "ilfilmRating",
    "incaaRating": "incaaRating",
    "kfcbRating": "kfcbRating",
    "kijkwijzerRating": "kijkwijzerRating",
    "kmrbRating": "kmrbRating",
    "lsfRating": "lsfRating",
    "mccaaRating": "mccaaRating",
    "mccypRating": "mccypRating",
    "mcstRating": "mcstRating",
    "mdaRating": "mdaRating",
    "medietilsynetRating": "medietilsynetRating",
    "mekuRating": "mekuRating",
    "menaMpaaRating": "menaMpaaRating",
    "mibacRating": "mibacRating",
    "mocRating": "mocRating",
    "moctwRating": "moctwRating",
    "mpaaRating": "mpaaRating",
    "mpaatRating": "mpaatRating",
    "mtrcbRating": "mtrcbRating",
    "nbcRating": "nbcRating",
    "nbcplRating": "nbcplRating",
    "nfrcRating": "nfrcRating",
    "nfvcbRating": "nfvcbRating",
    "nkclvRating": "nkclvRating",
    "oflcRating": "oflcRating",
    "pefilmRating": "pefilmRating",
    "rcnofRating": "rcnofRating",
    "resorteviolenciaRating": "resorteviolenciaRating",
    "rtcRating": "rtcRating",
    "rteRating": "rteRating",
    "russiaRating": "russiaRating",
    "skfilmRating": "skfilmRating",
    "smaisRating": "smaisRating",
    "smsaRating": "smsaRating",
    "tvpgRating": "tvpgRating",
    "ytRating": "ytRating",
    "contentRating": "contentRating",
    "allowed": "allowed",
    "exception": "exception",
    "countryRestriction": "countryRestriction",
    "definition": "definition",
    "dimension": "dimension",
    "duration": "duration",
    "hasCustomThumbnail": "hasCustomThumbnail",
    "licensedContent": "licensedContent",
    "projection": "projection",
    "blocked": "blocked",
    "regionRestriction": "regionRestriction",
    "contentDetails": "contentDetails",
    "etag": "etag",
    "audioStreams": "audioStreams",
    "bitrateBps": "bitrateBps",
    "container": "container",
    "creationTime": "creationTime",
    "durationMs": "durationMs",
    "fileName": "fileName",
    "fileSize": "fileSize",
    "fileType": "fileType",
    "videoStreams": "videoStreams",
    "fileDetails": "fileDetails",
    "id": "id",
    "kind": "kind",
    "activeLiveChatId": "activeLiveChatId",
    "actualEndTime": "actualEndTime",
    "actualStartTime": "actualStartTime",
    "concurrentViewers": "concurrentViewers",
    "scheduledEndTime": "scheduledEndTime",
    "scheduledStartTime": "scheduledStartTime",
    "liveStreamingDetails": "liveStreamingDetails",
    "localizations": "localizations",
    "access": "access",
    "monetizationDetails": "monetizationDetails",
    "embedHeight": "embedHeight",
    "embedHtml": "embedHtml",
    "embedWidth": "embedWidth",
    "player": "player",
    "editorSuggestionsAvailability": "editorSuggestionsAvailability",
    "fileDetailsAvailability": "fileDetailsAvailability",
    "processingFailureReason": "processingFailureReason",
    "processingIssuesAvailability": "processingIssuesAvailability",
    "partsProcessed": "partsProcessed",
    "partsTotal": "partsTotal",
    "timeLeftMs": "timeLeftMs",
    "processingProgress": "processingProgress",
    "processingStatus": "processingStatus",
    "tagSuggestionsAvailability": "tagSuggestionsAvailability",
    "thumbnailsAvailability": "thumbnailsAvailability",
    "processingDetails": "processingDetails",
    "tags": "tags",
    "projectDetails": "projectDetails",
    "altitude": "altitude",
    "latitude": "latitude",
    "longitude": "longitude",
    "location": "location",
    "locationDescription": "locationDescription",
    "recordingDate": "recordingDate",
    "recordingDetails": "recordingDetails",
    "categoryId": "categoryId",
    "channelId": "channelId",
    "channelTitle": "channelTitle",
    "defaultAudioLanguage": "defaultAudioLanguage",
    "defaultLanguage": "defaultLanguage",
    "description": "description",
    "liveBroadcastContent": "liveBroadcastContent",
    "title": "title",
    "localized": "localized",
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
    "snippet": "snippet",
    "commentCount": "commentCount",
    "dislikeCount": "dislikeCount",
    "favoriteCount": "favoriteCount",
    "likeCount": "likeCount",
    "viewCount": "viewCount",
    "statistics": "statistics",
    "embeddable": "embeddable",
    "failureReason": "failureReason",
    "license": "license",
    "privacyStatus": "privacyStatus",
    "publicStatsViewable": "publicStatsViewable",
    "publishAt": "publishAt",
    "rejectionReason": "rejectionReason",
    "uploadStatus": "uploadStatus",
    "status": "status",
    "editorSuggestions": "editorSuggestions",
    "processingErrors": "processingErrors",
    "processingHints": "processingHints",
    "processingWarnings": "processingWarnings",
    "tagSuggestions": "tagSuggestions",
    "suggestions": "suggestions",
    "relevantTopicIds": "relevantTopicIds",
    "topicCategories": "topicCategories",
    "topicIds": "topicIds",
    "topicDetails": "topicDetails",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = cfg.body_content_type;

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
    securities['Oauth2'] = {token: cfg['Oauth2']};
    securities['Oauth2'] = {token: cfg['Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'youtube.videos.insert',
        pathName: '/videos',
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