/**
 * Auto-generated action file for "YouTube Data" API.
 *
 * Generated at: 2019-05-07T14:42:09.411Z
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
 * Operation: 'youtube.channels.update'
 * Endpoint Path: '/channels'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "onBehalfOfContentOwner",
    "part",
    "key",
    "oauth_token",
    "prettyPrint",
    "quotaUser",
    "userIp"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "onBehalfOfContentOwner": "onBehalfOfContentOwner",
    "part": "part",
    "key": "key",
    "oauth_token": "oauth_token",
    "prettyPrint": "prettyPrint",
    "quotaUser": "quotaUser",
    "userIp": "userIp",
    "communityGuidelinesGoodStanding": "communityGuidelinesGoodStanding",
    "contentIdClaimsGoodStanding": "contentIdClaimsGoodStanding",
    "copyrightStrikesGoodStanding": "copyrightStrikesGoodStanding",
    "auditDetails": "auditDetails",
    "country": "country",
    "defaultLanguage": "defaultLanguage",
    "defaultTab": "defaultTab",
    "description": "description",
    "featuredChannelsTitle": "featuredChannelsTitle",
    "featuredChannelsUrls": "featuredChannelsUrls",
    "keywords": "keywords",
    "moderateComments": "moderateComments",
    "profileColor": "profileColor",
    "showBrowseView": "showBrowseView",
    "showRelatedChannels": "showRelatedChannels",
    "title": "title",
    "trackingAnalyticsAccountId": "trackingAnalyticsAccountId",
    "unsubscribedTrailer": "unsubscribedTrailer",
    "channel": "channel",
    "hints": "hints",
    "default": "default",
    "value": "value",
    "localized": "localized",
    "backgroundImageUrl": "backgroundImageUrl",
    "bannerExternalUrl": "bannerExternalUrl",
    "bannerImageUrl": "bannerImageUrl",
    "bannerMobileExtraHdImageUrl": "bannerMobileExtraHdImageUrl",
    "bannerMobileHdImageUrl": "bannerMobileHdImageUrl",
    "bannerMobileImageUrl": "bannerMobileImageUrl",
    "bannerMobileLowImageUrl": "bannerMobileLowImageUrl",
    "bannerMobileMediumHdImageUrl": "bannerMobileMediumHdImageUrl",
    "bannerTabletExtraHdImageUrl": "bannerTabletExtraHdImageUrl",
    "bannerTabletHdImageUrl": "bannerTabletHdImageUrl",
    "bannerTabletImageUrl": "bannerTabletImageUrl",
    "bannerTabletLowImageUrl": "bannerTabletLowImageUrl",
    "bannerTvHighImageUrl": "bannerTvHighImageUrl",
    "bannerTvImageUrl": "bannerTvImageUrl",
    "bannerTvLowImageUrl": "bannerTvLowImageUrl",
    "bannerTvMediumImageUrl": "bannerTvMediumImageUrl",
    "largeBrandedBannerImageImapScript": "largeBrandedBannerImageImapScript",
    "largeBrandedBannerImageUrl": "largeBrandedBannerImageUrl",
    "smallBrandedBannerImageImapScript": "smallBrandedBannerImageImapScript",
    "smallBrandedBannerImageUrl": "smallBrandedBannerImageUrl",
    "trackingImageUrl": "trackingImageUrl",
    "watchIconImageUrl": "watchIconImageUrl",
    "image": "image",
    "backgroundColor": "backgroundColor",
    "featuredPlaylistId": "featuredPlaylistId",
    "textColor": "textColor",
    "watch": "watch",
    "brandingSettings": "brandingSettings",
    "favorites": "favorites",
    "likes": "likes",
    "uploads": "uploads",
    "watchHistory": "watchHistory",
    "watchLater": "watchLater",
    "relatedPlaylists": "relatedPlaylists",
    "contentDetails": "contentDetails",
    "contentOwner": "contentOwner",
    "timeLinked": "timeLinked",
    "contentOwnerDetails": "contentOwnerDetails",
    "pings": "pings",
    "conversionPings": "conversionPings",
    "etag": "etag",
    "id": "id",
    "durationMs": "durationMs",
    "offsetMs": "offsetMs",
    "type": "type",
    "defaultTiming": "defaultTiming",
    "items": "items",
    "cornerPosition": "cornerPosition",
    "position": "position",
    "useSmartTiming": "useSmartTiming",
    "invideoPromotion": "invideoPromotion",
    "kind": "kind",
    "localizations": "localizations",
    "customUrl": "customUrl",
    "publishedAt": "publishedAt",
    "height": "height",
    "url": "url",
    "width": "width",
    "high": "high",
    "maxres": "maxres",
    "medium": "medium",
    "standard": "standard",
    "thumbnails": "thumbnails",
    "snippet": "snippet",
    "commentCount": "commentCount",
    "hiddenSubscriberCount": "hiddenSubscriberCount",
    "subscriberCount": "subscriberCount",
    "videoCount": "videoCount",
    "viewCount": "viewCount",
    "statistics": "statistics",
    "isLinked": "isLinked",
    "longUploadsStatus": "longUploadsStatus",
    "privacyStatus": "privacyStatus",
    "status": "status",
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
    securities['Oauth2'] = {token: cfg['Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'youtube.channels.update',
        pathName: '/channels',
        method: 'put',
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