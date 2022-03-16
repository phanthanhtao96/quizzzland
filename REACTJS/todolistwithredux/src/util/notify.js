import { useToast } from "@chakra-ui/react"



export const Notify = (title, status) => {
    const toast = useToast()
    toast({
        title,
        description: "Hãy tắt thông báo nếu bạn thấy phiền...",
        status,
        duration: 3000,
        isClosable: true,
      })

}