import SelectWeather from "@/components/SelectWeather/SelectWeather";
import DateSelection from '@/components/dateSelection/DateSelection';
import Header from "@/components/header/Header";
import { Container, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Container maxW="1200px" margin="0 auto">
        <Header />
        <SelectWeather />
        <DateSelection/>
      </Container>
    </>
  );
}
