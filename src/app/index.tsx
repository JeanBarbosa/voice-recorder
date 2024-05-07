import { View, Text } from "react-native";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

import { Input } from "../components/input";
import { Button } from "../components/button";

export default function Home() {
  const recording = true;

  return (
    <View className="flex-1 bg-black items-center justify-end pb-10">
      <View className="flex-row w-full items-center justify-evenly">
        <View className="items-center justify-center w-16 h-16 rounded-full bg-blue-500 focus:outline-none">
          <Button onPress={() => console.log("click")} />
        </View>
        <View className="items-center justify-center w-24 h-24 rounded-full bg-blue-500 focus:outline-none">
          <Button stop onPress={() => console.log("click")} />
        </View>
        <View className="items-center justify-center w-16 h-16 rounded-full bg-blue-500 focus:outline-none">
          {!recording ? (
            <Link href="/playlist">
              <FontAwesome name="list-ol" size={24} color="white" />
            </Link>
          ) : (
            <FontAwesome name="check" size={24} color="white" />
          )}
        </View>
      </View>
    </View>
  );
}
