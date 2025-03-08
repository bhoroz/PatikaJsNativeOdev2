import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    detailsContainer: {
        flex: 1,
        padding: 10,
        justifyContent: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 5,
    },
    ContainerBody:{
        flexDirection: "row",
    },
    infoContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center", 
    },
    artist: {
    },
    year: {
         marginLeft: 10,
         color: "gray",
         fontSize: 12,
         fontWeight: "bold"
    },
    soldOutContainer: {
        borderWidth: 1,
        borderColor: "#FF0000",
        padding: 5,
        borderRadius: 10,
        
    },
    soldOutText: {
        color:"#FF0000",
        fontSize: 12,
    },

});

