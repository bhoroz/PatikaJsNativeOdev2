import React, { useState } from "react";
import { SafeAreaView, View, FlatList, StyleSheet } from "react-native";
import music_data from "./music-data.json";
import SongCard from "./Components/songCard/songCard";
import SearchBar from "./Components/SearchBar/searchBar";

function App() {
    const [list, setList] = useState(music_data);

    const renderSong = ({ item }) => <SongCard song={item} />;

    const renderSeparator = () => <View style={styles.separator} />;

    const handleSearch = (text) => {
        const filteredList = music_data.filter((song) => {
            const searchedText = text.toLowerCase();
            const currentTitle = song.title.toLowerCase();
            return currentTitle.indexOf(searchedText) > -1;
        });
        setList(filteredList);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <SearchBar onSearch={handleSearch} />
                <FlatList
                    data={list} // list state'ini kullan
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderSong}
                    ItemSeparatorComponent={renderSeparator}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    separator: {
        borderWidth: 1,
        borderColor: "#e0e0e0",
        marginVertical: 10,
    },
});

export default App;