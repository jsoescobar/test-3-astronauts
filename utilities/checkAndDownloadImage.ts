import * as FileSystem from 'expo-file-system';

/**
 * Downloads an image from a given URL and stores it in the local file system.
 * If the image already exists in the local file system, it will be returned
 * without downloading.
 *
 * @param {string} url - The URL of the image to be downloaded.
 * @returns {string|null} The URI of the image if it was downloaded
 * successfully, or null if there was an error.
 */
const checkAndDownloadImage = async (url: string) => {

  const fileName = url.split('/').pop();
  const fileUri = `${FileSystem.documentDirectory}${fileName}`;

  const fileInfo = await FileSystem.getInfoAsync(fileUri);

  if (fileInfo.exists) {
    return fileUri;
  } else {
    try {
      const { uri } = await FileSystem.downloadAsync(url, fileUri);
      return uri;
    } catch {
      return null;
    }
  }
};

export default checkAndDownloadImage;

