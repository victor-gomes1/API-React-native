import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

type Props = {
  title: string;
  image: string;
  description: string;
};

export default function FilmCard({ title, image, description }: Props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.poster} />

      <View style={{ flex: 1 }}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text numberOfLines={3} style={styles.cardBody}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 12,
    borderRadius: 12,
    borderColor: "#EEE",
    borderWidth: StyleSheet.hairlineWidth,
    gap: 12,
  },

  poster: {
    width: 70,
    height: 100,
    borderRadius: 8,
  },

  cardTitle: { fontWeight: "700", marginBottom: 4, fontSize: 16 },
  cardBody: { color: "#444", fontSize: 13 },
});
