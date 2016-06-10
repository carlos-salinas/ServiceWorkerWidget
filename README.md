# Service Worker Widget

## To push a sample message
curl --header "Authorization: key=<GCM API KEY>" --header "Content-Type: application/json" https://android.googleapis.com/gcm/send -d "{\"registration_ids\":[\"<REGISTRATION ID>\"]}"