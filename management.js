const contentful = require("contentful-management")
const entries = require('./causes.json')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const client = contentful.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_API_KEY
})

const createEntry = (entry) => {
    client.getSpace(process.env.CONTENTFUL_SPACE_ID)
        .then((space) => space.createEntryWithId('cause', generateRandomString(22), {
            fields: {
                name: {
                    'en-US': entry.name
                },
                officialStatus: {
                    "en-US": entry.officialStatus
                  },
                neighbourhood: {
                    "en-US": entry.neighbourhood
                  },
                city: {
                    "en-US": entry.city
                  },
                aidProvided: {
                    "en-US": entry.aidProvided
                  },
                summaryOfActivities: {
                    "en-US": entry.summaryOfActivities
                  },
                bankDetails: {
                    "en-US": entry.bankDetails
                  },
                digitalEvidence: {
                    "en-US": entry.digitalEvidence
                  },
                instagram: {
                    "en-US": entry.instagram
                  },
                email: {
                    "en-US": entry.email
                  },
                website: {
                    'en-US': entry.website
                },
                phone: {
                    'en-US': entry.phone
                },
                twitter: {
                    'en-US': entry.twitter
                },
                facebook: {
                    'en-US': entry.facebook
                },
                notes: {
                    'en-US': entry.notes
                }
            }
        }))
      .then((entry) => console.log(entry))
      .catch(console.error)

}

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
const generateRandomString = (length) => {
  let text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

entries.forEach((entry) => createEntry(entry))

//Run node management.js to import data in causes.json to Contentful