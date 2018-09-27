import React, { Component } from 'react'
import { Modal, ModalBody } from 'reactstrap'


class signInModal extends Component{
	render(){
		return(
			<Modal>
				<ModalBody>
					<button className="btn btn-red btn-lg">Sign in with google</button>
				</ModalBody>
			</Modal>
		)
	}
}


export default signInModal