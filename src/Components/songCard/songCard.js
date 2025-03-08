import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import styles from "./songCardStyles";


function SongCard(props) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: props.song.imageUrl }}
                style={styles.image}
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{props.song.title}</Text>
                <View style={styles.ContainerBody}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.artist}>{props.song.artist}</Text>
                        <Text style={styles.year}>{props.song.year}</Text>
                    </View>
                    {props.song.isSoldOut && (
                    <View style={styles.soldOutContainer}>
                        <Text style={styles.soldOutText}>TÜKENDİ</Text>
                    </View>
                    )}
                </View>
            </View>
        </View>
    );
};

export default SongCard;