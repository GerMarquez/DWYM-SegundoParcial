import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ScreenSizeWrap: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const onChange = (e: any) => {
      setWindowDimensions(e.window);
    };

    const subscription = Dimensions.addEventListener('change', onChange);

    return () => {
      subscription.remove();  
    };
  }, []);

  const { width, height } = windowDimensions;
  const maxWidth = width * 0.85;
  const maxHeight = height * 0.85;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, { maxWidth, maxHeight }]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,  
    justifyContent: 'flex-start',  
    alignItems: 'stretch',
  },
});

export default ScreenSizeWrap;
