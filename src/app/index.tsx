import { View, Text } from "react-native";
import { Input } from "../components/input";

export default function Home() {
  return (
    <View className="flex-1 bg-black items-center justify-center">
      <Text className="text-2xl text-white"> Ola, mundo! </Text>
      <Input>
        <Input.Field placeholder="nome" />
      </Input>
    </View>
  );
}
