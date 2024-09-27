import { z } from 'zod';
import { statesList } from '../data/states';
import { departmentList } from '../data/departments';

export const STATE = statesList;
export const DEPARTMENT = departmentList;

export const userSchema = z.object({
    firstname: z
        .string({ required_error: 'First name is required' })
        .min(2, 'First name must contain at least 2 characters')
        .max(50, 'First name cannot exceed 50 characters'),
    lastname: z
        .string({ required_error: 'Last name is required' })
        .min(2, 'Last name must contain at least 2 characters')
        .max(50, 'Last name cannot exceed 50 characters'),
    dateOfBirth: z
        .date({ required_error: 'Date of birth is required', invalid_type_error: 'Invalid date format' })
        .min(new Date(1900, 0, 1), 'Date of birth must be after 1900')
        .max(new Date(), 'Date of birth cannot be in the future'),
    startDate: z
        .date({ required_error: 'Start date is required', invalid_type_error: 'Invalid date format' })
        .min(new Date(2005, 0, 1), 'Start date must be after 2005')
        .max(new Date(), 'Start date cannot be in the future'),
    street: z
        .string({ required_error: 'Street address is required' })
        .min(5, 'Street address must contain at least 5 characters')
        .max(100, 'Street address cannot exceed 100 characters'),
    city: z
        .string({ required_error: 'City is required' })
        .min(2, 'City name must contain at least 2 characters')
        .max(50, 'City name cannot exceed 50 characters'),
    state: z.enum(
        STATE.map((state) => state.name),
        {
            required_error: 'State is required',
            invalid_type_error: 'Please select a valid state',
        }
    ),
    zipCode: z
        .string({ required_error: 'Zip code is required' })
        .min(5, 'Zip code must contain at least 5 characters')
        .max(10, 'Zip code cannot exceed 10 characters'),
    department: z.enum(
        DEPARTMENT.map((department) => department.name),
        {
            required_error: 'Department is required',
            invalid_type_error: 'Please select a valid department',
        }
    ),
});
