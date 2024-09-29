import { DEPARTMENT, STATE, userSchema } from '../utils/userSchema';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarDays } from 'lucide-react';
import Select from 'react-dropdown-select';
import EmployeeService from '../services/employee-service';
import { useState } from 'react';

function Form({ openModal }) {
    const [formKey, setFormKey] = useState(0);

    const {
        register,
        control,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(userSchema),
        mode: 'onChange',
    });

    const onSubmit = (data) => {
        //openModal();
        console.log({ data });
        EmployeeService.add(data);
    };

    const resetForm = () => {
        reset();
        setFormKey((prevKey) => prevKey + 1);
    };

    return (
        <form key={formKey} className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="flex gap-4">
                <div className="space-y-2 w-2/5">
                    <label
                        className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                            errors.firstname ? 'text-destructive' : ''
                        }`}
                        htmlFor="firstname"
                    >
                        First Name
                    </label>
                    <input
                        className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="firstname"
                        name="firstname"
                        {...register('firstname')}
                        placeholder="Example: John"
                    />
                    {errors.firstname && <p className="text-destructive">{errors.firstname.message}</p>}
                </div>
                <div className="space-y-2 w-2/5">
                    <label
                        className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                            errors.lastname ? 'text-destructive' : ''
                        }`}
                        htmlFor="lastname"
                    >
                        Last Name
                    </label>
                    <input
                        className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="lastname"
                        name="lastname"
                        {...register('lastname')}
                        placeholder="Example: Doe"
                    />
                    {errors.lastname && <p className="text-destructive">{errors.lastname.message}</p>}
                </div>
                <div className="space-y-2 w-1/5">
                    <label
                        className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                            errors.dateOfBirth ? 'text-destructive' : ''
                        }`}
                        htmlFor="dateOfBirth"
                    >
                        Date of Birth
                    </label>
                    <div className="relative flex items-center">
                        <Controller
                            control={control}
                            id="dateOfBirth"
                            name="dateOfBirth"
                            className="w-full"
                            render={({ field }) => (
                                <DatePicker
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    className="flex flex-col justify-center items-stretch h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                                    placeholderText="Select date"
                                    onChange={(date) => field.onChange(date)}
                                    selected={field.value}
                                    wrapperClassName="datePicker"
                                    dateFormat="dd-MM-yyyy"
                                />
                            )}
                        />
                        <CalendarDays className="absolute right-3 text-muted pointer-events-none" />
                    </div>
                    {errors.dateOfBirth && <p className="text-destructive">{errors.dateOfBirth.message}</p>}
                </div>
            </fieldset>
            <hr className="h-px my-1 border-border" />
            <fieldset className="flex gap-4">
                <div className="space-y-2 w-4/5">
                    <label
                        className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                            errors.street ? 'text-destructive' : ''
                        }`}
                        htmlFor="street"
                    >
                        Street
                    </label>
                    <input
                        className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="street"
                        name="street"
                        {...register('street')}
                        placeholder="Example: 123 Main St"
                    />
                    {errors.street && <p className="text-destructive">{errors.street.message}</p>}
                </div>
                <div className="space-y-2 w-1/5">
                    <label
                        className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                            errors.zipCode ? 'text-destructive' : ''
                        }`}
                        htmlFor="zipCode"
                    >
                        Zip code
                    </label>
                    <input
                        className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        {...register('zipCode')}
                        placeholder="XXXXX"
                    />
                    {errors.zipCode && <p className="text-destructive">{errors.zipCode.message}</p>}
                </div>
            </fieldset>
            <fieldset className="flex gap-4">
                <div className="space-y-2 w-1/2">
                    <span
                        className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                            errors.state ? 'text-destructive' : ''
                        }`}
                    >
                        State
                    </span>
                    <Controller
                        name="state"
                        id="state"
                        control={control}
                        render={({ field }) => (
                            <Select
                                options={STATE}
                                searchable={true}
                                searchBy="name"
                                labelField="name"
                                valueField="id"
                                className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 custom-dropdown"
                                onChange={(selected) => {
                                    field.onChange(selected[0]?.name);
                                }}
                            />
                        )}
                    />
                    {errors.state && <p className="text-destructive">{errors.state.message}</p>}
                </div>
                <div className="space-y-2 w-1/2">
                    <label
                        className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                            errors.city ? 'text-destructive' : ''
                        }`}
                        htmlFor="city"
                    >
                        City
                    </label>
                    <input
                        className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="city"
                        name="city"
                        {...register('city')}
                        placeholder="Example: San Francisco"
                    />
                    {errors.city && <p className="text-destructive">{errors.city.message}</p>}
                </div>
            </fieldset>
            <hr className="h-px my-1 border-border" />
            <fieldset className="flex gap-4">
                <div className="space-y-2 w-1/2">
                    <span
                        className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                            errors.department ? 'text-destructive' : ''
                        }`}
                    >
                        Department
                    </span>
                    <Controller
                        name="department"
                        control={control}
                        render={({ field }) => (
                            <Select
                                id="department"
                                options={DEPARTMENT}
                                searchable={true}
                                searchBy="name"
                                labelField="name"
                                valueField="id"
                                className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 custom-dropdown"
                                onChange={(selected) => {
                                    field.onChange(selected[0]?.name);
                                }}
                            />
                        )}
                    />
                    {errors.department && <p className="text-destructive">{errors.department.message}</p>}
                </div>
                <div className="space-y-2 w-1/2">
                    <label
                        className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                            errors.startDate ? 'text-destructive' : ''
                        }`}
                        htmlFor="startDate"
                    >
                        Start Date
                    </label>
                    <div className="relative flex items-center">
                        <Controller
                            control={control}
                            name="startDate"
                            id="startDate"
                            className="w-full"
                            render={({ field }) => (
                                <DatePicker
                                    name="startDate"
                                    id="startDate"
                                    className="flex flex-col justify-center items-stretch h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                                    placeholderText="Select date"
                                    onChange={(date) => field.onChange(date)}
                                    selected={field.value}
                                    wrapperClassName="datePicker"
                                    dateFormat="dd-MM-yyyy"
                                />
                            )}
                        />
                        <CalendarDays className="absolute right-3 text-muted pointer-events-none" />
                    </div>
                    {errors.startDate && <p className="text-destructive">{errors.startDate.message}</p>}
                </div>
            </fieldset>
            <div className="flex gap-4 justify-end mt-2">
                <button
                    type="reset"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow hover:bg-secondary/90 h-9 px-4 py-2"
                    onClick={resetForm}
                >
                    Reset
                </button>
                <button
                    type="submit"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-1/7"
                >
                    Save
                </button>
            </div>
        </form>
    );
}

export default Form;
