import React from 'react';
import { Link } from 'react-router-dom';
import {
    Badge,
    Box,
    Button,
    Image, 
    WrapItem
} from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';


function Product({ product }) {

    return (
        <WrapItem>
            <Box overflow='hidden' w='300px'> 
                <Link to={`/products/${product.id}`}>
                    <Image m='auto' pb='10px' src={product.image} alt={product.image} w='150px' h='200px'/>
                </Link>
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
                        {product.id} ID-Number &bull; {product.rating.count} Count
                    </Box>
                    </Box>

                    <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                    >
                    {product.title}
                    </Box>

                    <Box>
                    {product.price}$ &bull;
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
                            color={i < product.rating.rate ? 'teal.500' : 'gray.300'}
                        />
                    ))}
                    </Box>
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                        <Button 
                            colorScheme='red' 
                            size='xs' 
                            color='white'
                        >
                            Remove
                        </Button>
                    </Box>
                    </Box>
                </Box>
            </Box>
        </WrapItem>
    )
}

export default Product;