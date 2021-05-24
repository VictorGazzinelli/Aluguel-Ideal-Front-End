import { useEffect } from 'react';
import { useBoolean } from 'react-hanger';

const useKeyPress = (targetKey: string) => {
    const keyPressed = useBoolean(false);

    function downHandler({ key }:any) {
        if (key === targetKey) {
            keyPressed.setTrue();
        }
    }

    const upHandler = ({ key }:any) => {
        if (key === targetKey) {
            keyPressed.setFalse();
        }
    };

    const onComponentMount = () => {
        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);
    };
    useEffect(onComponentMount, []);

    const onComponentUnmount = () => () => {
        window.removeEventListener('keydown', downHandler);
        window.removeEventListener('keyup', upHandler);
    };
    useEffect(onComponentUnmount, []);

    return keyPressed.value;
};

export default useKeyPress;
