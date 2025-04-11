import React from 'react'
import css from './editQuizModal.module.css'
import * as yup from "yup";
import { Form, InputGroup, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  title: yup.string().min(3, "Мінімум 3 символів").required("Обов'язкове поле"),
}).required();

const EditQuizForm = () => {
    const loading = false

  const { register, handleSubmit, watch, formState: { isValid, errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange', 
    defaultValues: {
      title: '', 
    }
  });

  const titleValue = watch('title'); 
  console.log(titleValue);


  const onSubmit = (data) => console.log(data);
  return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Form.Group className="mb-1 w-100">
                  <InputGroup className={css.formInputGroup}>
                    <InputGroup.Text
                        className={css.formInput}
                    >                  
                             
                    </InputGroup.Text>
                    <Form.Control
                      {...register('title')}
                      placeholder={`Type your title`}
                      type='text'
                      isInvalid={!!errors.title}
                      className={css.formInput}
                    />
                    <Form.Control.Feedback 
                    className='fw-semibold text-center'
                    type="invalid">
                      {errors.title?.message}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Button 
                variant='success' 
                disabled={!isValid || loading}
                type='submit' 
                className={css.editBtn}>
                    Edit
                </Button>
  </form>
  )
}

export default EditQuizForm