import { Fieldset, Modal, Button, NumberInput, Center, Stack, Text } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { useUserData } from "../providers/UserDataProvider";

export default function Step2() {
    const [opened, { open, close }] = useDisclosure(false);
    const { dailyCalorieIntake, avgWorkoutDuration, setDailyCalorieIntake, setAvgWorkoutDuration } = useUserData();
    return (
        <>
            <Modal opened={opened} onClose={close} title="Lifestyle Information" size="auto" centered overlayProps={{ blur: 2 }} >
                <Fieldset legend="Lifestyle information">
                    <NumberInput label="Daily calorie intake" placeholder="Daily calorie intake" value={dailyCalorieIntake} onChange={(value) => setDailyCalorieIntake(Number(value) || 0)} />
                    <NumberInput label="Average workout duration" placeholder="Average workout duration" mt="md" value={avgWorkoutDuration} onChange={(value) => setAvgWorkoutDuration(Number(value) || 0)} />
                </Fieldset>
                <Button onClick={close} mt="md" fullWidth>Close</Button>
            </Modal>
            <Center>
                <Stack align="center">
                    <Text>Click the button below to enter your lifestyle information</Text>
                    <Button variant="default" onClick={open}>
                        Open lifestyle information modal
                    </Button>
                </Stack>
            </Center>

        </>
    );
}