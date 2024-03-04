import {
  SimpleGrid,
  Box,
  Image,
  Text,
  InputGroup,
  Input,
  InputRightAddon,
  IconButton,
  Heading,
  Link,
  Center,
  useToast,
  Stack,
  Skeleton,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";

import { useState } from "react";
function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setloading] = useState(false);
  const toast = useToast();

  async function handleRegister() {
    try {
      if (email !== null) {
        setloading(true);
        setTimeout(() => {
          setloading(false);
          toast({
            position: "top",
            title: `Subscribed Successfully`,
            description: `You've successfully registered with this email id:- ${email}.`,
            status: "success",
            duration: 1800,
            isClosable: true,
          });
        }, 1500);
      }
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }

  if (loading) {
    return (
      <Stack w="40%" m="auto">
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  }

  return (
    <>
  
      <SimpleGrid
        bg="#EBF8FF"
        // w="98%"
        w={{
          base: "95%", // 0px
          sm: "98%", // ~480px. em is a relative unit and is dependant on the font size.
          md: "98%", // ~768px
          lg: "98%", // ~992px
          xl: "98%", // ~1280px
          "2xl": "98%", // ~1536px
        }}

        
        m={{
          base: "auto", // 0px
          sm: "auto", // ~480px. em is a relative unit and is dependant on the font size.
          md: "auto", // ~768px
          lg: "auto", // ~992px
          xl: "auto", // ~1280px
          "2xl": "auto",
        }}

        mt={{
          base: "270%", // 0px
          sm: "32%", // ~480px. em is a relative unit and is dependant on the font size.
          md: "40%", // ~768px
          lg: "20%", // ~992px
          xl: "12%", // ~1280px
          "2xl": "10%",
        }}
        p={5}
        columns={{
          base: "1", // 0px
          sm: "1", // ~480px. em is a relative unit and is dependant on the font size.
          md: "2", // ~768px
          lg: "4", // ~992px
          xl: "4", // ~1280px
          "2xl": "4", // ~1536px
        }}
        spacing="20px"
      >
        <Box height="300px" ml="5%" p={5}>
          <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_logo.svg" />
          <Text mt="5%">Subscribe to our email alerts!</Text>
          <InputGroup borderRadius="20px" mt="5%">
            <Input
              border={"none"}
              bg="white"
              w="80%"
              p={6}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              _placeholder={{
                fontSize: "12.6px",
                padding: "-5px",
              }}
            />
            <InputRightAddon ml="0" bg="white" p={6} w="20%">
              <IconButton
                onClick={handleRegister}
                bg="none"
                borderRadius="50%"
                aria-label="Call Sage"
                fontSize="20px"
                ml="-5"
                icon={<ChevronRightIcon />}
              />
            </InputRightAddon>
          </InputGroup>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          textAlign={"left"}
          height="190px"
        >
          <Heading ml="5%" fontSize="16px">
            Shop
          </Heading>
          <Link ml="5%" fontSize="12px">
            True Wireless Earbuds
          </Link>
          <Link ml="5%" fontSize="12px">
            Wireless Headphones
          </Link>
          <Link ml="5%" fontSize="12px">
            Home Audio
          </Link>
          <Link ml="5%" fontSize="12px">
            Smart Watches
          </Link>
          <Link ml="5%" fontSize="12px">
            Misfit Trimmers
          </Link>
          <Link ml="5%" fontSize="12px">
            Wireless Speakers
          </Link>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          textAlign={"left"}
          height="190px"
        >
          <Heading ml="5%" fontSize="16px">
            Help
          </Heading>
          <Link ml="5%" fontSize="12px">
            Track Your Order
          </Link>
          <Link ml="5%" fontSize="12px">
            Warranty & Support
          </Link>
          <Link ml="5%" fontSize="12px">
            Return Policy
          </Link>
          <Link ml="5%" fontSize="12px">
            Service Centers
          </Link>
          <Link ml="5%" fontSize="12px">
            Bulk Orders
          </Link>
          <Link ml="5%" fontSize="12px">
            FAQs
          </Link>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          textAlign={"left"}
          height="190px"
        >
          <Heading ml="5%" fontSize="16px">
            Company
          </Heading>
          <Link ml="5%" fontSize="12px">
            About boAt
          </Link>
          <Link ml="5%" fontSize="12px">
            News
          </Link>
          <Link ml="5%" fontSize="12px">
            Read Our Blog
          </Link>
          <Link ml="5%" fontSize="12px">
            Careers
          </Link>
          <Link ml="5%" fontSize="12px">
            Security
          </Link>
          <Link ml="5%" fontSize="12px">
            Investor Relation
          </Link>
          <Link ml="5%" fontSize="12px">
            Social Responsibilty
          </Link>
          <Link ml="5%" fontSize="12px">
            Warranty Policy
          </Link>
        </Box>
      </SimpleGrid>

      <SimpleGrid
        bg="#EBF8FF"
        // w="98%"
        w={{
          base: "95%", // 0px
          sm: "98%", // ~480px. em is a relative unit and is dependant on the font size.
          md: "98%", // ~768px
          lg: "98%", // ~992px
          xl: "98%", // ~1280px
          "2xl": "98%", // ~1536px
        }}
        m={{
          base: "auto", // 0px
          sm: "auto", // ~480px. em is a relative unit and is dependant on the font size.
          md: "auto", // ~768px
          lg: "auto", // ~992px
          xl: "auto", // ~1280px
          "2xl": "auto",
        }}
        p={5}
        columns={{
          base: "1", // 0px
          sm: "1", // ~480px. em is a relative unit and is dependant on the font size.
          md: "2", // ~768px
          lg: "4", // ~992px
          xl: "4", // ~1280px
          "2xl": "4", // ~1536px
        }}
        spacing="20px"
      >
        <Box height="300px"  p={1}>
          <Heading ml="5%" fontSize="16px">
            True Wireless Earbuds
          </Heading>
          <Link ml="5%" fontSize="12px">
            Noise Cancellation Earbuds
          </Link>
          <br />
          <Link ml="5%" fontSize="12px">
            Wireless Headphones
          </Link>
          <br />
          <Link ml="5%" fontSize="12px">
            Home Audio
          </Link>
          <br />
          <Link ml="5%" fontSize="12px">
            Smart Watches
          </Link>
          <br />
          <Link ml="5%" fontSize="12px">
            Misfit Trimmers
          </Link>
          <br />
          <Link ml="5%" fontSize="12px">
            Wireless Speakers
          </Link>
          <br />
          <Link ml="5%" fontSize="12px">
            Gaming Earbuds
          </Link>
          <br />
          <Link ml="5%" fontSize="12px">
            Large Playback Earbuds
          </Link>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          textAlign={"left"}
          height="190px"
        >
          <Heading ml="5%" fontSize="16px">
            Cables
          </Heading>
          <Link ml="5%" fontSize="12px">
            True Wireless Earbuds
          </Link>
          <Link ml="5%" fontSize="12px">
            Wireless Headphones
          </Link>
          <Link ml="5%" fontSize="12px">
            Home Audio
          </Link>
          <Link ml="5%" fontSize="12px">
            Smart Watches
          </Link>
          <Link ml="5%" fontSize="12px">
            Misfit Trimmers
          </Link>
          <Link ml="5%" fontSize="12px">
            Wireless Speakers
          </Link>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          textAlign={"left"}
          height="190px"
        >
          <Heading ml="5%" fontSize="16px">
            Wireless Speakers
          </Heading>
          <Link ml="5%" fontSize="12px">
            Track Your Order
          </Link>
          <Link ml="5%" fontSize="12px">
            Warranty & Support
          </Link>
          <Link ml="5%" fontSize="12px">
            Return Policy
          </Link>
          <Link ml="5%" fontSize="12px">
            Service Centers
          </Link>
          <Link ml="5%" fontSize="12px">
            Bulk Orders
          </Link>
          <Link ml="5%" fontSize="12px">
            FAQs
          </Link>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          textAlign={"left"}
          height="190px"
        >
          <Heading ml="5%" fontSize="16px">
            Limited Editions
          </Heading>
          <Link ml="5%" fontSize="12px">
            About boAt
          </Link>
          <Link ml="5%" fontSize="12px">
            News
          </Link>
          <Link ml="5%" fontSize="12px">
            Read Our Blog
          </Link>
          <Link ml="5%" fontSize="12px">
            Careers
          </Link>
          <Link ml="5%" fontSize="12px">
            Security
          </Link>
          <Link ml="5%" fontSize="12px">
            Investor Relation
          </Link>
          <Link ml="5%" fontSize="12px">
            Social Responsibilty
          </Link>
          <Link ml="5%" fontSize="12px">
            Warranty Policy
          </Link>
        </Box>
      </SimpleGrid>





      <SimpleGrid
        bg="#EBF8FF"
        // w="98%"
        w={{
          base: "95%", // 0px
          sm: "98%", // ~480px. em is a relative unit and is dependant on the font size.
          md: "98%", // ~768px
          lg: "98%", // ~992px
          xl: "98%", // ~1280px
          "2xl": "98%", // ~1536px
        }}
        m={{
          base: "auto", // 0px
          sm: "auto", // ~480px. em is a relative unit and is dependant on the font size.
          md: "auto", // ~768px
          lg: "auto", // ~992px
          xl: "auto", // ~1280px
          "2xl": "auto",
        }}
        p={5}
        columns={{
          base: "1", // 0px
          sm: "1", // ~480px. em is a relative unit and is dependant on the font size.
          md: "2", // ~768px
          lg: "4", // ~992px
          xl: "4", // ~1280px
          "2xl": "4", // ~1536px
        }}
        spacing="20px"
      >
        <Box height="300px"  p={1}>
          <Heading ml="5%" fontSize="16px">
           Smart Watches
          </Heading>
          <Link ml="5%" fontSize="12px">
            Noise Cancellation Earbuds
          </Link>
          <br />
          <Link ml="5%" fontSize="12px">
            Wireless Headphones
          </Link>
          <br />
          <Link ml="5%" fontSize="12px">
            Home Audio
          </Link>
          <br />
          <Link ml="5%" fontSize="12px">
            Smart Watches
          </Link>
          <br />
          <Link ml="5%" fontSize="12px">
            Misfit Trimmers
          </Link>
          <br />
          <Link ml="5%" fontSize="12px">
            Wireless Speakers
          </Link>
          <br />
          <Link ml="5%" fontSize="12px">
            Gaming Earbuds
          </Link>
          <br />
          <Link ml="5%" fontSize="12px">
            Large Playback Earbuds
          </Link>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          textAlign={"left"}
          height="190px"
        >
          <Heading ml="5%" fontSize="16px">
            Powerbanks
          </Heading>
          <Link ml="5%" fontSize="12px">
            True Wireless Earbuds
          </Link>
          <Link ml="5%" fontSize="12px">
            Wireless Headphones
          </Link>
          <Link ml="5%" fontSize="12px">
            Home Audio
          </Link>
          <Link ml="5%" fontSize="12px">
            Smart Watches
          </Link>
          <Link ml="5%" fontSize="12px">
            Misfit Trimmers
          </Link>
          <Link ml="5%" fontSize="12px">
            Wireless Speakers
          </Link>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          textAlign={"left"}
          height="190px"
        >
          <Heading ml="5%" fontSize="16px">
           Gaming Headphones
          </Heading>
          <Link ml="5%" fontSize="12px">
            Track Your Order
          </Link>
          <Link ml="5%" fontSize="12px">
            Warranty & Support
          </Link>
          <Link ml="5%" fontSize="12px">
            Return Policy
          </Link>
          <Link ml="5%" fontSize="12px">
            Service Centers
          </Link>
          <Link ml="5%" fontSize="12px">
            Bulk Orders
          </Link>
          <Link ml="5%" fontSize="12px">
            FAQs
          </Link>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          textAlign={"left"}
          height="190px"
        >
          <Heading ml="5%" fontSize="16px">
           Chargers
          </Heading>
          <Link ml="5%" fontSize="12px">
            About boAt
          </Link>
          <Link ml="5%" fontSize="12px">
            News
          </Link>
          <Link ml="5%" fontSize="12px">
            Read Our Blog
          </Link>
          <Link ml="5%" fontSize="12px">
            Careers
          </Link>
          <Link ml="5%" fontSize="12px">
            Security
          </Link>
          <Link ml="5%" fontSize="12px">
            Investor Relation
          </Link>
          <Link ml="5%" fontSize="12px">
            Social Responsibilty
          </Link>
          <Link ml="5%" fontSize="12px">
            Warranty Policy
          </Link>
        </Box>
      </SimpleGrid>

      <Box
        bg="#EBF8FF"
        w={{
          base: "95%", // 0px
          sm: "98%", // ~480px. em is a relative unit and is dependant on the font size.
          md: "98%", // ~768px
          lg: "98%", // ~992px
          xl: "98%", // ~1280px
          "2xl": "98%", // ~1536px
        }}
        m={{
          base: "auto", // 0px
          sm: "auto", // ~480px. em is a relative unit and is dependant on the font size.
          md: "auto", // ~768px
          lg: "auto", // ~992px
          xl: "auto", // ~1280px
          "2xl": "auto",
        }}
        p={10}
        color="white"
        h="250px"
      >
        <Center
          mt="5%"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
          gap="20px"
          h="100px"
          fontSize="13px"
          color="black"
        >
          <Text>Privacy Policy - Terms & Conditions</Text>

          <Text>© 2024 Imagine Marketing Limited. All Rights Reserved.</Text>

          <Text>
            For queries contact us: Manager, Imagine Marketing Limited Unit no.
            204 & 205, 2nd floor, D-wing & E-wing, Corporate Avenue, Andheri
            Ghatkopar Link Road, Mumbai, Maharashtra-400093, India
          </Text>
        </Center>
      </Box>
    </>
  );
}

export default Footer;
