import React from 'react';
import { 
    Alert, 
    AlertDescription, 
    AlertIcon, 
    AlertTitle, 
    Center, 
    Spinner, 
    Wrap,
} from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { getAllProducts } from '../api/products';
import Product from './Product';

function Products() {

    const { data, isLoading, error, isError  } = useQuery('products',getAllProducts,
    )
    console.log(data)

    if (isLoading) {
        return (
            <Center mt='100px'>
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
            </Center>
        )
    }

    if (isError) {
        return (
            <Alert
                status='error'
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                height='300px'
                mt='30px'
            >
                <AlertIcon boxSize='40px' mr={0} />
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                    Application Call API Error !
                </AlertTitle>
                <AlertDescription maxWidth='sm'>
                    {error.message}
                </AlertDescription>
            </Alert>
        )
    }
    

    return (
        <Wrap w='70%' justify='center' m='auto' pt='50px' spacing='40px'>
            {
                data?.map(product => <Product key={product.id} product={product}/>)
            }
        </Wrap>
    )


}

export default Products;