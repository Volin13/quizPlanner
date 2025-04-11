import React from 'react'
import css from './Auth.module.css'
import { Form, InputGroup } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email("Некоректний email").required("Обов'язкове поле"),
  password: yup.string().min(6, "Мінімум 6 символів").required("Обов'язкове поле"),
}).required();

const AuthForm = ({ heading, fields, submitLabel, switched, switchedClass, regularClass }) => {
    
const loading = false


  const { register, handleSubmit, formState: { isValid, errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className={`${css.formThumb} ${regularClass} ${switched ? switchedClass : ""}`}>
      <h3 className={css.formTitle}>{heading}</h3>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <ul className="d-flex flex-column align-items-center w-75">
          {fields.map((field) => (
            <li key={field} className="w-100">
              <Form.Group className="mb-1 w-100">
                <InputGroup className={css.formInputGroup}>
                  <InputGroup.Text
                      className={css.formInput}
                  >                  
                  {field}                  
                  </InputGroup.Text>
                  <Form.Control
                    {...register(field)}
                    placeholder={`Type your ${field}`}
                    type={field}
                    isInvalid={!!errors[field]}
                    className={css.formInput}
                  />
                  <Form.Control.Feedback 
                  className='fw-semibold text-center'
                  type="invalid">
                    {errors[field]?.message}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </li>
          ))}
        </ul>
        <button disabled={!isValid || loading} type="submit" className={css.switchBtn}>
          {submitLabel}
        </button>
      </form>
    </div>
  );
}

export default AuthForm;
