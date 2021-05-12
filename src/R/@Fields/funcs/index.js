import * as Yup from "yup";

export default async function unFormValidator(
    formRef,
    { data, reset },
    yupSchema
) {
    try {
        formRef.current.setErrors({});
        const schema = Yup.object().shape(yupSchema);
        await schema.validate(data, { abortEarly: false });
        if (reset && typeof reset === "function") reset();
        return { data, success: true };
    } catch (error) {
        if (error instanceof Yup.ValidationError) {
            const message = {};
            error.inner.forEach(err => {
                message[err.path] = err.message;
            });
            await formRef?.current?.setErrors(message);
            return { error, success: false };
        }
    }
}
