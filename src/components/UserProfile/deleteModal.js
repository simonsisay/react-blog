import React, { Component } from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

class DeleteModal extends Component {
	
	toggleOff = () => {
		this.props.toggleModal();
	}

	render(){
		const {toggleModal, isModalOpen} = this.props;
		return(
			 <Modal isOpen={isModalOpen} toggle={toggleModal} centered>

		       <ModalBody>
		         <p>Are you sure you want to delete this post ?</p>
		       </ModalBody>

		       <ModalFooter>
			  		  <Button 
				  		  	onClick={this.props.deleteBlog}
				  		  	color="danger"> Delete
			  		  </Button>
		         <Button color="indigo" onClick={this.props.closeModal}>Cancel</Button>
		       </ModalFooter>

		     </Modal>
		 )
	}
}

export default DeleteModal