import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
  icon: keyof typeof Ionicons.glyphMap;
}

export function Button({
  title,
  icon,
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={isLoading}
      activeOpacity={0.8}
      style={styles.container}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color="#FFF" />
      ) : (
        <>
          <Ionicons name={icon} style={styles.icon} />
          <Text style={styles.text}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}
