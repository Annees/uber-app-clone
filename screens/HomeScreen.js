import React from 'react'
import { Image, StyleSheet, Text, View} from 'react-native';
import tw from "tailwind-react-native-classnames";
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";

const HomeScreen = () => {

    
    return (
        <View style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image 
                    style={{
                        width:100, 
                        height:100, 
                        resizeMode:"contain"
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs"
                    }}
                />
                <GooglePlacesAutocomplete
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    onPress={(data, details = null) => {
                        console.log(data);
                        console.log(details);
                    }}
                    fetchDetails= {true}
                    placeholder="Where From?"
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    minLength={2}
                    enablePoweredByContainer={false}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en',
                    }}
                />
                <NavOptions />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})

