import { yupToFormErrors } from "formik";
import * as Yup from "yup";

export function initialValues() {
    return {
        email: "",
        password: "",
    }
}

export function validationSchema(){
    return Yup.object({
        email: Yup.string()
            .email("El formato no es válido")
            .required("El correo es obligatorio"),
        password: Yup.string()
            .required("La contraseña es obligatoria")
            .min(6, "La contraseña debe tener 6 caracteres"),
    })
}