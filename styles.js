import { StyleSheet } from 'react-native'
import { RkTheme } from 'react-native-ui-kitten'

const cardImageAspectRatio = 428 / 298
const cardImageHeight = 428 * RkTheme.current.metrics.ratioY
const cardImageWidth = cardImageHeight / cardImageAspectRatio

const styles = StyleSheet.create({
  card: {
    flex: 1,
    position: 'absolute'
  },
  container: {
    alignItems: 'stretch',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  childrenViewStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  overlayLabelWrapper: {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 2,
    flex: 1,
    width: '100%',
    height: '100%'
  },
  hideOverlayLabel: {
    opacity: 0
  },
  overlayLabel: {
    fontSize: 45,
    fontWeight: 'bold',
    borderRadius: 10,
    padding: 10,
    overflow: 'hidden'
  },
  bottomOverlayLabelWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  topOverlayLabelWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightOverlayLabelWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginLeft: 30
  },
  leftOverlayLabelWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginLeft: -30
  },
  backCard: {
    width: cardImageWidth,
    height: cardImageHeight,
    alignSelf: 'center',
    opacity: 0.3,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    shadowColor: "#5554853d",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 15,
    shadowOpacity: 1
  }
})

export default styles
