import * as yup from "yup";

export const schemaLogin = yup.object().shape({
    Email: yup.string().email('Este campo não é um email valido').required('Este campo é obrigatorio'),
	Senha: yup.string().required('Este campo é obrigatorio'),
});