import React, {memo} from 'react';
import { StyleSheet, TouchableOpacity, Modal } from 'react-native';

const Modals = memo(({ renderList, modalShow, modalHandle, autoClose }) => {
  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={modalShow}
    >
      <TouchableOpacity style={styles.modalCenter} onPress={autoClose ? modalHandle : null} activeOpacity={1}>
        {renderList}
      </TouchableOpacity>
    </Modal>
  )
})

const styles = StyleSheet.create({
  modalCenter: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

export default Modals;