import { createContext, useContext, useState, type Dispatch, type FC, type ReactNode, type SetStateAction } from "react";

type UserDataContextType = {
    name: string;
    height: number;
    age: number;
    dailyCalorieIntake: number;
    avgWorkoutDuration: number; 
    setHeight: Dispatch<SetStateAction<number>>;
    setName: Dispatch<SetStateAction<string>>;
    setAge: Dispatch<SetStateAction<number>>;
    setDailyCalorieIntake: Dispatch<SetStateAction<number>>;
    setAvgWorkoutDuration: Dispatch<SetStateAction<number>>;
    resetUserData: () => void;
};

export const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

export const UserDataProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [name, setName] = useState<string>("");
    const [height, setHeight] = useState<number>(0);
    const [age, setAge] = useState<number>(0);
    const [dailyCalorieIntake, setDailyCalorieIntake] = useState<number>(0);
    const [avgWorkoutDuration, setAvgWorkoutDuration] = useState<number>(0);

    const resetUserData = () => {
        setName("");
        setHeight(0);
        setAge(0);
        setDailyCalorieIntake(0);
        setAvgWorkoutDuration(0);
    };

    return (
        <UserDataContext.Provider value={{ name, height, age, dailyCalorieIntake, avgWorkoutDuration, setHeight, setName, setAge, setDailyCalorieIntake, setAvgWorkoutDuration, resetUserData }}>
            {children}
        </UserDataContext.Provider>
    );
}

export const useUserData = () => {
    const context = useContext(UserDataContext);
    if (!context) {
        throw new Error("useUserData must be used within a UserDataProvider");
    }
    return context;
}