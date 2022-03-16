import { 
  Stack, 
  VStack,
  Input, 
  InputGroup, 
  InputLeftElement,
} from '@chakra-ui/react';
import { Col, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { FaSearchengin } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { priorityFilterChange, searchFilterChange, statusFilterChange } from '../../redux/actions/filterAction';

export default function Filters() {
  const [searchText, setSearchText] = useState('')
  const [status, setStatus] = useState('')
  const [priority, setPriority] = useState([])

  const dispatch = useDispatch()

  //handle with onChange
  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value)
    console.log(e.target.value)
    dispatch(searchFilterChange(e.target.value))
  }

  const handleStatusChange = (e) => {
    setStatus(e.target.value)
    console.log(e.target.value)
    dispatch(statusFilterChange(e.target.value))
  }

  const handlePriorityChange = (value) => {
    setPriority(value)
    console.log(value)
    dispatch(priorityFilterChange(value))
  }

  return (
    <VStack spacing={5} w='100%' my='10'>
      <Stack w='50%'>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<FaSearchengin color='gray.300' />}
          />
          <Input
            value={searchText} 
            placeholder=' input search text...' 
            onChange={handleSearchTextChange}
          />
        </InputGroup>
      </Stack>
      
      <Stack w='50%'>
        <Col sm={24}>
          <Typography.Paragraph
            style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
          >
            Filter By Status
          </Typography.Paragraph>
          <Radio.Group value={status} onChange={handleStatusChange}>
            <Radio.Button value="All">All Data</Radio.Button>
            <Radio.Button value="Completed">Completed OK</Radio.Button>
            <Radio.Button value="Todo">TodoList +</Radio.Button>
          </Radio.Group>
        </Col>
        <Col sm={24}>
          <Typography.Paragraph
            style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
          >
            Filter By Priority
          </Typography.Paragraph>
          <Select
            value={priority}
            onChange={handlePriorityChange}
            mode='multiple'
            allowClear
            placeholder='Please select priority...'
            style={{ width: '100%' }}
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
        </Col>
      </Stack>
    </VStack>
  );
}