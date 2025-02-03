import { Image, ImageProps } from "expo-image";
import { Box } from "./ui/box";
import { ActivityIndicator, StyleSheet } from "react-native";
import { memo, useEffect, useState } from "react";
import checkAndDownloadImage from "@/utilities/checkAndDownloadImage";

const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

/**
 * A drop-in replacement for `expo-image/Image` that supports loading images from storage.
 *
 * It takes the same props as `expo-image/Image`, and will automatically download the image to
 * storage if it's not already downloaded.
 *
 * @remarks
 * This component is designed to be used with images that are stored on the device's file system.
 * If you're using images from a remote source, you should use `expo-image/Image` instead.
 *
 * @example
 * import StoredImage from "@/components/StoredImage";
 *
 * <StoredImage source={{ uri: 'file:///path/to/image.jpg' }} />;
 */
const StoredImage = ({ source, ...props }:ImageProps) => {
  const [localUri, setLocalUri] = useState<string>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      if(!source) return;
      if(localUri) return;

      setLoading(true);

      const uri = typeof source === 'object' && 'uri' in source && source.uri
        ? await checkAndDownloadImage(source.uri) : null;

      if(!uri) return;
      setLocalUri(uri);
      setLoading(false);
    };

    loadImage();
  }, [localUri, source]);

  if (loading) {
    return (
      <Box style={[styles.loadingContainer, styles.container]}>
        <ActivityIndicator size="small" />
      </Box>
    );
  }

  return <Image
    source={{ uri: localUri }}
    placeholder={{ blurhash }}
    style={[props.style, styles.container]}
  />;
};

const styles = StyleSheet.create({
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    borderRadius: 150 / 2,
  }
});

export default memo(StoredImage);