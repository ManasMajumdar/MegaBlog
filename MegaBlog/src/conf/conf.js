//we make config file beacause of if we direct import env file in app.jsx so may be it cause some issue because in .env file there are may id which can be integer and string mixture but if if any id comes with an only integer value then its causes issue so in config file we have only sring value

const conf = {
    appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_BUCKET_ID)
}

export default conf


