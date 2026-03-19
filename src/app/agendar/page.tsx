"use client"

import { Button, Heading, VStack, Text, ButtonGroup, HStack } from "@chakra-ui/react";
import { LuArrowLeft } from "react-icons/lu";
import { Steps, useSteps } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Agendar() {
  const steps = useSteps({
    defaultStep: 0,
    count: items.length,
  });

  const router = useRouter();

  function handleGoToPrevStep() {
    if (steps.value > 1) {
        steps.goToPrevStep()
    } else {
        router.push("/")
    }
  }

  return (
    <VStack as="main" gap={0}>
      <VStack w="100vw" as="section" align="start" pt={28} pb={16} px={6}>
        <Button onClick={handleGoToPrevStep} variant="ghost" rounded="lg" mb={6}>
            <LuArrowLeft />
            {steps.value > 1 ? "Voltar": "Inicio"}
        </Button>

        <Heading as="h1" fontSize="4xl">Agendar Serviço</Heading>
        

        {!steps.isCompleted && <Text>Passo {steps.value + 1} de {steps.count}</Text>}
        {steps.isCompleted && <Text>Completo!</Text>}

        <Steps.RootProvider value={steps}>
          <Steps.List>
            {items.map((step, index) => (
              <Steps.Item key={index} index={index} title={step.title}>
                <Steps.Indicator />
                <Steps.Title>{step.title}</Steps.Title>
                <Steps.Separator />
              </Steps.Item>
            ))}
          </Steps.List>

          {items.map((step, index) => (
            <Steps.Content key={index} index={index}>
              {step.description}
            </Steps.Content>
          ))}

          <Steps.CompletedContent>
            All steps are complete!
          </Steps.CompletedContent>
          <HStack w="100%" justify="end">
            <Steps.NextTrigger asChild>
                <Button size="lg" colorPalette="yellow" rounded="lg">Continuar</Button>
            </Steps.NextTrigger>
          </HStack>
        </Steps.RootProvider>
      </VStack>
    </VStack>
  );
}

const items = [
  {
    title: "Step 1",
    description: "Step 1 description",
  },
  {
    title: "Step 2",
    description: "Step 2 description",
  },
  {
    title: "Step 3",
    description: "Step 3 description",
  },
];

