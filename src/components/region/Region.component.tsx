import {faMapPin} from '@fortawesome/free-solid-svg-icons';
import {faCity} from '@fortawesome/free-solid-svg-icons';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import {faHourglassStart} from '@fortawesome/free-solid-svg-icons';
import {faHourglassEnd} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLOR, SPACING} from '../../assets/themes/globals';
import {MyText} from '../myText/MyText.component';

const FONT_TITLE = 18;
const FONT_CONTENT = 14;

export const Region = (data: any) => {
  console.log('DATA REGION:::::', data.data);
  return (
    <View style={styles.container}>
      <View style={[styles.container__line, {flexDirection: 'row'}]}>
        <FontAwesomeIcon
          icon={faCity}
          size={SPACING.medium}
          style={{marginRight: SPACING.small}}
          color={COLOR.tilteTextColor}
        />
        <MyText
          myText={data.data.quartier}
          variant="normal"
          lineHeight={SPACING.xlarge}
          textAlign="left"
          color="#000"
          fontWeight="bold"
          fontSize={FONT_TITLE}
        />
      </View>
      <View style={[styles.container__delimited, styles.container__line]}>
        <FontAwesomeIcon
          icon={faMapPin}
          size={SPACING.medium}
          style={{marginRight: SPACING.small}}
          color={COLOR.tilteTextColor}
        />
        <MyText
          myText={data.data.observations}
          variant="normal"
          lineHeight={SPACING.xlarge}
          textAlign="left"
          color="#000"
          fontSize={FONT_CONTENT}
        />
      </View>

      <View style={[styles.container__delimited, styles.container__line]}>
        <FontAwesomeIcon
          icon={faHourglassStart}
          size={SPACING.medium}
          style={{marginRight: SPACING.small}}
          color={COLOR.tilteTextColor}
        />
        <MyText
          myText={`heure de depart: ${data.data.prog_heure_debut}`}
          variant="normal"
          lineHeight={SPACING.xlarge}
          textAlign="left"
          color="#000"
          fontSize={FONT_CONTENT}
        />
      </View>

      <View style={[styles.container__delimited, styles.container__line]}>
        <FontAwesomeIcon
          icon={faHourglassEnd}
          size={SPACING.medium}
          style={{marginRight: SPACING.small}}
          color={COLOR.tilteTextColor}
        />
        <MyText
          myText={`fin: ${data.data.prog_heure_fin}`}
          variant="normal"
          lineHeight={SPACING.xlarge}
          textAlign="left"
          color="#000"
          fontSize={FONT_CONTENT}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: SPACING.small,
        }}>
        <FontAwesomeIcon
          icon={faCalendarAlt}
          size={SPACING.medium}
          style={{marginRight: SPACING.small}}
          color={COLOR.tilteTextColor}
        />
        <MyText
          myText={`date: ${data.data.prog_date}`}
          variant="normal"
          lineHeight={SPACING.xlarge}
          textAlign="left"
          color="#000"
          fontSize={FONT_CONTENT}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 2,
    backgroundColor: COLOR.secondaryColor,
    padding: SPACING.xmedium,
    borderRadius: SPACING.small,
    flexDirection: 'column',
    marginVertical: SPACING.xsmall,
  },
  container__delimited: {
    flexDirection: 'row',
    marginTop: SPACING.small,
  },
  container__line: {
    borderBottomWidth: 1,
    borderColor: COLOR.normalTextColor,
    paddingVertical: SPACING.xsmall,
  },
});
