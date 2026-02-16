import { useState } from 'react';
import { Stepper, Button, Group, Center, Container, Space } from '@mantine/core';
import Step1 from './Step1';
import Step2 from './Step2';
import Comple from './Comple';
import { useUserData } from '../providers/UserDataProvider';

export default function Form() {
    const { name, height, age, dailyCalorieIntake, avgWorkoutDuration, resetUserData } = useUserData();
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 2 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
    const finishStep = () => { console.log(`${name}, ${height}, ${age}, ${dailyCalorieIntake}, ${avgWorkoutDuration}`); resetUserData(); setActive(0); };


    return (
        <Center>
            <Container>
                <Stepper active={active} onStepClick={setActive}>
                    <Stepper.Step label="First step" description="Enter personal information">
                        <Space h="md" />
                        <Step1 />
                    </Stepper.Step>
                    <Stepper.Step label="Second step" description="Enter lifestyle information">
                        <Space h="md" />
                        <Step2 />
                    </Stepper.Step>
                    <Stepper.Completed>
                        <Space h="md" />
                        <Comple />
                    </Stepper.Completed>
                </Stepper>
                <Space h="xl" />
                <Group justify="center" mt="xl">
                    {active !== 0 && <Button variant="default" onClick={prevStep}>Back</Button>}
                    {active < 2 && <Button onClick={nextStep}>
                        {active === 1 ? 'Complete Step' : 'Next step'}
                    </Button>}
                    {active === 2 && <Button onClick={() => finishStep()}>Print to console</Button>}
                </Group>
            </Container>
        </Center>
    );
}