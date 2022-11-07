import { StyleSheet } from "react-native";

export const footer = StyleSheet.create({
    footer: {
        backgroundColor: "black",
        height: 100,
        display: "flex",
        flexDirection: "row"
    },

    imghome:{
        height:30,
        width:30,
        margin:10,
        top:6,
        left:20
    },
    imgajuda:{
        height:30,
        width:30,
        left: 295,
        top:14
        
    },
    imgtelefone:{
        height:27,
        width:27,
        left:160,
        top:20
        
    },

    imgmapa:{
        height:30,
        width:30,
        right:9,
        top:19,
        
    },

    txthome:{
        color:"white",
        left:25,
        top:-3
    
    },
    txtmapa:{
        color:"white",
        top:20,
        right:10
    },
    txttelefone:{
        color:"white",
        left:150,
        top: 25
    },
    txtajuda:{
        color:"white",
        left:295,
        top:20
    }
})