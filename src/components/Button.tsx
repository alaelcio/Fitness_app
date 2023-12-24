import { Button as ButtonNativaBase,IButtonProps } from "native-base";

interface Props extends IButtonProps {
    title:string;
    type: 'PRIMARY' |'SECONDARY';
}

export function Button({title,type = 'PRIMARY', ...rest}:Props){
    return(
        <ButtonNativaBase
        w='full'
        h={50}
        rounded="sm"
        size="md"
        textTransform="uppercase"
        bg={type === 'SECONDARY' ? 'red.600' : 'yellow.700'}
        _pressed={{
            bg: type === 'SECONDARY' ? 'red.500' : 'yellow.700'
        }}
        {...rest}>

           {title}

           
        </ButtonNativaBase>
    )
}