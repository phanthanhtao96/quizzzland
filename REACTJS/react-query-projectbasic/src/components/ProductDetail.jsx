import React from 'react';
import { Badge, Box, Button, Center, Image, Spinner } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { productDetail } from '../api/products';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function ProductDetail() {
    const {id} = useParams()
    const history = useHistory()
    const location = useLocation()
    console.log(location.pathname)

    const {data: detail, isLoading} = useQuery(['product', id], () => productDetail(id), {
        enabled: !!id,
    })


    if(isLoading){
        return (
            <Center mt='100px'>
              <Spinner color='red.500' />
            </Center>
        )
    }

    return (
        <Box w='70%' m='auto' mt='30px' p='50px'> 
                <Image sizes='500px' m='auto' pb='10px' src={detail.image} alt={detail.image}/>
                <Box p='6' borderWidth='1px' borderRadius='lg' bg='blackAlpha.300'>
                    <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                        New
                    </Badge>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        {detail.id} ID-Number &bull; {detail.rating.count} Count
                    </Box>
                    </Box>

                    <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                    >
                    {detail.title}
                    </Box>

                    <Box>
                    {detail.price}$ &bull;
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        as='span'
                    >
                        with 1-Quantity
                    </Box>
                    </Box>

                    <Box display='flex' mt='2' alignItems='center' justifyContent='space-between'>
                    <Box display='flex' mt='2' alignItems='center'>
                    {Array(5)
                        .fill('')
                        .map((_, i) => (
                        <AiFillStar
                            key={i}
                            color={i < detail.rating.rate ? 'teal.500' : 'gray.300'}
                        />
                    ))}
                    </Box>
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                        <Button 
                            colorScheme='red' 
                            size='xs' 
                            color='white'
                            mr='5px'
                        >
                            View on Detail
                        </Button>
                        <Button 
                            leftIcon={<BiArrowBack />}
                            colorScheme='green' 
                            size='xs' 
                            color='black'
                            onClick={() => history.push('/')}
                        >
                            Back Page
                        </Button>
                    </Box>
                    </Box>
                </Box>
            </Box>
    )
}

export default ProductDetail