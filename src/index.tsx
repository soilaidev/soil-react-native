import { PropsWithChildren, useCallback } from "react";
import { TouchableWithoutFeedback, View, type ViewStyle, type StyleProp, StyleSheet } from "react-native";

export function SoilAi({ children }: PropsWithChildren) {
  const handlePress = useCallback(() => console.log("TODO"), []);

  return (
    <TouchableWithoutFeedback style={styles.touchable} onPress={handlePress}>
      {children}
    </TouchableWithoutFeedback>
  );
}

export function TouchableSoilAiScreen({
  children,
  style,
}: PropsWithChildren<{ soilId: string; style?: StyleProp<ViewStyle> }>) {
  const handlePress = useCallback(() => console.log("TODO"), []);

  return (
    <View style={style}>
      <TouchableWithoutFeedback style={styles.touchable} onPress={handlePress}>
        {children}
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  touchable: {
    display: "flex",
  },
});
