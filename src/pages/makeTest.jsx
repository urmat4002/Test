import {Button, Card} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {CreateTest} from '../Components/Modal/createTest'
import {deleteTest} from '../store/slice'

export const MakeTest = () => {
  const dispatch = useDispatch()
  const test = useSelector((state) => state.test.test)
  const removeTest = (item) => {
    dispatch(deleteTest(item))
  }
  return (
    <div>
      <CreateTest />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        {test.map(
          (item, index) =>
            item && (
              <Card
                style={{width: '300px', padding: '10px', margin: '10px'}}
                key={index}
              >
                <h3>{index + 1}</h3>
                <Card.Title>{item.quetion}</Card.Title>
                <Card.Body>
                  {item.variants.map((item, index) => (
                    <h5 key={index}>
                      {index + 1}. {item}
                    </h5>
                  ))}
                  <h6>Correct answer: {item.correct}</h6>
                </Card.Body>

                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                  <Button onClick={() => removeTest(item.id)}>Delete</Button>
                </div>
              </Card>
            ),
        )}
      </div>
    </div>
  )
}
