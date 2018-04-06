import React from 'react';
import {Modal, Button, Row, Input} from 'react-materialize';
class SubscribeBar extends React.Component {
   
    render(){ 
        return (
            <Modal
            header='Modal Header'
            bottomSheet
            trigger={<Button>Connect</Button>}>
            <Row>
                <Input placeholder="Placeholder" s={6} label="First Name" />
                <Input s={6} label="Last Name" />
                <Input s={12} label="disabled" defaultValue="I am not editable" disabled />
                <Input type="password" label="password" s={12} />
                <Input type="email" label="Email" s={12} />
            </Row>
          </Modal>
        )
    }
}

export default SubscribeBar;
