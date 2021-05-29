import {Image, TouchableWithoutFeedback, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import defaultIconSelected from '../../../assets/Image/icon_star_selected.png';
import defaultIconUnselected from '../../../assets/Image/icon_star_unselected.png';
import {row} from '../../../styles/commonStyle';

function Rating({
  max,
  onRate,
  iconHeight,
  iconWidth,
  editable,
  iconSelected,
  iconUnselected,
  rating,
  style,
}) {
  const [internalRating, setInternalRating] = useState(rating ?? 0);
  const newRating = rating ?? internalRating;

  const icons = useMemo(() => {
    const ics = [];
    for (let i = 1; i <= max; i += 1) {
      ics.push(
        <TouchableWithoutFeedback
          disabled={!editable}
          key={i}
          style={{height: iconHeight, width: iconWidth}}
          onPress={() => {
            setInternalRating(i);
            onRate?.(i);
          }}>
          <Image
            style={{height: iconHeight, width: iconWidth}}
            source={newRating >= i ? iconSelected : iconUnselected}
          />
        </TouchableWithoutFeedback>,
      );
    }
    return ics;
  }, [
    max,
    onRate,
    iconHeight,
    iconWidth,
    editable,
    iconSelected,
    iconUnselected,
    newRating,
  ]);

  return <View style={[style, row]}>{icons}</View>;
}

Rating.defaultProps = {
  max: 5,
  iconHeight: 36,
  iconWidth: 36,
  editable: true,
  iconSelected: defaultIconSelected,
  iconUnselected: defaultIconUnselected,
  rating: 0,
};

export default Rating;
