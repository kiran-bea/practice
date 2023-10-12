import React from 'react'
import { Checkbox, Button, Form } from 'semantic-ui-react'
import './Styles.css'

export default function Formm() {
  return (
    <div>
      <div className='formDiv'>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' />
          </Form.Field>
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    </div>
  )
}
