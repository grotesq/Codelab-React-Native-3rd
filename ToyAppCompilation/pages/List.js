import React from 'react';
import { Button, View } from 'react-native';

export default ( { navigation } ) => {
    return(
        <View>
            <Button title="타노스 스냅"
                    onPress={ () => navigation.navigate( 'Thanos' ) }/>
            <Button title="로또 번호 추천"
                    onPress={ () => navigation.navigate( 'Lotto' ) }/>
        </View>
    )
}