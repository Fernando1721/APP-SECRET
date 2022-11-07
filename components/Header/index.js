import { Image, View } from "react-native";
import {header, StyleHeader} from "../Header/StyleHeader"


export default function Header(){
    return(
        <View style={header.header}>
            <View style={header.title}>
                <Image source={require("../../assets/logoss.png")} style={header.logo}/>
                <Image source={require("../../assets/menu2.jpg")} style={header.menu}/>
                <Image source={require("../../assets/sino2.png")} style={header.sino}/>
            </View>
        </View>
    )
}