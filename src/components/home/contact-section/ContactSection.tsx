import React, {useRef} from 'react';
import {FormHelperText, Grid, OutlinedInput, Stack} from "@mui/material";
import './contact-section.css'
import * as yup from "yup";
import {useFormik} from "formik";

const ContactSection = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleOnAttachClick = () => {
        if (inputRef?.current) {
            inputRef.current.click();
        }
    }

    const validationSchema = yup.object({
        name: yup.string().required("Name is required"),
        email: yup.string().email('Enter a valid email').required("Email is required"),
        message: yup.string().required("Message is required"),
        file: yup.mixed().required("File is required")
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
            file: null
        },
        validationSchema: validationSchema,
        onSubmit: async (values: any) => {
            console.log(values)
        },
    });

    return (
        <Grid container className='contact-section' justifyContent='center'>
            <Grid container justifyContent='center'>
                <div className='contact-section-header'>contact with us</div>
            </Grid>
            <Grid item xs={12}>
                <form onSubmit={formik.handleSubmit} className='contact-form'>
                    <Grid container spacing={4} justifyContent="space-between" className='form-input-control' mb={4}>
                        <Grid item xs={6}>
                            <Stack spacing={1}>
                                <OutlinedInput
                                    id="name"
                                    type="text"
                                    value={formik.values.name}
                                    name="name"
                                    onChange={formik.handleChange}
                                    placeholder="Name"
                                    fullWidth
                                    size='medium'
                                    className='form-input'
                                    error={Boolean(formik.touched.name && formik.errors.name)}
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <FormHelperText error id="helper-text-name">
                                        {formik.errors.name}
                                    </FormHelperText>
                                )}
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack spacing={1}>
                                <OutlinedInput
                                    id="email"
                                    type="text"
                                    value={formik.values.email}
                                    name="email"
                                    onChange={formik.handleChange}
                                    placeholder="Email Address"
                                    fullWidth
                                    size='medium'
                                    className='form-input'
                                    error={Boolean(formik.touched.email && formik.errors.email)}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <FormHelperText error id="helper-text-email">
                                        {formik.errors.email}
                                    </FormHelperText>
                                )}
                            </Stack>
                        </Grid>
                    </Grid>
                    <Stack spacing={1}>
                        <OutlinedInput
                            id="message"
                            type="text"
                            multiline
                            rows={6}
                            value={formik.values.message}
                            name="message"
                            onChange={formik.handleChange}
                            placeholder="Your Message"
                            fullWidth
                            size='medium'
                            className='form-input-message'
                            error={Boolean(formik.touched.message && formik.errors.message)}
                        />
                        {formik.touched.message && formik.errors.message && (
                            <FormHelperText error id="helper-text-message">
                                {formik.errors.message}
                            </FormHelperText>
                        )}
                    </Stack>
                    <Grid container justifyContent="space-between" mt={4}>
                        <Grid container justifyContent="space-between" mt={4}>
                        <span className='attach-image-cover' onClick={handleOnAttachClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M18.375 12.7393L10.682 20.4323C9.83811 21.2762 8.69351 21.7503 7.50003 21.7503C6.30655 21.7503 5.16195 21.2762 4.31803 20.4323C3.47411 19.5883 3 18.4437 3 17.2503C3 16.0568 3.47411 14.9122 4.31803 14.0683L15.258 3.12825C15.5367 2.84972 15.8675 2.6288 16.2315 2.47811C16.5956 2.32742 16.9857 2.24991 17.3797 2.25C17.7737 2.25009 18.1639 2.32779 18.5278 2.47865C18.8918 2.62951 19.2225 2.85059 19.501 3.12925C19.7796 3.40792 20.0005 3.73872 20.1512 4.10276C20.3019 4.4668 20.3794 4.85696 20.3793 5.25096C20.3792 5.64496 20.3015 6.03508 20.1506 6.39906C19.9998 6.76303 19.7787 7.09372 19.5 7.37225L8.55203 18.3203C8.26801 18.5925 7.88839 18.7413 7.49497 18.7363C7.10156 18.7313 6.72585 18.572 6.44883 18.2926C6.1718 18.0132 6.01564 17.6362 6.01399 17.2427C6.01234 16.8493 6.16535 16.4709 6.44003 16.1893L14.25 8.37925M8.56103 18.3103L8.55103 18.3203"
                                    stroke="black" strokeWidth="2"/>
                            </svg>
                            <span className='attach-image'>Attach images</span>
                        </span>
                            <button className='send-message-button' type='submit'>
                                Send Message
                            </button>
                        </Grid>
                        <Stack spacing={1}>
                            <input
                                style={{display: "none"}}
                                ref={inputRef}
                                id="file"
                                type="file"
                                name="file"
                                accept="image/gif, image/jpeg, image/png"
                                onChange={(event) => {
                                    if (event) {
                                        formik.setFieldValue(
                                            'file',
                                            event
                                        )
                                    } else {
                                        formik.setErrors({file: "File is required"})
                                    }
                                }}
                            />
                            {formik.touched.file && formik.errors.file && (
                                <FormHelperText error id="helper-text-file">
                                    {formik.errors.file}
                                </FormHelperText>
                            )}
                        </Stack>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};

export default ContactSection;