import { Row, Tag, Checkbox, Col, Button } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../../redux/actions/todoAction';
import { FaTrash } from "react-icons/fa";


const priorityColorMapping = {
  High: 'violet',
  Medium: 'gold',
  Low: 'cyan',
};

export default function Todo({ id, name, priority, completed }) {
  const [checked, setChecked] = useState(completed)

  const dispatch = useDispatch()

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(toggleTodo(id))
  };

  const handleRemoveTodo = () => {
    dispatch(removeTodo(id))
  }

  return (
    <Row
      justify='space-between'
      align='middle'
    >
      <Col style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}>
        <Checkbox 
          checked={checked} 
          onChange={toggleCheckbox}
        >
          {name}
        </Checkbox>
        <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
        </Tag>
      </Col>
      <Col>
      <Button type='success' onClick={handleRemoveTodo}>
        <FaTrash />
      </Button>
      </Col>
    </Row>
  );
}