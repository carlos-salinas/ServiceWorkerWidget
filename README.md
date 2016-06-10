# Service Worker Widget

## To push a sample message
curl --header "Authorization: key=GCM_API_KEY" --header "Content-Type: application/json" https://android.googleapis.com/gcm/send -d "{\"registration_ids\":[\"REGISTRATION_ID\"]}"