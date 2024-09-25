import { Box, Center, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import DButton from "../components/DButton";


const Home = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, isLoggedIn } = useContext(AppContext);
    const navigate = useNavigate();
  
    const handleSubmit = (event: any) => {
      event.preventDefault();
      login(email, password);
      console.log(email, password);
      navigate('/conta/1');
    };
    
    isLoggedIn && navigate('/conta/1')
  
  
    return (
        <Box padding="25px">
            <Card>
                <Center>
                    <h1>Faça o login</h1>
                </Center>
                <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <Input placeholder="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <Center>
                    <DButton
                        onClick={handleSubmit}
                    />
                </Center>
            </Card>
        </Box>
    );
}

export default Home;
