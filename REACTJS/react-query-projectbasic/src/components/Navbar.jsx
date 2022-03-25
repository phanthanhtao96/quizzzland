import { 
    Avatar, 
    AvatarBadge, 
    Box, 
    Button, 
    Flex, 
    Heading, 
    HStack, 
    Spacer 
} from "@chakra-ui/react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


function Navbar() {
    const {pathname} = useLocation();

    const checkLocation = () => {
        if(pathname === '/create') {
            return(
                <Link to='/'>
                    <Button rightIcon={<MdProductionQuantityLimits />} colorScheme='violet' variant='outline'>
                        Xem Sản Phẩm
                    </Button>
                </Link>
            )
        }
        else {
            return(
                <Link to='/create'>
                    <Button rightIcon={<AiOutlineAppstoreAdd />} colorScheme='red' variant='outline'>
                        Thêm Sản Phẩm
                    </Button>
                </Link>
            )
        }
    }

  return (
    <Box bg='teal.400'>
        <Flex p={3} align='center' w='70%' m='auto'>
            <HStack>
                <Link to='/'>
                    <Avatar
                        name="react-query"
                        size='lg'
                        src="https://react-query.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg"
                    >
                        <AvatarBadge borderColor='green.200' bg='green.500' boxSize='1.25em'/>
                    </Avatar>
                </Link>
                <Heading size='md' color='red.500'>
                    React Query Basic
                </Heading>
            </HStack>

            <Spacer/>

            {checkLocation()}

        </Flex>
    </Box>
  )
}

export default Navbar