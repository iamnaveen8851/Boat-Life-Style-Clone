import {
  Flex,
  Box,
  Link,
  Image,
  Spacer,
  Button,
  Menu,
  MenuButton,
  Input,
  MenuList,
  MenuItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Center,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  FormLabel,
  Stack,
  InputGroup,
  InputLeftElement,
  Text,
  useToast,
  IconButton,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons"; // figureout how to add these by import

import { useState } from "react";
function Navbar() {
  // for Drawer and Modal we use this hook
  const {
    isOpen: isModalOpen,
    onClose: closeModal,
    onToggle: onModaltoggle,
  } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onOpen: openDrawer,
    onClose: closeDrawer,
  } = useDisclosure();

  const {
    isOpen: isHamMenuOpen,
    onOpen: openHamMenu,
    onClose: closeHamMenu,
  } = useDisclosure();
  //   to manage number state fro login
  const [number, setNumber] = useState("");

  //  to add hover effect so More dropdown will open
  const [isMoreHover, setIsMoreHover] = useState(false);

  //   To open modal
  function handleModal() {
    onModaltoggle();
  }

  // for login success full we use useTaast Hook
  const toast = useToast();
  function handleToast() {
    if (number.length === 10) {
      const examplePromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(200), 5000);
      });

      toast.promise(examplePromise, {
        success: {
          title: "Login Successful",
          description: `You have successfully registered with this ${number} number`,
        },
        error: {
          title: "Login Failed",
          description: `Something wrong check your mobile number ${number}.`,
        },
        loading: { title: "Processing..." },
      });

      setNumber("");
    } else {
      toast({
        title: "Login Failed",
        description: `Something wrong check your mobile number ${number}`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }

    //   here use `useNavigateHook`  to redirect user to home page
  }

  return (
    <>
      <Center
        onClick={handleModal}
        cursor={"pointer"}
        bg="#EBF8FF"
        p={2}
       
        fontSize={{
            base: "10px", // 0px
            sm: "10px", // ~480px. em is a relative unit and is dependant on the font-size.
            md: "12px", // ~768px
            lg: "14px", // ~992px
            xl: "14px", // ~1280px
            "2xl": "16px", // ~1536px
        }}
      >
        <b>boAthead Days</b> &nbsp; <p>are coming! Leap into</p>
        &nbsp;
        <b>exclusive offers & more. 🤑 Sign up!😍</b>
      </Center>

      {/* Hamburger Menu for small screens */}
      <IconButton
        color="black"
        // border="2px"
        onClick={openHamMenu}
        aria-label="Search database"
        icon={<HamburgerIcon />}
        display={{
          base: "block", // 0px
          sm: "block", // ~480px. em is a relative unit and is dependant on the font-size.
          md: "block", // ~768px
          lg: "none", // ~992px
          xl: "none", // ~1280px
          "2xl": "none", // ~1536px
        }}
        ml="5%"
        mt="4%"
      />
      <Drawer isOpen={isHamMenuOpen} placement="left" onClose={closeHamMenu}>
        <DrawerOverlay />
        <DrawerContent mt="5.2%" >
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody  display={"flex"} flexDirection={"column"} alignItems={"left"} justifyContent={"flex-start"} gap={4}>

            <Link
              _hover={{
                fontWeight: "550",
                textDecoration: "underline",
                textDecorationThickness: "2px",
                textDecorationStyle: "solid",
              }}
            >
              boAt Personalisation
            </Link>
            <Link
              _hover={{
                fontWeight: "550",
                textDecoration: "underline",
                textDecorationThickness: "2px",
                textDecorationStyle: "solid",
              }}
            >
              Gift with boAt
            </Link>
            
            <Link
              _hover={{
                fontWeight: "550",
                textDecoration: "underline",
                textDecorationThickness: "2px",
                textDecorationStyle: "solid",
              }}
            >
              Corporate Orders
            </Link>
           
            {/* More hover button menu */}
            <Menu  isOpen={isMoreHover} onClose={() => setIsMoreHover(false)}>
              <MenuButton
              mr="80%"
              
                variant="unstyled"
                bg={"white"}
                as={Button}
                onMouseEnter={() => setIsMoreHover(true)}
                onMouseLeave={() => setIsMoreHover(false)}
                rightIcon={<ChevronDownIcon />}
              >
                More
              </MenuButton>

              {isMoreHover && (
                <MenuList>
                  <MenuItem>Daily Deals</MenuItem>
                  <MenuItem>Do What FloAts your BoAt</MenuItem>
                  <MenuItem>Blogs</MenuItem>
                  <MenuItem>Refer & Earn</MenuItem>
                  <MenuItem>Careers</MenuItem>
                  <MenuItem>Social Responsiblity</MenuItem>
                  <MenuItem>Store Locator</MenuItem>
                </MenuList>
              )}
            </Menu>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Flex
        borderBottom="1px"
        p={4}
        minWidth="max-content"
        alignItems="center"
        gap="5"
        flexDirection={{
          base: "column", // 0px
          sm: "column", // ~480px. em is a relative unit and is dependant on the font-size.
          md: "column", // ~768px
          lg: "row", // ~992px
          xl: "row", // ~1280px
          "2xl": "row", // ~1536px
        }}
        mr={{
            base: "auto", // 0px
            sm: "20%", // ~480px. em is a relative unit and is dependant on the font-size.
            md: "0", // ~768px
            lg: "0", // ~992px
            xl: "0", // ~1280px
            "2xl": "0",
        }}

        ml={{
            base: "auto", // 0px
            sm: "20%", // ~480px. em is a relative unit and is dependant on the font-size.
            md: "0", // ~768px
            lg: "0", // ~992px
            xl: "0", // ~1280px
            "2xl": "0",
        }}
      >
        {/* logo */}
        <Box p="2px">
          <Link>
            {" "}
            <Image
              src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434"
              w="100px"
            />
          </Link>
        </Box>
        {/* All Links that are option of nav  */}

        {/* For medium screen  */}
        <Box
          display={{
            base: "none", // 0px
            sm: "none", // ~480px. em is a relative unit and is dependant on the font-size.
            md: "none", // ~768px
            lg: "flex", // ~992px
            xl: "flex", // ~1280px
            "2xl": "flex", // ~1536px
          }}

          justifyContent={"space-around"}
          alignItems={"center"}
          gap={5}
        
        >
          <Link
            _hover={{
              fontWeight: "550",
              textDecoration: "underline",
              textDecorationThickness: "2px",
              textDecorationStyle: "solid",
            }}
          >
            boAt Personalisation
          </Link>
          <Link
            _hover={{
              fontWeight: "550",
              textDecoration: "underline",
              textDecorationThickness: "2px",
              textDecorationStyle: "solid",
            }}
          >
            Gift with boAt
          </Link>
          <Link
            _hover={{
              fontWeight: "550",
              textDecoration: "underline",
              textDecorationThickness: "2px",
              textDecorationStyle: "solid",
            }}
          >
            Corporate Orders
          </Link>
          &nbsp;
          {/* More hover button menu */}
          <Menu isOpen={isMoreHover} onClose={() => setIsMoreHover(false)}>
            <MenuButton
              variant="unstyled"
              bg={"white"}
              as={Button}
              onMouseEnter={() => setIsMoreHover(true)}
              onMouseLeave={() => setIsMoreHover(false)}
              rightIcon={<ChevronDownIcon />}
            >
              More
            </MenuButton>

            {isMoreHover && (
              <MenuList>
                <MenuItem>Daily Deals</MenuItem>
                <MenuItem>Do What FloAts your BoAt</MenuItem>
                <MenuItem>Blogs</MenuItem>
                <MenuItem>Refer & Earn</MenuItem>
                <MenuItem>Careers</MenuItem>
                <MenuItem>Social Responsiblity</MenuItem>
                <MenuItem>Store Locator</MenuItem>
              </MenuList>
            )}
          </Menu>
        </Box>

        <Spacer />
        {/* Search input */}
        <Menu m={{
            base: "auto", // 0px
            sm: "auto", // ~480px. em is a relative unit and is dependant on the font size.
            md: "auto", // ~768px
            lg: "auto", // ~992px
            xl: "auto", // ~1280px
            "2xl": "auto", // ~1536px
        }}>
          <MenuButton as={Button}>
            <SearchIcon />
            <Input borderRadius="50%" placeholder="Seach Boat Products" />
          </MenuButton>
          <MenuList>
            <MenuItem></MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
        <Popover>
          <PopoverTrigger>
            <Button w="60px" borderRadius="10px" bg="none">
              <Image
                w="35px"
                h="28px"
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Profile-1.png?v=1663762989"
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Hi boAthead!</PopoverHeader>
            <PopoverBody>
              <Button
                onClick={handleModal}
                w="295px"
                h="7"
                colorScheme="blue"
                bg="black"
              >
                Login
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        {/* Modal */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize={25} textAlign={"center"}>
              Get <b>Started</b>
            </ModalHeader>
            <Text m="auto" fontSize="15px">
              Please enter your Mobile Number to continue
            </Text>
            <ModalCloseButton />
            <ModalBody>
              <Center
                borderRadius={10}
                p={1}
                bg="#EBF8FF"
                h="300px"
                color="black"
              >
                <Stack spacing="1%">
                  <FormLabel textAlign={"center"}>
                    Enter Mobile Number
                  </FormLabel>
                  <InputGroup w="80%" m={"auto"} bg="white">
                    <InputLeftElement mt="3%" pointerEvents="none">
                      <Text>+91</Text>
                    </InputLeftElement>
                    <Input
                      p={7}
                      pl="18%"
                      type="tel"
                      placeholder="Type Here"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </InputGroup>
                  <Button
                    onClick={handleToast}
                    w="60%"
                    ml="20%"
                    mt="5%"
                    colorScheme="gray"
                  >
                    SEND OTP
                  </Button>
                  <p
                    style={{
                      fontSize: "11px",
                      textAlign: "center",
                      marginTop: "5%",
                    }}
                  >
                    By Confirming, you agree to boAt's Terms and Conditions and
                    Privacy Policy.
                  </p>
                </Stack>
              </Center>
            </ModalBody>

            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
        {/* Drawer */}
        <Button colorScheme="black" onClick={openDrawer}>
          <Image
            w="20px"
            src="https://static-00.iconduck.com/assets.00/shopping-bag-icon-1769x2048-wv307ji8.png"
          />
        </Button>
        <Drawer isOpen={isDrawerOpen} placement="right" onClose={closeDrawer}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Your Cart</DrawerHeader>

            <DrawerBody>
              <Box m="auto" w="50%">
                <Image
                  mt="50%"
                  src="https://static-00.iconduck.com/assets.00/shopping-bag-icon-1769x2048-wv307ji8.png"
                  alt="Dan Abramov"
                />
              </Box>
              <Link ml="23%">
                <Button mt="10%" colorScheme="white" bg="black">
                  Start Shopping
                </Button>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
}

export default Navbar;
