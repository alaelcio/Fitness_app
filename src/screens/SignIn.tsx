import { Center, Text } from "native-base";
import { Button } from "../components/Button";






export function SignIn(){

    return(
        <Center flex={1} p={4} >
            <Button
             title="ENTRAR COM GOOGLE"
             type="SECONDARY"
            />
            <Text color="white" textAlign="center" mt={4}>
                Não utilizamos nenhum nformação além{'\n'} doseu 
                e-mail para criação de sua conta.
            </Text>
        </Center>
    )
}