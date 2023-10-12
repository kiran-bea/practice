import React, { useState } from 'react'
import { Button, Checkbox, Form, Container, Radio, Header, Icon, Modal } from 'semantic-ui-react'

export default function SignUp() {
    const [firstName, setFirstName] = useState()
    const [secondName, setSecondName] = useState(null)
    const [emailId, setEmailId] = useState(null)
    const [dob, setDob] = useState(null)
    const [selectedGender, setGender] = useState(null)
    const [open, setOpen] = useState(false)

    function handleChange(e, { value }) {

        setGender(value)
    }
    function handleFirstName({ value }) {
        console.log('nj')
        setFirstName(value)
    }
    function handleSecondName({ value }) {
        setSecondName(value)
    }
    function handleEmailId({ value }) {
        setEmailId(value)
    }
    function handleDob({ value }) {
        setDob(value)
    }
    function onSubmit() {
        setOpen(true)

    }
    return (
        <div>
            <Container>
                <h1>Sign Up</h1>
                <Form>
                    <Form.Field inline>
                        <label>First Name</label>
                        <input placeholder='First Name' onChange={handleFirstName} />
                    </Form.Field>
                    <Form.Field inline>
                        <label>Last Name</label>
                        <input placeholder='Last Name' onChange={handleSecondName} />
                    </Form.Field>
                    <Form.Field inline>
                        <label>DOB:</label>
                        <input type='date' onChange={handleDob} />
                    </Form.Field>
                    <Form.Input inline label='Email' placeholder='joe@schmoe.com' onChange={handleEmailId} />



                    <Form.Field>
                        <label>Gender</label>
                        <Radio
                            label='Male'
                            name='gender'
                            value='Male'
                            checked={selectedGender === 'Male'}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Female'
                            name='gender'
                            value='Female'
                            checked={selectedGender === 'Female'}
                            onChange={handleChange}
                        />
                    </Form.Field>

                    <Form.Field>
                        Selected value: {selectedGender}
                    </Form.Field>




                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button type='submit' onClick={onSubmit}>Submit</Button>
                </Form>
            </Container>

            <Modal
                closeIcon
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >
                <Header icon='warning sign' content='Confirm' />

                <Modal.Content>
                    {firstName}
                    <h3>First Name: {firstName}</h3>
                    <h3>Second Name: {secondName}</h3>
                    <h3>Email: {emailId}</h3>
                    <h3>DOB: {dob}</h3>
                    <h3>Gender: {selectedGender}</h3>

                    <p>
                        Do you want submit the data?
                    </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' onClick={() => setOpen(false)}>
                        <Icon name='remove' /> No
                    </Button>
                    <Button color='green' onClick={() => setOpen(false)}>
                        <Icon name='checkmark' /> Yes
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}
