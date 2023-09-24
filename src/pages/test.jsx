import {useEffect} from 'react'
import {useState} from 'react'
import {Button, Card, Container, Form, ProgressBar} from 'react-bootstrap'
import {useSelector} from 'react-redux'

export const Test = () => {
  const [selected, setSelected] = useState(null)
  const [right, setRight] = useState(0)
  const [progress, setProgress] = useState(0)
  const [finish, setFinish] = useState(false)
  const test = useSelector((state) => state.test.test)
  const [current, setCurrent] = useState(0)
  const nextHandle = () => {
    if (selected === test[current].correct) setRight(right + 1)
    setSelected(null)
    if (current < test.length - 1) {
      setCurrent(current + 1)

      return
    }
    setProgress(100)
    setFinish(true)
  }
  const tryHandle = () => {
    setCurrent(0)
    setFinish(false)
    setRight(0)
  }

  useEffect(() => {
    setProgress((current * 100) / test.length)
  }, [current])

  return (
    <Container>
      {Boolean(test.length) ? (
        <Card
          style={{
            maxWidth: '400px',
            background: 'lightGrey',
            border: 0,
            padding: '20px',
            margin: '20px',
          }}
        >
          <ProgressBar style={{margin: '20px'}} now={progress} />
          <Card.Title>
            {finish ? 'You finished!!!' : test[current].quetion}
          </Card.Title>
          <Card.Body>
            <Form>
              {!finish &&
                test[current].variants.map(
                  (item, index) =>
                    item && (
                      <Form.Check
                        onClick={() => setSelected(item)}
                        key={index}
                        name="group1"
                        type="radio"
                        label={item}
                      />
                    ),
                )}
            </Form>
          </Card.Body>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            {finish ? (
              <Button onClick={tryHandle}>Try again</Button>
            ) : (
              <Button onClick={nextHandle}>Next</Button>
            )}
          </div>
          <Card.Text>
            Correct answer: {right} from {test.length}
          </Card.Text>
        </Card>
      ) : (
        <h1>No test</h1>
      )}
    </Container>
  )
}
