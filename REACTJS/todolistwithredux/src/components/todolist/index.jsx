import { Stack, useToast, VStack } from '@chakra-ui/react';
import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodoACtion } from '../../redux/actions/todoAction';
import { todoReminingSelector } from '../../redux/selectorState/selector';
import { alertLog } from '../../util/log';
import Todo from '../todo';

export default function TodoList() {
    const [todoName, setTodoName] = useState('')
    const [vip, setVip] = useState('Medium')
    const toast = useToast()
    const todoList = useSelector(todoReminingSelector).map((todo, index) =>
      <Todo 
        id={todo.id}
        key={index} 
        name={todo.name} 
        priority={todo.priority} 
        completed={todo.completed}
      />
    )

    const dispatch = useDispatch()

    const handleAddButtonClick = () => {
      todoName.trim().length === 0 ? alert(alertLog('Nhập dataName')) :
      dispatch(addTodoACtion({
          id: uuidv4(),
          name: todoName,
          priority: vip,
          completed: false
      }))
      toast({
        title: 'Bạn đã thêm dữ liệu thành công!',
        description: "Hãy tắt thông báo nếu thấy phiền...",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })

      setTodoName('')
    }

  return (
    <VStack w='100%'>
      <Stack w='50%'>
        <Row style={{ height: 'calc(100% - 40px)' }}>
          <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
            {todoList.length === 0 ? "Data Loading, Please add data...": todoList}
          </Col>
          <Col span={24}>
            <Input.Group style={{ display: 'flex' }} compact>
              <Input 
                value={todoName} 
                onChange={e => setTodoName(e.target.value)} 
              />
              <Select 
                defaultValue='Medium' 
                value={vip} 
                onChange={value => setVip(value)} 
              >
                <Select.Option value='High' label='High'>
                  <Tag color='violet'>High</Tag>
                </Select.Option>
                <Select.Option value='Medium' label='Medium'>
                  <Tag color='gold'>Medium</Tag>
                </Select.Option>
                <Select.Option value='Low' label='Low'>
                  <Tag color='cyan'>Low</Tag>
                </Select.Option>
              </Select>
              <Button type='primary' onClick={handleAddButtonClick}>
                Add
              </Button>
            </Input.Group>
          </Col>
        </Row>
      </Stack>
    </VStack>
  );
}