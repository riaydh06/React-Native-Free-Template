import React from 'react';
import {
  Modal,
  Image,
  TouchableOpacity,
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components';
import {string, bool, func, array} from 'prop-types';
import assets from '../../assets';
import {fonts, colors} from '@baseStyle';
import {crossButton, pt10, mb20, mb5} from '../../styles/commonStyle';
// import InputSearch from '../../ui/Input/InputSearch';
import {ButtonPrimary, TextComponent} from '../../components';
import {truncateString} from '../../utils';

const listItems = (items, onSelect, multiContact) => (
  <View style={pt10}>
    {items.map((item, index) => (
      <ListItem subLabel={item.subLabel} key={item.id}>
        <TouchableOpacity
          onPress={() => {
            if (multiContact) {
              onSelect(items, index);
            } else {
              onSelect(item);
            }
          }}>
          <View style={{flexDirection: 'row'}}>
            {/* {item.iconName && (
              <Image
                source={assets[item.iconName]}
                style={{width: 50, height: 50}}
              />
            )} */}
            <View style={{alignSelf: 'center', paddingLeft: 10}}>
              <TextComponent size="medium" family={fonts.regular}>
                {truncateString(item.label)}
              </TextComponent>
              {item.subLabel && (
                <TextComponent
                  size="mini"
                  family={fonts.regular}
                  color={colors.text}>
                  {item.subLabel}
                </TextComponent>
              )}
            </View>
          </View>
        </TouchableOpacity>
      </ListItem>
    ))}
  </View>
);

const ModalComponent = ({
  visible,
  title,
  onChange,
  options,
  onSelect,
  search,
  searchPlaceholder,
  searchValue,
  searchKeyboardType,
  searchOnChangeText,
}) => (
  <Modal
    animationType="fade"
    transparent
    onRequestClose={onChange}
    visible={visible}
    onSelect={onSelect}>
    <View style={styles.wrapper}>
      <View style={styles.bodyWrapper}>
        <View style={styles.contentWrapper}>
          <View style={styles.headingWrapper}>
            <View style={styles.modalTitleWrapper}>
              {/* <TextComponent
                content={title}
                size="normal"
                family={fonts.regular}
                weight="300"
              /> */}
            </View>
          </View>
          {/* <CrossIconWrapper onPress={onChange}>
            <Image style={crossButton} source={assets.Cancel} />
          </CrossIconWrapper> */}

          {/* {search && (
            <InputSearchWrapper>
              <InputSearch
                placeholder={searchPlaceholder}
                value={searchValue}
                keyboardType={searchKeyboardType}
                onChangeText={(text) => {
                  searchOnChangeText(text);
                }}
              />
            </InputSearchWrapper>
          )} */}
          {/* <ListItemWrapper style={fixedHeight ? {minHeight: 70} : null}>
            <ScrollView>
              <View>{listItems(options, onSelect)}</View>
              <View style={{alignItems: 'center'}}>
                {options.length === 0 && (
                  <TextComponent
                    size="medium"
                    weight="300"
                    family={fonts.medium}>
                    {i18n.t('noResultFound')}
                  </TextComponent>
                )}
              </View>
            </ScrollView>
          </ListItemWrapper> */}
        </View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flex: 1,
    justifyContent: 'center',
  },
  bodyWrapper: {
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: 10,
  },
  contentWrapper: {
    flexDirection: 'column',
    backgroundColor: colors.white,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 25,
    borderRadius: 16,
  },
  contentIconWrapper: {
    flexDirection: 'column',
    backgroundColor: colors.white,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    borderRadius: 16,
  },
  headingWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  modalTitleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  inputSearchWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    paddingBottom: 10,
  },
  crossIconWrapper: {
    position: 'absolute',
    justifyContent: 'flex-start',
    alignSelf: 'flex-end',
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  textWrapper: {
    alignSelf: 'center',
  },
  listItemWrapper: {
    maxHeight: 200,
  },
  // ListItem :{
  //   border-bottom-width: 1,
  //   border-bottom-color: ${colors.light},
  //   padding-bottom: ${(props) => (props.subLabel ? 5 : 15)},
  //   margin-bottom: ${(props) => (props.subLabel ? 5 : 15)};
  // `;
});

ModalComponent.propTypes = {
  visible: bool.isRequired,
  title: string,
  options: array.isRequired,
  onChange: func.isRequired,
  onSelect: func.isRequired,
  addNewMemberModal: bool,
  onAddNewMember: func,
  multiContact: bool,
  search: bool,
  searchPlaceholder: string,
  searchValue: string,
  searchKeyboardType: string,
  searchOnChangeText: func,
  fixedHeight: bool,
  titleTwo: string,
  optionsTwo: array,
};

ModalComponent.defaultProps = {
  title: '',
};

export default ModalComponent;
