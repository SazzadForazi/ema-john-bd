import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'
const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth()
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />


                <input defaultValue={user.email} {...register("email", { required: true })} />
                <input placeholder='Address' defaultValue="test" {...register("address")} />
                <input placeholder='Phone Number' defaultValue="test" {...register("phon")} />
                <input placeholder="City" defaultValue="test" {...register("city")} />

                {errors.email && <span className="error">This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;