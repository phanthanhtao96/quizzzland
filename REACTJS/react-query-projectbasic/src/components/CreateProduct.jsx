import { Button, FormControl, FormLabel, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { useMutation } from 'react-query';
import { createProduct } from '../api/products';


function CreateProduct() {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [desc, setDesc] = useState();
  const [image, setImage] = useState();
  const [category, setCatefory] = useState();

  const { mutate: addProduct } = useMutation(createProduct)
 
  const handleSubmitProduct = () => {
    const pro = {id: Math.random(),title, price, desc, image, category}
    console.log(pro)
    addProduct(pro)
  }

  return (
    <VStack w='50%' m='auto'>
      <Heading size='md' my='10px'>Nhập thông tin sản phẩm</Heading>
      <FormControl>
        <FormLabel htmlFor='title'>Tên Sản Phẩm</FormLabel>
        <Input id='title' type='text' value={title} onChange={e => setTitle(e.target.value)}/>
        <FormLabel htmlFor='price' mt='10px'>Giá Sản Phẩm</FormLabel>
        <Input id='price' type='text' value={price} onChange={e => setPrice(e.target.value)}/>
        <FormLabel htmlFor='description' mt='10px'>Mô Tả Sản Phẩm</FormLabel>
        <Input id='description' type='text' value={desc} onChange={e => setDesc(e.target.value)}/>
        <FormLabel htmlFor='image' mt='10px'>Ảnh Sản Phẩm</FormLabel>
        <Input id='image' type='text' value={image} onChange={e => setImage(e.target.value)}/>
        <FormLabel htmlFor='category' mt='10px'>Danh mục sản phẩm</FormLabel>
        <Input id='category' type='text' value={category} onChange={e => setCatefory(e.target.value)}/>
      </FormControl>
      <Button leftIcon={<AiOutlineAppstoreAdd />} colorScheme='pink' variant='solid' onClick={handleSubmitProduct}>
        Thêm Sản Phẩm
      </Button>
    </VStack>
  )
}

export default CreateProduct