import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {COLOR, SPACING} from '../../assets/themes/globals';
import {MyText} from '../myText/MyText.component';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMapPin} from '@fortawesome/free-solid-svg-icons';
import {RegionService} from '../../services/regions.service';

export const MyItem = (data: any) => {
  // const [region, setRegion] = useState(0);

  // useEffect(() => {
  //   const center = async (i: number) => {
  //     for (i; i <= 4; i++) {
  //       console.log(i);
  //       const result = await RegionService.regions(`${i}`);
  //       await result;
  //     }
  //   };
  // });
  // console.log('DATATATATATATA::::', data);
  return (
    <View
      style={{
        elevation: 2,
        backgroundColor: COLOR.secondaryColor,
        padding: SPACING.xmedium,
        borderRadius: SPACING.small,
        // justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: SPACING.xsmall,
      }}>
      <View style={{flexDirection: 'row'}}>
        <FontAwesomeIcon
          icon={faMapPin}
          size={SPACING.xlarge}
          style={{marginRight: SPACING.small}}
          color={COLOR.tilteTextColor}
        />
        <MyText
          myText={data.data.name}
          variant="normal"
          lineHeight={SPACING.xlarge}
          textAlign="center"
          color="#000"
        />
      </View>
      {/* <View>
        <MyText
          myText=""
          variant="title"
          lineHeight={SPACING.xlarge}
          textAlign="center"
          color="#cecece"
        />
      </View> */}
    </View>
  );
};
