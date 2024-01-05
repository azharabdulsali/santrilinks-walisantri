import { View, Text } from 'react-native';
export default function SetorHafalan2({route, navigation}) {
    const { data } = route.params;
    return (
        <View>
            <Text>SetorHafalan2</Text>
            <Text>{data.nama}</Text>
        </View>
    );
}