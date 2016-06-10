import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MeteorListView} from 'react-native-meteor';
import { COLORS } from '../../styles';
import Loading from '../../components/Loading';


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: COLORS.background,
//   },
//   main: {
//     fontSize: 20,
//     textAlign: 'center',
//     color: COLORS.headerText,
//     fontWeight: '400',
//     fontStyle: 'italic',
//   },
// });

const renderRow = (product) => {
  return(<Text>{product.name}</Text>);
}

const Details = (props) => {
  const {detailsReady, details} = props;

    return (
      <View>
        {!detailsReady && <Loading/>}

        <MeteorListView
          collection="products"
          renderRow={renderRow}
        />

      </View>
    );
  }

export default Details;
