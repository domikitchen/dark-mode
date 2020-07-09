import { useLocalStorage } from './useLocalStorage';

const useDarkMode = (key) => {
    const [values, setValues] = useLocalStorage(key);

    const toggleMode = evt => {
        evt.preventDefault();
        
        if(values === true){
            setValues(false);
        }
        else {
            setValues(true);
        }
    };

    return [values, toggleMode];
};

export default useDarkMode;