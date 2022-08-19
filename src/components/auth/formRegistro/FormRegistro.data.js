import { yupToFormErrors } from "formik";
import * as Yup from "yup";

export function initialValues() {
    return {
        email: "",
        password: "",
        repeatPassword: "",
    }
}

export function validationSchema(){
    return Yup.object({
        email: Yup.string()
            .email("El formato no es válido")
            .required("El correo es obligatorio"),
        password: Yup.string()
            .required("La contraseña es obligatoria"),
        repeatPassword: Yup.string()
            .required("La confirmación es obligatoria")
            .oneOf([Yup.ref("password")], "Las contraseñas no son iguales"),
    })
}