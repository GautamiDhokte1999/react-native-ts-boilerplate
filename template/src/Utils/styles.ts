import { BorderWidth, Colors } from '@/Theme'
import { Dimensions, Platform, StyleSheet } from 'react-native'

export const screenHeight = Math.round(Dimensions.get('window').height)
export const screenWidth = Math.round(Dimensions.get('window').width)

export const globalStyles = StyleSheet.create({
  tabs: {
    backgroundColor: Colors.background,
    fontWeight: 'bold',
  },
  listItem: {
    borderBottomWidth: BorderWidth.divider,
    borderBottomColor: Colors.divider,
  },
  textInput: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  //In case screen contains sheet
  // Fix: Touch events on the content are not being captured on Android when zIndex is overridden
  textInputzIndex: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginHorizontal: 5,
    zIndex: 0,
  },
  searchInput: {
    borderRadius: 5,
    padding: 0,
    margin: 0,
    color: '#000',
    fontSize: 22,
    width: '75%',
    textDecorationLine: 'none',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    borderRadius: 16,
  },
  description: {
    color: Colors.secondary,
  },
  mrb5: {
    marginBottom: 5,
  },
  mrb10: {
    marginBottom: 10,
  },
  mrb16: {
    marginBottom: 16,
  },
  mrb20: {
    marginBottom: 20,
  },
  mrb24: {
    marginBottom: 24,
  },
  mrt4: {
    marginTop: 4,
  },
  mrt5: {
    marginTop: 5,
  },
  mrt10: {
    marginTop: 10,
  },
  mrt16: {
    marginTop: 16,
  },
  mrtN10: {
    marginTop: -10,
  },
  mrl2: {
    marginLeft: 2,
  },
  mrlN15: {
    marginLeft: -15,
  },
  mrl16: {
    marginLeft: 16,
  },
  mrl25: {
    marginLeft: 25,
  },
  mrh16: {
    marginHorizontal: 16,
  },
  mrt20: {
    marginTop: 20,
  },
  mrt130: {
    marginTop: 130,
  },
  mrb80: {
    marginBottom: 80,
  },
  mrh10: {
    marginHorizontal: 10,
  },
  height60: {
    height: 60,
  },
  height40: {
    height: 40,
  },
  nodisplay: {
    display: 'none',
    width: 0,
    height: 0,
    opacity: 0,
  },
  descriptionsTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.secondary,
  },
  descriptionsContent: {
    fontSize: 16,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  scrollView: {
    flex: 1,
  },
  formGroupTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.formtitle,
  },
  dialog: {
    backgroundColor: Colors.white,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 0.8 * screenHeight,
  },
  emptyStateText: {
    marginTop: 16,
    textAlign: 'center',
    width: '75%',
    color: Colors.secondary,
  },
  link: {
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
  link2: {
    color: Colors.primary,
  },
  selection: {
    backgroundColor: 'rgba(67, 85, 185, 0.08)',
  },
  fieldTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.formtitle,
  },
  flexCol: {
    flex: 1,
    flexDirection: 'column',
  },
  formDivider: {
    borderTopWidth: BorderWidth.divider,
    borderColor: Colors.divider,
    marginHorizontal: 0,
  },
  bottomDivider: {
    borderBottomWidth: BorderWidth.divider,
    borderColor: Colors.divider,
    marginHorizontal: 0,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const keyboardbehavior = Platform.OS === 'ios' ? 'padding' : 'height'
