import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  stop?: boolean;
};

export function Button({ stop = false }: Props) {
  return (
    <TouchableOpacity className="flex items-center justify-center">
      {stop ? (
        <FontAwesome name="pause" size={30} color="white" />
      ) : (
        <FontAwesome name="play" size={30} color="white" />
      )}
    </TouchableOpacity>
  );
}
