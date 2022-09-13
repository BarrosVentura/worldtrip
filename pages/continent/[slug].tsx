import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Header } from "../../components/Header";

export default function Continent() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Box>
      <Header />
      <div>{slug}</div>
    </Box>
  );
}
