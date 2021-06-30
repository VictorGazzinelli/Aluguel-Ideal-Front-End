import { Button, ButtonProps } from "@chakra-ui/react"

export const SubmitButton: React.FC<ButtonProps> = ({children, ...rest}) => (
    <Button
        type='submit'
        size='lg'
        colorScheme='linkedin'
        variant='solid'
        isFullWidth
        {...rest}
    >
        {children}
    </Button>
)