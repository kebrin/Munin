import React from 'react';
import Modal from 'react-native-modal'

export const SwipeModal = ({show, dismiss, innercomponent}) => (
  <Modal children={innercomponent}
    isVisible={show}
    animationIn="slideInUp"
    animationOut="zoomOutUp"
    animationInTiming={400}
    animationOutTiming={1000}
    transparent={true}
    backdropColor='black'
    backdropOpacity={.5}
    backdropTransitionInTiming={1000}
    backdropTransitionOutTiming={500}
    onBackdropPress={dismiss}
    onBackButtonPress={dismiss}
    >
  </Modal>
)