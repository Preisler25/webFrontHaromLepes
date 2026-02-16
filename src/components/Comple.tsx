import { Table } from "@mantine/core";
import { useUserData } from "../providers/UserDataProvider";

export default function Comple() {
    const { name, height, age, dailyCalorieIntake, avgWorkoutDuration } = useUserData();
    return (
        <Table>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Name</Table.Th>
                    <Table.Th>Height</Table.Th>
                    <Table.Th>Age</Table.Th>
                    <Table.Th>Daily Calorie Intake</Table.Th>
                    <Table.Th>Average Workout Duration</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                <Table.Tr key={name}>
                    <Table.Td>{name}</Table.Td>
                    <Table.Td>{height}</Table.Td>
                    <Table.Td>{age}</Table.Td>
                    <Table.Td>{dailyCalorieIntake}</Table.Td>
                    <Table.Td>{avgWorkoutDuration}</Table.Td>
                </Table.Tr>
            </Table.Tbody>
        </Table>
    );
}