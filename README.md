# APK Downloader API

A simple Node.js-based API for downloading APK details and generating download links from the Google Play Store. The project uses Express.js, Axios, and CORS.

## Features

- Extract package names from Google Play Store URLs
- Fetch APK details for a given package name and language
- Generate download links for APK files
- Ready to deploy on Vercel

---

## Installation and Usage

1. Clone the repository:

```bash
git clone https://github.com/code3-dev/apk-downloader.git
cd apk-downloader
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start
```

The server will run on `http://localhost:3000` by default.

---

## Deployment

Deploy this project to Vercel with a single click:

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/code3-dev/apk-downloader)

---

## API Endpoint

### POST `/download`

**Request Body:**

```json
{
  "packageName": "<package name or Play Store URL>",
  "lang": "<language code>"
}
```

**Response:**

- On success, returns APK details and a download link:

```json
{
    "title": "Telegram",
    "description": "Pure instant messaging — simple, fast, secure, and synced across all your devices. One of the top 5 most downloaded apps in the world with over 950 million active users.\n\nFAST: Telegram is the fastest messaging app on the market, connecting people via a unique, distributed network of data centers around the globe.\n\nSYNCED: You can access your messages from all your phones, tablets and computers at once. Telegram apps are standalone, so you don’t need to keep your phone connected. Start typing on one device and finish the message from another. Never lose your data again.\n\nUNLIMITED: You can send media and files, without any limits on their type and size. Your entire chat history will require no disk space on your device, and will be securely stored in the Telegram cloud for as long as you need it. \n\nSECURE: We made it our mission to provide the best security combined with ease of use. Everything on Telegram, including chats, groups, media, etc. is encrypted using a combination of 256-bit symmetric AES encryption, 2048-bit RSA encryption, and Diffie–Hellman secure key exchange. \n\n100% FREE & OPEN: Telegram has a fully documented and free API for developers, open source apps and verifiable builds to prove the app you download is built from the exact same source code that is published. \n\nPOWERFUL: You can create group chats with up to 200,000 members, share large videos, documents of any type (.DOCX, .MP3, .ZIP, etc.) up to 2 GB each, and even set up bots for specific tasks. Telegram is the perfect tool for hosting online communities and coordinating teamwork.\n\nRELIABLE: Built to deliver your messages using as little data as possible, Telegram is the most reliable messaging system ever made. It works even on the weakest mobile connections. \n\nFUN: Telegram has powerful photo and video editing tools, animated stickers and emoji, fully customizable themes to change the appearance of your app, and an open sticker/GIF platform to cater to all your expressive needs.\n\nSIMPLE: While providing an unprecedented array of features, we take great care to keep the interface clean. Telegram is so simple you already know how to use it.\n\nPRIVATE: We take your privacy seriously and will never give any third parties access to your data. You can delete any message you ever sent or received for both sides, at any time and without a trace. Telegram will never use your data to show you ads.\n\nFor those interested in maximum privacy, Telegram offers Secret Chats. Secret Chat messages can be programmed to self-destruct automatically from both participating devices. This way you can send all types of disappearing content — messages, photos, videos, and even files. Secret Chats use End-to-End Encryption to ensure that a message can only be read by its intended recipient.\n\nWe keep expanding the boundaries of what you can do with a messaging app. Don’t wait years for older messengers to catch up with Telegram — join the revolution today.",
    "descriptionHTML": "Pure instant messaging — simple, fast, secure, and synced across all your devices. One of the top 5 most downloaded apps in the world with over 950 million active users.<br><br>FAST: Telegram is the fastest messaging app on the market, connecting people via a unique, distributed network of data centers around the globe.<br><br>SYNCED: You can access your messages from all your phones, tablets and computers at once. Telegram apps are standalone, so you don’t need to keep your phone connected. Start typing on one device and finish the message from another. Never lose your data again.<br><br>UNLIMITED: You can send media and files, without any limits on their type and size. Your entire chat history will require no disk space on your device, and will be securely stored in the Telegram cloud for as long as you need it. <br><br>SECURE: We made it our mission to provide the best security combined with ease of use. Everything on Telegram, including chats, groups, media, etc. is encrypted using a combination of 256-bit symmetric AES encryption, 2048-bit RSA encryption, and Diffie–Hellman secure key exchange. <br><br>100% FREE &amp; OPEN: Telegram has a fully documented and free API for developers, open source apps and verifiable builds to prove the app you download is built from the exact same source code that is published. <br><br>POWERFUL: You can create group chats with up to 200,000 members, share large videos, documents of any type (.DOCX, .MP3, .ZIP, etc.) up to 2 GB each, and even set up bots for specific tasks. Telegram is the perfect tool for hosting online communities and coordinating teamwork.<br><br>RELIABLE: Built to deliver your messages using as little data as possible, Telegram is the most reliable messaging system ever made. It works even on the weakest mobile connections. <br><br>FUN: Telegram has powerful photo and video editing tools, animated stickers and emoji, fully customizable themes to change the appearance of your app, and an open sticker/GIF platform to cater to all your expressive needs.<br><br>SIMPLE: While providing an unprecedented array of features, we take great care to keep the interface clean. Telegram is so simple you already know how to use it.<br><br>PRIVATE: We take your privacy seriously and will never give any third parties access to your data. You can delete any message you ever sent or received for both sides, at any time and without a trace. Telegram will never use your data to show you ads.<br><br>For those interested in maximum privacy, Telegram offers Secret Chats. Secret Chat messages can be programmed to self-destruct automatically from both participating devices. This way you can send all types of disappearing content — messages, photos, videos, and even files. Secret Chats use End-to-End Encryption to ensure that a message can only be read by its intended recipient.<br><br>We keep expanding the boundaries of what you can do with a messaging app. Don’t wait years for older messengers to catch up with Telegram — join the revolution today.",
    "summary": "Telegram is a messaging app with a focus on speed and security.",
    "installs": "1,000,000,000+",
    "minInstalls": 1000000000,
    "maxInstalls": 2228750523,
    "score": 4.25165,
    "scoreText": "4.3",
    "ratings": 15146310,
    "reviews": 169849,
    "histogram": {
        "1": 1927100,
        "2": 424003,
        "3": 642359,
        "4": 1069446,
        "5": 11083312
    },
    "price": 0,
    "free": true,
    "currency": "USD",
    "priceText": "Free",
    "available": true,
    "offersIAP": true,
    "IAPRange": "$0.31 - $289.99 per item",
    "androidVersion": "VARY",
    "androidVersionText": "Varies with device",
    "androidMaxVersion": "VARY",
    "developer": "Telegram FZ-LLC",
    "developerId": "Telegram+FZ-LLC",
    "developerEmail": "support@telegram.org",
    "developerWebsite": "https://telegram.org",
    "privacyPolicy": "https://telegram.org/privacy",
    "developerInternalID": "Telegram+FZ-LLC",
    "genre": "Communication",
    "genreId": "COMMUNICATION",
    "categories": [{
        "name": "Communication",
        "id": "COMMUNICATION"
    }],
    "icon": "https://play-lh.googleusercontent.com/ZU9cSsyIJZo6Oy7HTHiEPwZg0m2Crep-d5ZrfajqtsH-qgUXSqKpNA2FpPDTn-7qA5Q",
    "headerImage": "https://play-lh.googleusercontent.com/pgiel6OzR01do2sPxONlteJ5_GAwD6W-JpiF98hdns3XinShKZkziUd1B8sG-8qa",
    "screenshots": ["https://play-lh.googleusercontent.com/wlwY1vowGxTrvQMRDHJD21iYBG7S_E09QbKPY-L6dqEc4UxCi0fDQiNuCBonFYED1yU", "https://play-lh.googleusercontent.com/xdjWKko-a2DFtICA6tfP0vXSBIDTFl_iprhVQb9HnS-rGjyR1wZckqM721qHsF-2z0U", "https://play-lh.googleusercontent.com/NaeXtT-aGP9_R8LROs3XyWVc6eU7sxYuuywNwg3c99AjRtj6cCoPaJynhP0t8uynF6hm", "https://play-lh.googleusercontent.com/J5JG9T92CSZopWKloI00_DsmyQprRvEwItBwPkESjcAlIKy5v4ae3T4pmbH1sWFf3RTQ", "https://play-lh.googleusercontent.com/9HoCw2kOVFD504YpjDyk1Aa5WtcbDsxS_wesF-yT-5iHEvRgHZXT22g2clFXGGwoCTOt", "https://play-lh.googleusercontent.com/bDGf2oHe1y_uaFE6XCh2kYicn3-1yiLMTI5hae9s5zMaNPzOpj04An1URWQyw5m5JhA", "https://play-lh.googleusercontent.com/v0zodHEHUcMgUZSK490M9L5c3Grk5pkDHL-TTdfQK3098Wg0W2bxbK1-cmgN9aKEuQ", "https://play-lh.googleusercontent.com/-4x3oxK3bMWXTpwPrlai_HYHcHnH_sa8KvYj5KvYPwjSZV7rsg4kpIafYhfnRvBsUtc"],
    "contentRating": "Mature 17+",
    "adSupported": false,
    "released": "Sep 6, 2013",
    "updated": 1737587188000,
    "version": "11.6.2",
    "comments": [],
    "preregister": false,
    "earlyAccessEnabled": false,
    "isAvailableInPlayPass": false,
    "appId": "org.telegram.messenger",
    "url": "https://play.google.com/store/apps/details?id=org.telegram.messenger&hl=en&gl=us",
    "download_link": "https://d.apkpure.com/b/APK/org.telegram.messenger?version=latest"
}
```

- On error:

```json
{
  "error": "<Error message>"
}
```

### Example Request

Use `curl` to test the API:

```bash
curl --request POST \
  --url https://apk-dl-api.vercel.app/download \
  --header 'content-type: application/json' \
  --data '{
  "packageName": "org.telegram.messenger",
  "lang": "en"
}'
```

---

## Contact

For any queries or issues, please contact:

- **Name:** Hossein Pira
- **Email:** [h3dev.pira@gmail.com](mailto:h3dev.pira@gmail.com)
- **Instagram**: [@h3dev.pira](https://instagram.com/h3dev.pira)
- **Telegram:** [@h3dev](https://t.me/h3dev)
