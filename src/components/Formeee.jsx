import { useState } from 'react';
import { DEPARTMENT, STATE } from '../utils/userSchema';

function Form() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        birthDate: '',
        startDate: '',
        street: '',
        city: '',
        state: STATE[0],
        zipCode: '',
        department: DEPARTMENT[0],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ form });
        //EmployeeService.add(form);
        //toggleModal();
    };
    const handleFieldChange = (e) => {
        setForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const handleReset = () => {
        setForm({
            firstName: '',
            lastName: '',
            birthDate: '',
            startDate: '',
            street: '',
            city: '',
            state: STATE[0],
            zipCode: '',
            department: DEPARTMENT[0],
        });
    };
    return (
        <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
            <fieldset className="flex gap-4">
                <div className="space-y-2 w-2/5">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="firstName">
                        First Name
                    </label>
                    <input
                        className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleFieldChange}
                        placeholder="Example: John"
                    />
                </div>
                <div className="space-y-2 w-2/5">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                        className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleFieldChange}
                        placeholder="Example: Doe"
                    />
                </div>
                <div className="space-y-2 w-1/5">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="birthDate">
                        Date of Birth
                    </label>
                    <input
                        className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        type="date"
                        id="birthDate"
                        name="birthDate"
                        value={form.birthDate}
                        onChange={handleFieldChange}
                        placeholder="YYYY-MM-DD"
                    />
                </div>
            </fieldset>
            <hr className="h-px my-1 border-border" />
            <fieldset className="flex gap-4">
                <div className="space-y-2 w-4/5">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="street">
                        Street
                    </label>
                    <input
                        className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="street"
                        name="street"
                        value={form.street}
                        onChange={handleFieldChange}
                        placeholder="Example: 123 Main St"
                    />
                </div>
                <div className="space-y-2 w-1/5">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="zipCode">
                        Zip code
                    </label>
                    <input
                        className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={form.zipCode}
                        onChange={handleFieldChange}
                        placeholder="XXXXX"
                    />
                </div>
            </fieldset>
            <fieldset className="flex gap-4">
                <div className="space-y-2 w-1/2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="state">
                        State
                    </label>
                    <input
                        className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="state"
                        name="state"
                        value={form.state}
                        onChange={handleFieldChange}
                        placeholder="Example: CA"
                    />
                </div>
                <div className="space-y-2 w-1/2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="city">
                        City
                    </label>
                    <input
                        className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="city"
                        name="city"
                        value={form.city}
                        onChange={handleFieldChange}
                        placeholder="Example: San Francisco"
                    />
                </div>
            </fieldset>
            <hr className="h-px my-1 border-border" />{' '}
            <fieldset className="flex gap-4">
                <div className="space-y-2 w-1/2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="department">
                        Department
                    </label>
                    <input
                        className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="department"
                        name="department"
                        value={form.department}
                        onChange={handleFieldChange}
                        placeholder="Example: Sales"
                    />
                </div>
                <div className="space-y-2 w-1/2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="startDate">
                        Start Date
                    </label>
                    <input
                        className="flex flex-col justify-center items-stretch h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={form.startDate}
                        onChange={handleFieldChange}
                        placeholder="YYYY-MM-DD"
                    />
                </div>
            </fieldset>
            <div className="flex gap-4 justify-end mt-2">
                <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow hover:bg-secondary/90 h-9 px-4 py-2"
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
