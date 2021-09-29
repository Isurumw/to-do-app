import React, {useState} from 'react';
import {
  View,
  StyleProp,
  ImageStyle,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import {SvgProps} from 'react-native-svg';

import {foundation} from 'styles/colors';
import styles from './progressive-image.styles';

interface IProgressiveImageProps {
  url?: string;
  containerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  Placeholder?: React.FC<SvgProps>;
}

const ProgressiveImage: React.FC<IProgressiveImageProps> = ({
  url,
  containerStyle,
  imageStyle,
  Placeholder,
}) => {
  const [loading, setLoading] = useState(!!url);

  const onLoadStart = () => {
    setLoading(true);
  };

  const onLoad = () => {
    setLoading(false);
  };

  const onError = () => {
    setLoading(false);
  };

  return (
    <View style={containerStyle}>
      {url ? (
        <>
          <FastImage
            style={[imageStyle as FastImageProps['style'], styles.image]}
            source={{
              uri: url,
              priority: FastImage.priority.normal,
              cache: FastImage.cacheControl.immutable,
            }}
            onError={onError}
            onLoadStart={onLoadStart}
            onLoad={onLoad}
          />
          {loading && (
            <ActivityIndicator size="small" color={foundation.grape} />
          )}
        </>
      ) : Placeholder ? (
        <Placeholder style={imageStyle} fill={foundation.satin} />
      ) : null}
    </View>
  );
};

export default ProgressiveImage;
