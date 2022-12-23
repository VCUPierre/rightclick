import { createUseStyles } from 'react-jss';

const useCustomFont = createUseStyles({
    customFont: {
        'font-family': (props) => [props.customFont, '!important'],
    },
});

export default useCustomFont;
