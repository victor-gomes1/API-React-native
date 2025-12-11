import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SearchBar from "../components/SearchBar";
import FilmCard from "../components/FilmCard";
import { getFilms } from "../services/api";

type Film = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export default function HomeScreen() {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [query, setQuery] = useState("");

  async function load() {
    try {
      const data = await getFilms();
      setFilms(data);
    } catch (error) {
      console.log("Erro ao carregar filmes:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const filtered = query
    ? films.filter((f) =>
        f.title.toLowerCase().includes(query.toLowerCase())
      )
    : films;

  if (loading) {
    return (
      <SafeAreaView style={styles.center}>
        <ActivityIndicator size="large" />
        <Text style={styles.muted}>Carregando filmes...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar value={query} onChange={setQuery} />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={load}
        ListEmptyComponent={<Text style={styles.muted}>Nenhum filme encontrado.</Text>}
        renderItem={({ item }) => (
          <FilmCard
            title={item.title}
            image={item.image}
            description={item.description}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6F7F9" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  muted: { color: "#666" },
});
