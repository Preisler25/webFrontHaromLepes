import { Fieldset, NumberInput, TextInput } from "@mantine/core";
import { useUserData } from "../providers/UserDataProvider";

export default function Step1() {
    const {name, height, age, setName, setHeight, setAge} = useUserData();
    return (
        <Fieldset legend="Personal information">
            <TextInput label="Your name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
            <NumberInput label="Height" placeholder="Height" mt="md" value={height} onChange={(value) => setHeight(Number(value) || 0)} />
            <NumberInput label="Age" placeholder="Age" mt="md" value={age} onChange={(value) => setAge(Number(value) || 0)} />
        </Fieldset>
    );
}