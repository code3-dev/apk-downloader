const express = require('express');
const cors = require("cors");
const axios = require('axios');
const app = express();

app.use(express.json());
app.use(cors());

// Helper function to extract package name from Google Play Store URL
const extractPackageName = (url) => {
    const match = url.match(/(?:id=)([a-zA-Z0-9_.]+)/);
    return match ? match[1] : null;
};

// Controller
app.post('/download', async (req, res) => {
    const { lang, packageName } = req.body;

    if (!lang) {
        return res.status(400).json({ error: 'Language (lang) is required.' });
    }

    if (!packageName) {
        return res.status(400).json({ error: 'Package name or URL is required.' });
    }

    let extractedPackage = packageName;

    // Check if the packageName is a URL and extract the package name
    if (packageName.startsWith('http')) {
        extractedPackage = extractPackageName(packageName);
        if (!extractedPackage) {
            return res.status(400).json({ error: 'Invalid Play Store URL provided.' });
        }
    }

    try {
        const response = await axios.post(
            'https://apkdownloader.vercel.app/api/app',
            { packageName: extractedPackage, lang },
            {
                headers: {
                    'Content-Type': 'text/plain;charset=UTF-8',
                },
            }
        );

        // Construct the download link
        const downloadLink = `https://d.apkpure.com/b/APK/${extractedPackage}?version=latest`;

        // Append the download link to the response
        const responseData = {
            ...response.data,
            download_link: downloadLink,
        };

        res.status(200).json(responseData);
    } catch (error) {
        console.error('Error fetching APK details:', error.message);
        res.status(500).json({ error: 'Failed to fetch APK details.' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
