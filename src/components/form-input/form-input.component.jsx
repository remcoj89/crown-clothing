import {Group, Input, FormLabel} from './form-input.styles';

const FormInput = ({label, inputOptions }) => {
    return (
        <Group>
        <Input {...inputOptions} />
        {label && (
            <FormLabel shrink={inputOptions.value.length}>
                {label}
            </FormLabel>
        )}
        </Group>
    )
}

export default FormInput;
