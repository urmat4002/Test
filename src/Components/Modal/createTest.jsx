import {useState} from 'react'
import {Button, Form, Modal} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {addTest} from '../../store/slice'

export const CreateTest = () => {
  const [quetion, setQuetion] = useState('')
  const [correct, setCorrect] = useState('')
  const [variants, setVariants] = useState(['', '', '', ''])
  const [variant1, setVariant1] = useState('')
  const [variant2, setVariant2] = useState('')
  const [variant3, setVariant3] = useState('')
  const [variant4, setVariant4] = useState('')

  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const setTest = () => {
    dispatch(
      addTest({
        quetion,
        variants: [variant1, variant2, variant3, variant4],
        correct,
        id: Date.now(),
      }),
    )
  }

  return (
    <>
      <Button
        style={{margin: '20px'}}
        variant="primary"
        onClick={() => setShow(true)}
      >
        Add test
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add test</Modal.Title>
        </Modal.Header>
        <Form>
          <div style={{margin: '20px'}}>
            <h4>Question: </h4>
            <Form.Control
              onChange={(e) => setQuetion(e.target.value)}
              style={{maxWidth: '300px'}}
            />
            <h4>Variants</h4>
            <Form.Control
              onChange={(e) => setVariant1(e.target.value)}
              style={{maxWidth: '300px'}}
            />
            <Form.Control
              onChange={(e) => setVariant2(e.target.value)}
              style={{maxWidth: '300px'}}
            />
            <Form.Control
              onChange={(e) => setVariant3(e.target.value)}
              style={{maxWidth: '300px'}}
            />
            <Form.Control
              onChange={(e) => setVariant4(e.target.value)}
              style={{maxWidth: '300px'}}
            />

            <h4>Correct answer</h4>
            <Form.Select onChange={(e) => setCorrect(e.target.value)}>
              <option onClick={() => setCorrect(variant1)}>{variant1}</option>
              <option onClick={() => setCorrect(variant2)}>{variant2}</option>
              <option onClick={() => setCorrect(variant3)}>{variant3}</option>
              <option onClick={() => setCorrect(variant4)}>{variant4}</option>
            </Form.Select>
          </div>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={setTest}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
