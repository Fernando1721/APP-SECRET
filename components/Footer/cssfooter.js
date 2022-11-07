import { StyleSheet } from "react-native";

export const footer = StyleSheet.create({
    footer: {
        backgroundColor: "black",
        height: 100,
        display: "flex",
        flexDirection: "row"
    },

    imghome:{
        height:35,
        width:35,
        margin:10,
        top:6,
        left:6
    },
    imgajuda:{
        height:35,
        width:35,
        left: 310,
        top:14
        
    },
    imgtelefone:{
        height:30,
        width:30,
        left:160,
        top:20
        
    },

    imgmapa:{
        height:35,
        width:35,
        right:9,
        top:19
    },
    txthome:{
        color:"white",
        fontSize:20,
    fontWeight:"bold"
    }
})