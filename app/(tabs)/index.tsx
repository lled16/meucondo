import { Link } from "expo-router";
import { View } from "react-native";


export default function HomeScreen() {
  return (
    <View>
      <Link
        href={{
          pathname: '../Pages/login/login',
        }}>
          View user
        </Link>
    </View>
  );
}

