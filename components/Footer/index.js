import { Image, Text, View } from "react-native";
import { footer } from "./cssfooter";


export default function Footer() {
    return (

        <View style={footer.footer}>
            <View style={footer.home}>
                <Image source={require("../../assets/homebranco.png")} style={footer.imghome} />
                <Text style={footer.txthome}>Home</Text>
            </View>

            <View style={footer.ajuda}>
                <Image source={require("../../assets/ajuda.png")} style={footer.imgajuda} />
                <Text style={footer.txtajuda}>Ajuda</Text>
            </View>

            <View style={footer.telefone}>
                <Image source={require("../../assets/telefone.png")} style={footer.imgtelefone} />
                <Text style={footer.txttelefone}>Telefone</Text>
            </View>

            <View style={footer.mapa}>
                <Image source={require("../../assets/mapa.png")} style={footer.imgmapa} />
                <Text style={footer.txtmapa}>Mapa</Text>
            </View>


            <View style={footer.contato}></View>
            <View style={footer.sobrenos}></View>
            <View style={footer.localizacao}></View>
        </View>
    )
}