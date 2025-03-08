import React from "react";
import {TextInput, View } from "react-native";
import styles from "./searchBarStyles";

function searchBar(props) {
    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.searchContainerText}
                placeholder="Search..."
                onChangeText={props.onSearch}
            />
        </View>
    );
};

export default searchBar;
