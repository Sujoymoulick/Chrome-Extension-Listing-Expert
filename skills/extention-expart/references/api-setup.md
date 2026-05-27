# Chrome Web Store API Setup & Management

## Prerequisites
- **2-Step Verification**: Mandatory for publishing or updating.
- **Store Listing & Privacy**: Must be filled out in the Developer Dashboard before using the API to publish.

## Initial Setup
1. **Google Cloud Project**: Enable the "Chrome Web Store API" in the Google Cloud Console.
2. **OAuth Consent Screen**: Configure an "External" consent screen. Add your email to "Test users".
3. **OAuth Client ID**: Create "Web application" credentials. Add `https://developers.google.com/oauthplayground` as a redirect URI.
4. **Access Tokens**: Use OAuth Playground to exchange your Client ID/Secret for a refresh token with scope `https://www.googleapis.com/auth/chromewebstore`.

## Publisher ID
- Found in **Publisher > Settings** in the Developer Dashboard. Required for all API endpoints.

## Common API Operations (Examples)
- **Fetch Status**: `GET https://chromewebstore.googleapis.com/v2/publishers/PUBLISHER_ID/items/EXTENSION_ID:fetchStatus`
- **Upload Package**: `POST https://chromewebstore.googleapis.com/upload/v2/publishers/PUBLISHER_ID/items/EXTENSION_ID:upload`
- **Publish**: `POST https://chromewebstore.googleapis.com/v2/publishers/PUBLISHER_ID/items/EXTENSION_ID:publish`
- **Set Rollout Percentage**: `POST https://chromewebstore.googleapis.com/v2/publishers/PUBLISHER_ID/items/EXTENSION_ID:setPublishedDeployPercentage`
- **Cancel Submission**: `POST https://chromewebstore.googleapis.com/v2/publishers/PUBLISHER_ID/items/EXTENSION_ID:cancelSubmission`

## Service Accounts
- Service accounts can be granted access via the Google Cloud Console and Developer Dashboard for automated CI/CD pipelines.
