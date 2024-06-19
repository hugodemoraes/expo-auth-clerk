import { Text, View, StyleSheet, Image } from "react-native";

import { Button } from "@/components/Button";
import { useAuth, useUser } from "@clerk/clerk-expo";

export default function Home() {
  const { user } = useUser();
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Image source={{ uri: user?.imageUrl }} style={styles.avatar} />
      <Text style={styles.title}>{`Bem vindo, ${user?.fullName}!`}</Text>
      <Button title="Sair" icon="exit" onPress={() => signOut()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 92,
    height: 92,
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 32,
  },
});
