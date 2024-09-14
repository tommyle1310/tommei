export type Theme = string

// Define the type for state management
export type StateSetter<T> = {
    value: T;
    setValue: React.Dispatch<React.SetStateAction<T>>;
};

