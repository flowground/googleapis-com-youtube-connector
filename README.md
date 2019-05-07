# ![LOGO](logo.png) YouTube Data **flow**ground Connector

## Description

A generated **flow**ground connector for the YouTube Data API (version v3).

Generated from: https://api.apis.guru/v2/specs/googleapis.com/youtube/v3/swagger.json<br/>
Generated at: 2019-05-07T17:42:09+03:00

## API Description

Supports core YouTube features, such as uploading videos, creating and managing playlists, searching for content, and much more.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Returns a list of channel activity events that match the request criteria. For example, you can retrieve events associated with a particular channel, events associated with the user's subscriptions and Google+ friends, or the YouTube home page feed, which is customized for each user.

*Tags:* `activities`

#### Input Parameters
* `channelId` - _optional_ - The channelId parameter specifies a unique YouTube channel ID. The API will then return a list of that channel's activities.
* `home` - _optional_ - Set this parameter's value to true to retrieve the activity feed that displays on the YouTube home page for the currently authenticated user.
* `maxResults` - _optional_ - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
* `mine` - _optional_ - Set this parameter's value to true to retrieve a feed of the authenticated user's activities.
* `pageToken` - _optional_ - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
* `part` - _required_ - The part parameter specifies a comma-separated list of one or more activity resource properties that the API response will include.

If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in an activity resource, the snippet property contains other properties that identify the type of activity, a display title for the activity, and so forth. If you set part=snippet, the API response will also contain all of those nested properties.
* `publishedAfter` - _optional_ - The publishedAfter parameter specifies the earliest date and time that an activity could have occurred for that activity to be included in the API response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be included in the result set. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
* `publishedBefore` - _optional_ - The publishedBefore parameter specifies the date and time before which an activity must have occurred for that activity to be included in the API response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be excluded from the result set. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
* `regionCode` - _optional_ - The regionCode parameter instructs the API to return results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code. YouTube uses this value when the authorized user's previous activity on YouTube does not provide enough information to generate the activity feed.

### Posts a bulletin for a specific channel. (The user submitting the request must be authorized to act on the channel's behalf.)<br/>
> <br/>
> Note: Even though an activity resource can contain information about actions like a user rating a video or marking a video as a favorite, you need to use other API methods to generate those activity resources. For example, you would use the API's videos.rate() method to rate a video and the playlistItems.insert() method to mark a video as a favorite.

*Tags:* `activities`

#### Input Parameters
* `part` - _required_ - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes a specified caption track.

*Tags:* `captions`

#### Input Parameters
* `id` - _required_ - The id parameter identifies the caption track that is being deleted. The value is a caption track ID as identified by the id property in a caption resource.
* `onBehalfOf` - _optional_ - ID of the Google+ Page for the channel that the request is be on behalf of
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns a list of caption tracks that are associated with a specified video. Note that the API response does not contain the actual captions and that the captions.download method provides the ability to retrieve a caption track.

*Tags:* `captions`

#### Input Parameters
* `id` - _optional_ - The id parameter specifies a comma-separated list of IDs that identify the caption resources that should be retrieved. Each ID must identify a caption track associated with the specified video.
* `onBehalfOf` - _optional_ - ID of the Google+ Page for the channel that the request is on behalf of.
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `part` - _required_ - The part parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet.
* `videoId` - _required_ - The videoId parameter specifies the YouTube video ID of the video for which the API should return caption tracks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Uploads a caption track.

*Tags:* `captions`

#### Input Parameters
* `onBehalfOf` - _optional_ - ID of the Google+ Page for the channel that the request is be on behalf of
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `part` - _required_ - The part parameter specifies the caption resource parts that the API response will include. Set the parameter value to snippet.
* `sync` - _optional_ - The sync parameter indicates whether YouTube should automatically synchronize the caption file with the audio track of the video. If you set the value to true, YouTube will disregard any time codes that are in the uploaded caption file and generate new time codes for the captions.

You should set the sync parameter to true if you are uploading a transcript, which has no time codes, or if you suspect the time codes in your file are incorrect and want YouTube to try to fix them.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates a caption track. When updating a caption track, you can change the track's draft status, upload a new caption file for the track, or both.

*Tags:* `captions`

#### Input Parameters
* `onBehalfOf` - _optional_ - ID of the Google+ Page for the channel that the request is be on behalf of
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `part` - _required_ - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the property value to snippet if you are updating the track's draft status. Otherwise, set the property value to id.
* `sync` - _optional_ - Note: The API server only processes the parameter value if the request contains an updated caption file.

The sync parameter indicates whether YouTube should automatically synchronize the caption file with the audio track of the video. If you set the value to true, YouTube will automatically synchronize the caption track with the audio track.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Downloads a caption track. The caption track is returned in its original format unless the request specifies a value for the tfmt parameter and in its original language unless the request specifies a value for the tlang parameter.

*Tags:* `captions`

#### Input Parameters
* `id` - _required_ - The id parameter identifies the caption track that is being retrieved. The value is a caption track ID as identified by the id property in a caption resource.
* `onBehalfOf` - _optional_ - ID of the Google+ Page for the channel that the request is be on behalf of
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `tfmt` - _optional_ - The tfmt parameter specifies that the caption track should be returned in a specific format. If the parameter is not included in the request, the track is returned in its original format.
    Possible values: sbv, scc, srt, ttml, vtt.
* `tlang` - _optional_ - The tlang parameter specifies that the API response should return a translation of the specified caption track. The parameter value is an ISO 639-1 two-letter language code that identifies the desired caption language. The translation is generated by using machine translation, such as Google Translate.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Uploads a channel banner image to YouTube. This method represents the first two steps in a three-step process to update the banner image for a channel:<br/>
> <br/>
> - Call the channelBanners.insert method to upload the binary image data to YouTube. The image must have a 16:9 aspect ratio and be at least 2120x1192 pixels.<br/>
> - Extract the url property's value from the response that the API returns for step 1.<br/>
> - Call the channels.update method to update the channel's branding settings. Set the brandingSettings.image.bannerExternalUrl property's value to the URL obtained in step 2.

*Tags:* `channelBanners`

#### Input Parameters
* `channelId` - _optional_ - The channelId parameter identifies the YouTube channel to which the banner is uploaded. The channelId parameter was introduced as a required parameter in May 2017. As this was a backward-incompatible change, channelBanners.insert requests that do not specify this parameter will not return an error until six months have passed from the time that the parameter was introduced. Please see the API Terms of Service for the official policy regarding backward incompatible changes and the API revision history for the exact date that the parameter was introduced.
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes a channelSection.

*Tags:* `channelSections`

#### Input Parameters
* `id` - _required_ - The id parameter specifies the YouTube channelSection ID for the resource that is being deleted. In a channelSection resource, the id property specifies the YouTube channelSection ID.
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns channelSection resources that match the API request criteria.

*Tags:* `channelSections`

#### Input Parameters
* `channelId` - _optional_ - The channelId parameter specifies a YouTube channel ID. The API will only return that channel's channelSections.
* `hl` - _optional_ - The hl parameter indicates that the snippet.localized property values in the returned channelSection resources should be in the specified language if localized values for that language are available. For example, if the API request specifies hl=de, the snippet.localized properties in the API response will contain German titles if German titles are available. Channel owners can provide localized channel section titles using either the channelSections.insert or channelSections.update method.
* `id` - _optional_ - The id parameter specifies a comma-separated list of the YouTube channelSection ID(s) for the resource(s) that are being retrieved. In a channelSection resource, the id property specifies the YouTube channelSection ID.
* `mine` - _optional_ - Set this parameter's value to true to retrieve a feed of the authenticated user's channelSections.
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `part` - _required_ - The part parameter specifies a comma-separated list of one or more channelSection resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and contentDetails.

If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channelSection resource, the snippet property contains other properties, such as a display title for the channelSection. If you set part=snippet, the API response will also contain all of those nested properties.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Adds a channelSection for the authenticated user's channel.

*Tags:* `channelSections`

#### Input Parameters
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `onBehalfOfContentOwnerChannel` - _optional_ - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
* `part` - _required_ - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.

The part names that you can include in the parameter value are snippet and contentDetails.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Update a channelSection.

*Tags:* `channelSections`

#### Input Parameters
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `part` - _required_ - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.

The part names that you can include in the parameter value are snippet and contentDetails.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns a collection of zero or more channel resources that match the request criteria.

*Tags:* `channels`

#### Input Parameters
* `categoryId` - _optional_ - The categoryId parameter specifies a YouTube guide category, thereby requesting YouTube channels associated with that category.
* `forUsername` - _optional_ - The forUsername parameter specifies a YouTube username, thereby requesting the channel associated with that username.
* `hl` - _optional_ - The hl parameter should be used for filter out the properties that are not in the given language. Used for the brandingSettings part.
* `id` - _optional_ - The id parameter specifies a comma-separated list of the YouTube channel ID(s) for the resource(s) that are being retrieved. In a channel resource, the id property specifies the channel's YouTube channel ID.
* `managedByMe` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

Set this parameter's value to true to instruct the API to only return channels managed by the content owner that the onBehalfOfContentOwner parameter specifies. The user must be authenticated as a CMS account linked to the specified content owner and onBehalfOfContentOwner must be provided.
* `maxResults` - _optional_ - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
* `mine` - _optional_ - Set this parameter's value to true to instruct the API to only return channels owned by the authenticated user.
* `mySubscribers` - _optional_ - Use the subscriptions.list method and its mySubscribers parameter to retrieve a list of subscribers to the authenticated user's channel.
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `pageToken` - _optional_ - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
* `part` - _required_ - The part parameter specifies a comma-separated list of one or more channel resource properties that the API response will include.

If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channel resource, the contentDetails property contains other properties, such as the uploads properties. As such, if you set part=contentDetails, the API response will also contain all of those nested properties.

### Updates a channel's metadata. Note that this method currently only supports updates to the channel resource's brandingSettings and invideoPromotion objects and their child properties.

*Tags:* `channels`

#### Input Parameters
* `onBehalfOfContentOwner` - _optional_ - The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
* `part` - _required_ - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.

The API currently only allows the parameter value to be set to either brandingSettings or invideoPromotion. (You cannot update both of those parts with a single request.)

Note that this method overrides the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns a list of comment threads that match the API request parameters.

*Tags:* `commentThreads`

#### Input Parameters
* `allThreadsRelatedToChannelId` - _optional_ - The allThreadsRelatedToChannelId parameter instructs the API to return all comment threads associated with the specified channel. The response can include comments about the channel or about the channel's videos.
* `channelId` - _optional_ - The channelId parameter instructs the API to return comment threads containing comments about the specified channel. (The response will not include comments left on videos that the channel uploaded.)
* `id` - _optional_ - The id parameter specifies a comma-separated list of comment thread IDs for the resources that should be retrieved.
* `maxResults` - _optional_ - The maxResults parameter specifies the maximum number of items that should be returned in the result set.

Note: This parameter is not supported for use in conjunction with the id parameter.
* `moderationStatus` - _optional_ - Set this parameter to limit the returned comment threads to a particular moderation state.

Note: This parameter is not supported for use in conjunction with the id parameter.
    Possible values: heldForReview, likelySpam, published.
* `order` - _optional_ - The order parameter specifies the order in which the API response should list comment threads. Valid values are: 
- time - Comment threads are ordered by time. This is the default behavior.
- relevance - Comment threads are ordered by relevance.Note: This parameter is not supported for use in conjunction with the id parameter.
    Possible values: relevance, time.
* `pageToken` - _optional_ - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identifies the next page of the result that can be retrieved.

Note: This parameter is not supported for use in conjunction with the id parameter.
* `part` - _required_ - The part parameter specifies a comma-separated list of one or more commentThread resource properties that the API response will include.
* `searchTerms` - _optional_ - The searchTerms parameter instructs the API to limit the API response to only contain comments that contain the specified search terms.

Note: This parameter is not supported for use in conjunction with the id parameter.
* `textFormat` - _optional_ - Set this parameter's value to html or plainText to instruct the API to return the comments left by users in html formatted or in plain text.
    Possible values: html, plainText.
* `videoId` - _optional_ - The videoId parameter instructs the API to return comment threads associated with the specified video ID.

### Creates a new top-level comment. To add a reply to an existing comment, use the comments.insert method instead.

*Tags:* `commentThreads`

#### Input Parameters
* `part` - _required_ - The part parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Modifies the top-level comment in a comment thread.

*Tags:* `commentThreads`

#### Input Parameters
* `part` - _required_ - The part parameter specifies a comma-separated list of commentThread resource properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes a comment.

*Tags:* `comments`

#### Input Parameters
* `id` - _required_ - The id parameter specifies the comment ID for the resource that is being deleted.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns a list of comments that match the API request parameters.

*Tags:* `comments`

#### Input Parameters
* `id` - _optional_ - The id parameter specifies a comma-separated list of comment IDs for the resources that are being retrieved. In a comment resource, the id property specifies the comment's ID.
* `maxResults` - _optional_ - The maxResults parameter specifies the maximum number of items that should be returned in the result set.

Note: This parameter is not supported for use in conjunction with the id parameter.
* `pageToken` - _optional_ - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identifies the next page of the result that can be retrieved.

Note: This parameter is not supported for use in conjunction with the id parameter.
* `parentId` - _optional_ - The parentId parameter specifies the ID of the comment for which replies should be retrieved.

Note: YouTube currently supports replies only for top-level comments. However, replies to replies may be supported in the future.
* `part` - _required_ - The part parameter specifies a comma-separated list of one or more comment resource properties that the API response will include.
* `textFormat` - _optional_ - This parameter indicates whether the API should return comments formatted as HTML or as plain text.
    Possible values: html, plainText.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Creates a reply to an existing comment. Note: To create a top-level comment, use the commentThreads.insert method.

*Tags:* `comments`

#### Input Parameters
* `part` - _required_ - The part parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Modifies a comment.

*Tags:* `comments`

#### Input Parameters
* `part` - _required_ - The part parameter identifies the properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Expresses the caller's opinion that one or more comments should be flagged as spam.

*Tags:* `comments`

#### Input Parameters
* `id` - _required_ - The id parameter specifies a comma-separated list of IDs of comments that the caller believes should be classified as spam.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Sets the moderation status of one or more comments. The API request must be authorized by the owner of the channel or video associated with the comments.

*Tags:* `comments`

#### Input Parameters
* `banAuthor` - _optional_ - The banAuthor parameter lets you indicate that you want to automatically reject any additional comments written by the comment's author. Set the parameter value to true to ban the author.

Note: This parameter is only valid if the moderationStatus parameter is also set to rejected.
* `id` - _required_ - The id parameter specifies a comma-separated list of IDs that identify the comments for which you are updating the moderation status.
* `moderationStatus` - _required_ - Identifies the new moderation status of the specified comments.
    Possible values: heldForReview, published, rejected.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns a list of categories that can be associated with YouTube channels.

*Tags:* `guideCategories`

#### Input Parameters
* `hl` - _optional_ - The hl parameter specifies the language that will be used for text values in the API response.
* `id` - _optional_ - The id parameter specifies a comma-separated list of the YouTube channel category ID(s) for the resource(s) that are being retrieved. In a guideCategory resource, the id property specifies the YouTube channel category ID.
* `part` - _required_ - The part parameter specifies the guideCategory resource properties that the API response will include. Set the parameter value to snippet.
* `regionCode` - _optional_ - The regionCode parameter instructs the API to return the list of guide categories available in the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns a list of application languages that the YouTube website supports.

*Tags:* `i18nLanguages`

#### Input Parameters
* `hl` - _optional_ - The hl parameter specifies the language that should be used for text values in the API response.
* `part` - _required_ - The part parameter specifies the i18nLanguage resource properties that the API response will include. Set the parameter value to snippet.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns a list of content regions that the YouTube website supports.

*Tags:* `i18nRegions`

#### Input Parameters
* `hl` - _optional_ - The hl parameter specifies the language that should be used for text values in the API response.
* `part` - _required_ - The part parameter specifies the i18nRegion resource properties that the API response will include. Set the parameter value to snippet.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes a broadcast.

*Tags:* `liveBroadcasts`

#### Input Parameters
* `id` - _required_ - The id parameter specifies the YouTube live broadcast ID for the resource that is being deleted.
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `onBehalfOfContentOwnerChannel` - _optional_ - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns a list of YouTube broadcasts that match the API request parameters.

*Tags:* `liveBroadcasts`

#### Input Parameters
* `broadcastStatus` - _optional_ - The broadcastStatus parameter filters the API response to only include broadcasts with the specified status.
    Possible values: active, all, completed, upcoming.
* `broadcastType` - _optional_ - The broadcastType parameter filters the API response to only include broadcasts with the specified type. This is only compatible with the mine filter for now.
    Possible values: all, event, persistent.
* `id` - _optional_ - The id parameter specifies a comma-separated list of YouTube broadcast IDs that identify the broadcasts being retrieved. In a liveBroadcast resource, the id property specifies the broadcast's ID.
* `maxResults` - _optional_ - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
* `mine` - _optional_ - The mine parameter can be used to instruct the API to only return broadcasts owned by the authenticated user. Set the parameter value to true to only retrieve your own broadcasts.
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `onBehalfOfContentOwnerChannel` - _optional_ - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
* `pageToken` - _optional_ - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
* `part` - _required_ - The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.

### Creates a broadcast.

*Tags:* `liveBroadcasts`

#### Input Parameters
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `onBehalfOfContentOwnerChannel` - _optional_ - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
* `part` - _required_ - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.

The part properties that you can include in the parameter value are id, snippet, contentDetails, and status.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates a broadcast. For example, you could modify the broadcast settings defined in the liveBroadcast resource's contentDetails object.

*Tags:* `liveBroadcasts`

#### Input Parameters
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `onBehalfOfContentOwnerChannel` - _optional_ - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
* `part` - _required_ - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.

The part properties that you can include in the parameter value are id, snippet, contentDetails, and status.

Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a broadcast's privacy status is defined in the status part. As such, if your request is updating a private or unlisted broadcast, and the request's part parameter value includes the status part, the broadcast's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the broadcast will revert to the default privacy setting.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Binds a YouTube broadcast to a stream or removes an existing binding between a broadcast and a stream. A broadcast can only be bound to one video stream, though a video stream may be bound to more than one broadcast.

*Tags:* `liveBroadcasts`

#### Input Parameters
* `id` - _required_ - The id parameter specifies the unique ID of the broadcast that is being bound to a video stream.
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `onBehalfOfContentOwnerChannel` - _optional_ - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
* `part` - _required_ - The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
* `streamId` - _optional_ - The streamId parameter specifies the unique ID of the video stream that is being bound to a broadcast. If this parameter is omitted, the API will remove any existing binding between the broadcast and a video stream.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Controls the settings for a slate that can be displayed in the broadcast stream.

*Tags:* `liveBroadcasts`

#### Input Parameters
* `displaySlate` - _optional_ - The displaySlate parameter specifies whether the slate is being enabled or disabled.
* `id` - _required_ - The id parameter specifies the YouTube live broadcast ID that uniquely identifies the broadcast in which the slate is being updated.
* `offsetTimeMs` - _optional_ - The offsetTimeMs parameter specifies a positive time offset when the specified slate change will occur. The value is measured in milliseconds from the beginning of the broadcast's monitor stream, which is the time that the testing phase for the broadcast began. Even though it is specified in milliseconds, the value is actually an approximation, and YouTube completes the requested action as closely as possible to that time.

If you do not specify a value for this parameter, then YouTube performs the action as soon as possible. See the Getting started guide for more details.

Important: You should only specify a value for this parameter if your broadcast stream is delayed.
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `onBehalfOfContentOwnerChannel` - _optional_ - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
* `part` - _required_ - The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
* `walltime` - _optional_ - The walltime parameter specifies the wall clock time at which the specified slate change will occur. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sssZ) format.

### Changes the status of a YouTube live broadcast and initiates any processes associated with the new status. For example, when you transition a broadcast's status to testing, YouTube starts to transmit video to that broadcast's monitor stream. Before calling this method, you should confirm that the value of the status.streamStatus property for the stream bound to your broadcast is active.

*Tags:* `liveBroadcasts`

#### Input Parameters
* `broadcastStatus` - _required_ - The broadcastStatus parameter identifies the state to which the broadcast is changing. Note that to transition a broadcast to either the testing or live state, the status.streamStatus must be active for the stream that the broadcast is bound to.
    Possible values: complete, live, testing.
* `id` - _required_ - The id parameter specifies the unique ID of the broadcast that is transitioning to another status.
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `onBehalfOfContentOwnerChannel` - _optional_ - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
* `part` - _required_ - The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Removes a chat ban.

*Tags:* `liveChatBans`

#### Input Parameters
* `id` - _required_ - The id parameter identifies the chat ban to remove. The value uniquely identifies both the ban and the chat.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Adds a new ban to the chat.

*Tags:* `liveChatBans`

#### Input Parameters
* `part` - _required_ - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes a chat message.

*Tags:* `liveChatMessages`

#### Input Parameters
* `id` - _required_ - The id parameter specifies the YouTube chat message ID of the resource that is being deleted.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists live chat messages for a specific chat.

*Tags:* `liveChatMessages`

#### Input Parameters
* `hl` - _optional_ - The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method.

If localized resource details are available in that language, the resource's snippet.localized object will contain the localized values. However, if localized details are not available, the snippet.localized object will contain resource details in the resource's default language.
* `liveChatId` - _required_ - The liveChatId parameter specifies the ID of the chat whose messages will be returned.
* `maxResults` - _optional_ - The maxResults parameter specifies the maximum number of messages that should be returned in the result set.
* `pageToken` - _optional_ - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify other pages that could be retrieved.
* `part` - _required_ - The part parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id and snippet.
* `profileImageSize` - _optional_ - The profileImageSize parameter specifies the size of the user profile pictures that should be returned in the result set. Default: 88.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Adds a message to a live chat.

*Tags:* `liveChatMessages`

#### Input Parameters
* `part` - _required_ - The part parameter serves two purposes. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the parameter value to snippet.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Removes a chat moderator.

*Tags:* `liveChatModerators`

#### Input Parameters
* `id` - _required_ - The id parameter identifies the chat moderator to remove. The value uniquely identifies both the moderator and the chat.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists moderators for a live chat.

*Tags:* `liveChatModerators`

#### Input Parameters
* `liveChatId` - _required_ - The liveChatId parameter specifies the YouTube live chat for which the API should return moderators.
* `maxResults` - _optional_ - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
* `pageToken` - _optional_ - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
* `part` - _required_ - The part parameter specifies the liveChatModerator resource parts that the API response will include. Supported values are id and snippet.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Adds a new moderator for the chat.

*Tags:* `liveChatModerators`

#### Input Parameters
* `part` - _required_ - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes a video stream.

*Tags:* `liveStreams`

#### Input Parameters
* `id` - _required_ - The id parameter specifies the YouTube live stream ID for the resource that is being deleted.
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `onBehalfOfContentOwnerChannel` - _optional_ - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns a list of video streams that match the API request parameters.

*Tags:* `liveStreams`

#### Input Parameters
* `id` - _optional_ - The id parameter specifies a comma-separated list of YouTube stream IDs that identify the streams being retrieved. In a liveStream resource, the id property specifies the stream's ID.
* `maxResults` - _optional_ - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
* `mine` - _optional_ - The mine parameter can be used to instruct the API to only return streams owned by the authenticated user. Set the parameter value to true to only retrieve your own streams.
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `onBehalfOfContentOwnerChannel` - _optional_ - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
* `pageToken` - _optional_ - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
* `part` - _required_ - The part parameter specifies a comma-separated list of one or more liveStream resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, cdn, and status.

### Creates a video stream. The stream enables you to send your video to YouTube, which can then broadcast the video to your audience.

*Tags:* `liveStreams`

#### Input Parameters
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `onBehalfOfContentOwnerChannel` - _optional_ - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
* `part` - _required_ - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.

The part properties that you can include in the parameter value are id, snippet, cdn, and status.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates a video stream. If the properties that you want to change cannot be updated, then you need to create a new stream with the proper settings.

*Tags:* `liveStreams`

#### Input Parameters
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `onBehalfOfContentOwnerChannel` - _optional_ - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
* `part` - _required_ - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.

The part properties that you can include in the parameter value are id, snippet, cdn, and status.

Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. If the request body does not specify a value for a mutable property, the existing value for that property will be removed.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes a playlist item.

*Tags:* `playlistItems`

#### Input Parameters
* `id` - _required_ - The id parameter specifies the YouTube playlist item ID for the playlist item that is being deleted. In a playlistItem resource, the id property specifies the playlist item's ID.
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns a collection of playlist items that match the API request parameters. You can retrieve all of the playlist items in a specified playlist or retrieve one or more playlist items by their unique IDs.

*Tags:* `playlistItems`

#### Input Parameters
* `id` - _optional_ - The id parameter specifies a comma-separated list of one or more unique playlist item IDs.
* `maxResults` - _optional_ - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `pageToken` - _optional_ - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
* `part` - _required_ - The part parameter specifies a comma-separated list of one or more playlistItem resource properties that the API response will include.

If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlistItem resource, the snippet property contains numerous fields, including the title, description, position, and resourceId properties. As such, if you set part=snippet, the API response will contain all of those properties.
* `playlistId` - _optional_ - The playlistId parameter specifies the unique ID of the playlist for which you want to retrieve playlist items. Note that even though this is an optional parameter, every request to retrieve playlist items must specify a value for either the id parameter or the playlistId parameter.
* `videoId` - _optional_ - The videoId parameter specifies that the request should return only the playlist items that contain the specified video.

### Adds a resource to a playlist.

*Tags:* `playlistItems`

#### Input Parameters
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `part` - _required_ - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Modifies a playlist item. For example, you could update the item's position in the playlist.

*Tags:* `playlistItems`

#### Input Parameters
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `part` - _required_ - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.

Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a playlist item can specify a start time and end time, which identify the times portion of the video that should play when users watch the video in the playlist. If your request is updating a playlist item that sets these values, and the request's part parameter value includes the contentDetails part, the playlist item's start and end times will be updated to whatever value the request body specifies. If the request body does not specify values, the existing start and end times will be removed and replaced with the default settings.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes a playlist.

*Tags:* `playlists`

#### Input Parameters
* `id` - _required_ - The id parameter specifies the YouTube playlist ID for the playlist that is being deleted. In a playlist resource, the id property specifies the playlist's ID.
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns a collection of playlists that match the API request parameters. For example, you can retrieve all playlists that the authenticated user owns, or you can retrieve one or more playlists by their unique IDs.

*Tags:* `playlists`

#### Input Parameters
* `channelId` - _optional_ - This value indicates that the API should only return the specified channel's playlists.
* `hl` - _optional_ - The hl parameter should be used for filter out the properties that are not in the given language. Used for the snippet part.
* `id` - _optional_ - The id parameter specifies a comma-separated list of the YouTube playlist ID(s) for the resource(s) that are being retrieved. In a playlist resource, the id property specifies the playlist's YouTube playlist ID.
* `maxResults` - _optional_ - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
* `mine` - _optional_ - Set this parameter's value to true to instruct the API to only return playlists owned by the authenticated user.
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `onBehalfOfContentOwnerChannel` - _optional_ - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
* `pageToken` - _optional_ - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
* `part` - _required_ - The part parameter specifies a comma-separated list of one or more playlist resource properties that the API response will include.

If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlist resource, the snippet property contains properties like author, title, description, tags, and timeCreated. As such, if you set part=snippet, the API response will contain all of those properties.

### Creates a playlist.

*Tags:* `playlists`

#### Input Parameters
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `onBehalfOfContentOwnerChannel` - _optional_ - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
* `part` - _required_ - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Modifies a playlist. For example, you could change a playlist's title, description, or privacy status.

*Tags:* `playlists`

#### Input Parameters
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `part` - _required_ - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.

Note that this method will override the existing values for mutable properties that are contained in any parts that the request body specifies. For example, a playlist's description is contained in the snippet part, which must be included in the request body. If the request does not specify a value for the snippet.description property, the playlist's existing description will be deleted.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns a collection of search results that match the query parameters specified in the API request. By default, a search result set identifies matching video, channel, and playlist resources, but you can also configure queries to only retrieve a specific type of resource.

*Tags:* `search`

#### Input Parameters
* `channelId` - _optional_ - The channelId parameter indicates that the API response should only contain resources created by the channel
* `channelType` - _optional_ - The channelType parameter lets you restrict a search to a particular type of channel.
    Possible values: any, show.
* `eventType` - _optional_ - The eventType parameter restricts a search to broadcast events. If you specify a value for this parameter, you must also set the type parameter's value to video.
    Possible values: completed, live, upcoming.
* `forContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The forContentOwner parameter restricts the search to only retrieve resources owned by the content owner specified by the onBehalfOfContentOwner parameter. The user must be authenticated using a CMS account linked to the specified content owner and onBehalfOfContentOwner must be provided.
* `forDeveloper` - _optional_ - The forDeveloper parameter restricts the search to only retrieve videos uploaded via the developer's application or website. The API server uses the request's authorization credentials to identify the developer. Therefore, a developer can restrict results to videos uploaded through the developer's own app or website but not to videos uploaded through other apps or sites.
* `forMine` - _optional_ - The forMine parameter restricts the search to only retrieve videos owned by the authenticated user. If you set this parameter to true, then the type parameter's value must also be set to video.
* `location` - _optional_ - The location parameter, in conjunction with the locationRadius parameter, defines a circular geographic area and also restricts a search to videos that specify, in their metadata, a geographic location that falls within that area. The parameter value is a string that specifies latitude/longitude coordinates e.g. (37.42307,-122.08427).


- The location parameter value identifies the point at the center of the area.
- The locationRadius parameter specifies the maximum distance that the location associated with a video can be from that point for the video to still be included in the search results.The API returns an error if your request specifies a value for the location parameter but does not also specify a value for the locationRadius parameter.
* `locationRadius` - _optional_ - The locationRadius parameter, in conjunction with the location parameter, defines a circular geographic area.

The parameter value must be a floating point number followed by a measurement unit. Valid measurement units are m, km, ft, and mi. For example, valid parameter values include 1500m, 5km, 10000ft, and 0.75mi. The API does not support locationRadius parameter values larger than 1000 kilometers.

Note: See the definition of the location parameter for more information.
* `maxResults` - _optional_ - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `order` - _optional_ - The order parameter specifies the method that will be used to order resources in the API response.
    Possible values: date, rating, relevance, title, videoCount, viewCount.
* `pageToken` - _optional_ - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
* `part` - _required_ - The part parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet.
* `publishedAfter` - _optional_ - The publishedAfter parameter indicates that the API response should only contain resources created after the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).
* `publishedBefore` - _optional_ - The publishedBefore parameter indicates that the API response should only contain resources created before the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).
* `q` - _optional_ - The q parameter specifies the query term to search for.

Your request can also use the Boolean NOT (-) and OR (|) operators to exclude videos or to find videos that are associated with one of several search terms. For example, to search for videos matching either "boating" or "sailing", set the q parameter value to boating|sailing. Similarly, to search for videos matching either "boating" or "sailing" but not "fishing", set the q parameter value to boating|sailing -fishing. Note that the pipe character must be URL-escaped when it is sent in your API request. The URL-escaped value for the pipe character is %7C.
* `regionCode` - _optional_ - The regionCode parameter instructs the API to return search results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
* `relatedToVideoId` - _optional_ - The relatedToVideoId parameter retrieves a list of videos that are related to the video that the parameter value identifies. The parameter value must be set to a YouTube video ID and, if you are using this parameter, the type parameter must be set to video.
* `relevanceLanguage` - _optional_ - The relevanceLanguage parameter instructs the API to return search results that are most relevant to the specified language. The parameter value is typically an ISO 639-1 two-letter language code. However, you should use the values zh-Hans for simplified Chinese and zh-Hant for traditional Chinese. Please note that results in other languages will still be returned if they are highly relevant to the search query term.
* `safeSearch` - _optional_ - The safeSearch parameter indicates whether the search results should include restricted content as well as standard content.
    Possible values: moderate, none, strict.
* `topicId` - _optional_ - The topicId parameter indicates that the API response should only contain resources associated with the specified topic. The value identifies a Freebase topic ID.
* `type` - _optional_ - The type parameter restricts a search query to only retrieve a particular type of resource. The value is a comma-separated list of resource types.
* `videoCaption` - _optional_ - The videoCaption parameter indicates whether the API should filter video search results based on whether they have captions. If you specify a value for this parameter, you must also set the type parameter's value to video.
    Possible values: any, closedCaption, none.
* `videoCategoryId` - _optional_ - The videoCategoryId parameter filters video search results based on their category. If you specify a value for this parameter, you must also set the type parameter's value to video.
* `videoDefinition` - _optional_ - The videoDefinition parameter lets you restrict a search to only include either high definition (HD) or standard definition (SD) videos. HD videos are available for playback in at least 720p, though higher resolutions, like 1080p, might also be available. If you specify a value for this parameter, you must also set the type parameter's value to video.
    Possible values: any, high, standard.
* `videoDimension` - _optional_ - The videoDimension parameter lets you restrict a search to only retrieve 2D or 3D videos. If you specify a value for this parameter, you must also set the type parameter's value to video.
    Possible values: 2d, 3d, any.
* `videoDuration` - _optional_ - The videoDuration parameter filters video search results based on their duration. If you specify a value for this parameter, you must also set the type parameter's value to video.
    Possible values: any, long, medium, short.
* `videoEmbeddable` - _optional_ - The videoEmbeddable parameter lets you to restrict a search to only videos that can be embedded into a webpage. If you specify a value for this parameter, you must also set the type parameter's value to video.
    Possible values: any, true.
* `videoLicense` - _optional_ - The videoLicense parameter filters search results to only include videos with a particular license. YouTube lets video uploaders choose to attach either the Creative Commons license or the standard YouTube license to each of their videos. If you specify a value for this parameter, you must also set the type parameter's value to video.
    Possible values: any, creativeCommon, youtube.
* `videoSyndicated` - _optional_ - The videoSyndicated parameter lets you to restrict a search to only videos that can be played outside youtube.com. If you specify a value for this parameter, you must also set the type parameter's value to video.
    Possible values: any, true.
* `videoType` - _optional_ - The videoType parameter lets you restrict a search to a particular type of videos. If you specify a value for this parameter, you must also set the type parameter's value to video.
    Possible values: any, episode, movie.

### Lists sponsors for a channel.

*Tags:* `sponsors`

#### Input Parameters
* `filter` - _optional_ - The filter parameter specifies which channel sponsors to return.
    Possible values: all, newest.
* `maxResults` - _optional_ - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
* `pageToken` - _optional_ - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
* `part` - _required_ - The part parameter specifies the sponsor resource parts that the API response will include. Supported values are id and snippet.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes a subscription.

*Tags:* `subscriptions`

#### Input Parameters
* `id` - _required_ - The id parameter specifies the YouTube subscription ID for the resource that is being deleted. In a subscription resource, the id property specifies the YouTube subscription ID.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns subscription resources that match the API request criteria.

*Tags:* `subscriptions`

#### Input Parameters
* `channelId` - _optional_ - The channelId parameter specifies a YouTube channel ID. The API will only return that channel's subscriptions.
* `forChannelId` - _optional_ - The forChannelId parameter specifies a comma-separated list of channel IDs. The API response will then only contain subscriptions matching those channels.
* `id` - _optional_ - The id parameter specifies a comma-separated list of the YouTube subscription ID(s) for the resource(s) that are being retrieved. In a subscription resource, the id property specifies the YouTube subscription ID.
* `maxResults` - _optional_ - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
* `mine` - _optional_ - Set this parameter's value to true to retrieve a feed of the authenticated user's subscriptions.
* `myRecentSubscribers` - _optional_ - Set this parameter's value to true to retrieve a feed of the subscribers of the authenticated user in reverse chronological order (newest first).
* `mySubscribers` - _optional_ - Set this parameter's value to true to retrieve a feed of the subscribers of the authenticated user in no particular order.
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `onBehalfOfContentOwnerChannel` - _optional_ - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
* `order` - _optional_ - The order parameter specifies the method that will be used to sort resources in the API response.
    Possible values: alphabetical, relevance, unread.
* `pageToken` - _optional_ - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
* `part` - _required_ - The part parameter specifies a comma-separated list of one or more subscription resource properties that the API response will include.

If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a subscription resource, the snippet property contains other properties, such as a display title for the subscription. If you set part=snippet, the API response will also contain all of those nested properties.

### Adds a subscription for the authenticated user's channel.

*Tags:* `subscriptions`

#### Input Parameters
* `part` - _required_ - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists Super Chat events for a channel.

*Tags:* `superChatEvents`

#### Input Parameters
* `hl` - _optional_ - The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method.

If localized resource details are available in that language, the resource's snippet.localized object will contain the localized values. However, if localized details are not available, the snippet.localized object will contain resource details in the resource's default language.
* `maxResults` - _optional_ - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
* `pageToken` - _optional_ - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
* `part` - _required_ - The part parameter specifies the superChatEvent resource parts that the API response will include. Supported values are id and snippet.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Uploads a custom video thumbnail to YouTube and sets it for a video.

*Tags:* `thumbnails`

#### Input Parameters
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `videoId` - _required_ - The videoId parameter specifies a YouTube video ID for which the custom video thumbnail is being provided.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns a list of abuse reasons that can be used for reporting abusive videos.

*Tags:* `videoAbuseReportReasons`

#### Input Parameters
* `hl` - _optional_ - The hl parameter specifies the language that should be used for text values in the API response.
* `part` - _required_ - The part parameter specifies the videoCategory resource parts that the API response will include. Supported values are id and snippet.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns a list of categories that can be associated with YouTube videos.

*Tags:* `videoCategories`

#### Input Parameters
* `hl` - _optional_ - The hl parameter specifies the language that should be used for text values in the API response.
* `id` - _optional_ - The id parameter specifies a comma-separated list of video category IDs for the resources that you are retrieving.
* `part` - _required_ - The part parameter specifies the videoCategory resource properties that the API response will include. Set the parameter value to snippet.
* `regionCode` - _optional_ - The regionCode parameter instructs the API to return the list of video categories available in the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes a YouTube video.

*Tags:* `videos`

#### Input Parameters
* `id` - _required_ - The id parameter specifies the YouTube video ID for the resource that is being deleted. In a video resource, the id property specifies the video's ID.
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns a list of videos that match the API request parameters.

*Tags:* `videos`

#### Input Parameters
* `chart` - _optional_ - The chart parameter identifies the chart that you want to retrieve.
    Possible values: mostPopular.
* `hl` - _optional_ - The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method.

If localized resource details are available in that language, the resource's snippet.localized object will contain the localized values. However, if localized details are not available, the snippet.localized object will contain resource details in the resource's default language.
* `id` - _optional_ - The id parameter specifies a comma-separated list of the YouTube video ID(s) for the resource(s) that are being retrieved. In a video resource, the id property specifies the video's ID.
* `locale` - _optional_ - DEPRECATED
* `maxHeight` - _optional_ - The maxHeight parameter specifies a maximum height of the embedded player. If maxWidth is provided, maxHeight may not be reached in order to not violate the width request.
* `maxResults` - _optional_ - The maxResults parameter specifies the maximum number of items that should be returned in the result set.

Note: This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter.
* `maxWidth` - _optional_ - The maxWidth parameter specifies a maximum width of the embedded player. If maxHeight is provided, maxWidth may not be reached in order to not violate the height request.
* `myRating` - _optional_ - Set this parameter's value to like or dislike to instruct the API to only return videos liked or disliked by the authenticated user.
    Possible values: dislike, like.
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `pageToken` - _optional_ - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.

Note: This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter.
* `part` - _required_ - The part parameter specifies a comma-separated list of one or more video resource properties that the API response will include.

If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a video resource, the snippet property contains the channelId, title, description, tags, and categoryId properties. As such, if you set part=snippet, the API response will contain all of those properties.
* `regionCode` - _optional_ - The regionCode parameter instructs the API to select a video chart available in the specified region. This parameter can only be used in conjunction with the chart parameter. The parameter value is an ISO 3166-1 alpha-2 country code.
* `videoCategoryId` - _optional_ - The videoCategoryId parameter identifies the video category for which the chart should be retrieved. This parameter can only be used in conjunction with the chart parameter. By default, charts are not restricted to a particular category.

### Uploads a video to YouTube and optionally sets the video's metadata.

*Tags:* `videos`

#### Input Parameters
* `autoLevels` - _optional_ - The autoLevels parameter indicates whether YouTube should automatically enhance the video's lighting and color.
* `notifySubscribers` - _optional_ - The notifySubscribers parameter indicates whether YouTube should send a notification about the new video to users who subscribe to the video's channel. A parameter value of True indicates that subscribers will be notified of newly uploaded videos. However, a channel owner who is uploading many videos might prefer to set the value to False to avoid sending a notification about each new video to the channel's subscribers.
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `onBehalfOfContentOwnerChannel` - _optional_ - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.

This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
* `part` - _required_ - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.

Note that not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.
* `stabilize` - _optional_ - The stabilize parameter indicates whether YouTube should adjust the video to remove shaky camera motions.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates a video's metadata.

*Tags:* `videos`

#### Input Parameters
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `part` - _required_ - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.

Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a video's privacy setting is contained in the status part. As such, if your request is updating a private video, and the request's part parameter value includes the status part, the video's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the video will revert to the default privacy setting.

In addition, not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves the ratings that the authorized user gave to a list of specified videos.

*Tags:* `videos`

#### Input Parameters
* `id` - _required_ - The id parameter specifies a comma-separated list of the YouTube video ID(s) for the resource(s) for which you are retrieving rating data. In a video resource, the id property specifies the video's ID.
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Add a like or dislike rating to a video or remove a rating from a video.

*Tags:* `videos`

#### Input Parameters
* `id` - _required_ - The id parameter specifies the YouTube video ID of the video that is being rated or having its rating removed.
* `rating` - _required_ - Specifies the rating to record.
    Possible values: dislike, like, none.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Report abuse for a video.

*Tags:* `videos`

#### Input Parameters
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Uploads a watermark image to YouTube and sets it for a channel.

*Tags:* `watermarks`

#### Input Parameters
* `channelId` - _required_ - The channelId parameter specifies the YouTube channel ID for which the watermark is being provided.
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes a channel's watermark image.

*Tags:* `watermarks`

#### Input Parameters
* `channelId` - _required_ - The channelId parameter specifies the YouTube channel ID for which the watermark is being unset.
* `onBehalfOfContentOwner` - _optional_ - Note: This parameter is intended exclusively for YouTube content partners.

The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

## License

**flow**ground :- Telekom iPaaS / googleapis-com-youtube-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
