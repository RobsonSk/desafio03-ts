import { Center, SimpleGrid, Text } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import CardInfo from "../components/CardInfo";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../components/AppContext";
import { api } from "../api";

interface UserData {
    name: string
    email: string
    password: string
}

const ContaInfo = () => {
    const [userData, setUserData] = useState<null | UserData>(null);
    const { isLoggedIn } = useContext(AppContext)

    const navigate = useNavigate()


    !isLoggedIn && navigate('/')


    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])


    return (
        <>
            <Center>
                <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                    <Text fontSize='3xl' fontWeight='bold'>
                        Informações da conta
                    </Text>
                    <CardInfo mainContent={`Usuário: ${userData?.name}`}
                        content={`Email: ${userData?.email} ` } />

                    <Link to='/conta/1'>
                        <Text fontSize='xl'>
                            Conta
                        </Text>
                    </Link>
                </SimpleGrid>
            </Center>

        </>
    )
}

export default ContaInfo
