import { Button, Image, Text, View } from "react-native";
import { content } from "./csscontent";

export default function Content(){
    return(
        <View style={content.content}>
            <View style={content.colecao}>
                <Text style={content.txtnew}> NEW </Text>
                <Text style={content.viewmore}> VIEW MORE </Text>
                <Text style={content.txtsport}> SPORT </Text>
                <Text style={content.txtcolecao}> COLLECT </Text>
                <Text style={content.txttion}> TION </Text>
               
            </View>

            <View style={content.img}>
                <Image source={require("../../assets/teste1.jpg")} style={content.img1}/>
                <Image source={require("../../assets/teste1.jpg")} style={content.img2}/>
            </View>
            <Text style={content.txtdesc}> A descrição física do produto, também deve estar presente </Text>

        </View>
    )
}