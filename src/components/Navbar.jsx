import {
  Flex,
  Box,
  // Link,
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
  InputRightAddon,
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

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import axios from "axios";

function Navbar() {
  // for Drawer and Modal we use this hook
  const {
    isOpen: isModalOpen,
    onClose: closeModal,
    onToggle: onModaltoggle,
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

  //for Drawer
  const { isOpen, onOpen, onClose } = useDisclosure();
  //  To store cart data in the variable so we can display in the drawer
  const [cartData, setCartData] = useState([]);

  const navigate = useNavigate();

  //   To open modal
  function handleModal() {
    onModaltoggle();
  }

  // useEffect(() => {
  //   const debounce = setTimeout(() => {
  //     if (debounce != null) {
  //       handleSearch();
  //     }
  //   }, 2000);

  //   return () => {
  //     clearTimeout(debounce);
  //   };
  // }, []);
  // To see search  results
  async function handleSearch(e) {
    try {
      let search = e.target.value.toLowerCase();

      let res = await axios.get(
        `http://localhost:${import.meta.env.VITE_BOAT_SERVER_PORT}/products`
      );

      const { data1, data2, data3 } = res.data;
      let arr = [...data1, ...data2, ...data3];

      // Work on these lines to get search results
      const filterProducts = arr.filter((product) => {
        return product.name.toLowerCase() === search
      });
      console.log(filterProducts);
    } catch (error) {
      console.log(error);
    }
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

  console.log(cartData);

  function handleCartDrawer() {
    onOpen();
    //   To add data in the local storage

    // Step1.  if any old added data in the cart we'll retrieve it OR we can take an empty array if no data found in local storage
    const existingCartData =
      JSON.parse(localStorage.getItem("addToCart")) || [];
    const updateCartData = [...existingCartData];

    // Step3. updata the local storage with the modified cart data
    localStorage.setItem("addToCart", JSON.stringify(updateCartData));
    setCartData(updateCartData);
  }
  // To delete from the cart
  function handleDelete(product) {
    let filteredData = cartData.filter((ele) => {
      return ele !== product;
    });

    localStorage.setItem("addToCart", JSON.stringify(filteredData));
    setCartData(filteredData);
  }

  // to confirm order
  const toast1 = useToast();
  function handleOrder() {
    if (cartData.length === 0) {
      navigate("/product");
    } else {
      const examplePromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(200), 1400);
      });

      toast1.promise(examplePromise, {
        success: {
          title: "Order Confirmed",
          description: `You Order has successfully confirmed your order`,
        },
        error: {
          title: "Order Failed",
          description: `Something wrong check your Order`,
        },
        loading: { title: "Processing..." },
      });

      onClose();
    }
  }

  return (
    <>
      {/* <Center
        onClick={handleModal}
        cursor={"pointer"}
        bg="#EBF8FF"
        p={2}
        
        // w={{
        //   base: "100%", // 0px
        //   sm: "150%", // ~480px. em is a relative unit and is dependant on the font size.
        //   md: "100%", // ~768px
        //   lg: "100%", // ~992px
        //   xl: "100%", // ~1280px
        //   "2xl": "100%", // ~1536px
        // }}
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
      </Center> */}

    
  
      <Drawer   isOpen={isHamMenuOpen} placement="left" onClose={closeHamMenu}>
        <DrawerOverlay />
        <DrawerContent  mt="4%" >
          <DrawerCloseButton />
          <DrawerHeader>Explore Our Products</DrawerHeader>

          <DrawerBody
            display={"flex"}
            flexDirection={"column"}
            alignItems={"left"}
            justifyContent={"flex-start"}
            gap={4}
          >
            <Link
              to="/product"
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
              to="/product1"
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
              to="/product2"
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
            <Menu isOpen={isMoreHover} onClose={() => setIsMoreHover(false)}>
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
        position={"sticky"}
        top="0"
        zIndex="10"
        bg="white"
        borderBottom="1px"
        p={4}
        minWidth="max-content"
        alignItems="center"
        gap={{
          base: "2px",
          sm: "3px",
          lg: "5px",
          xl: "10px",
          "2xl": "5px",
        }}
        flexDirection={{
          base: "column", // 0px
          sm: "colum", // ~480px. em is a relative unit and is dependant on the font-size.
          md: "column", // ~768px
          lg: "row", // ~992px
          xl: "row", // ~1280px
          "2xl": "row", // ~1536px
        }}
        w={{
          base: "100%", // 0px
          sm: "100%", // ~480px. em is a relative unit and is dependant on the font-size.
          md: "100%", // ~768px
          lg: "100%", // ~992px
          xl: "100%", // ~1280px
          "2xl": "100%",
        }}
        m={{
          base: "auto", // 0px
          sm: "auto", // ~480px. em is a relative unit and is dependant on the font size.
          md: "auto", // ~768px
          lg: "auto", // ~992px
          xl: "auto", // ~1280px
          "2xl": "auto",
        }}
      >
        {/* logo */}
        <Box
          display="flex"
          alignItems="center"
          // border="2px"
          w={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "110px",
            xl: "110px",
            "2xl": "0%",
          }}
          gap={{
            base: "25%",
            sm : "35%",
            md : "40%",

          }}
          p="2px"
          mt={{
            base: "1%",
            sm: "0%",
            md: "0%",
            lg: "0%",
          }}
        >
            {/* Hamburger Menu for small screens */}
          <IconButton
            color="black"
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
            
          />
          <Link to="/">
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
          ml={{
            base: "0%",
            sm: "0%",
            md: "0%",
            lg: "2%",
          }}
        >
          <Link
            to="/product"
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
            to="/product1"
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
            to="/product2"
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
        <Menu
          m={{
            base: "auto", // 0px
            sm: "auto", // ~480px. em is a relative unit and is dependant on the font size.
            md: "auto", // ~768px
            lg: "auto", // ~992px
            xl: "auto", // ~1280px
            "2xl": "auto", // ~1536px
          }}
        >
          <Box
            w={{
              base: "50%", // 0px
              sm: "50%", // ~480px. em is a relative unit and is dependant on the font size.
              md: "35%", // ~768px
              lg: "38%", // ~992px
              xl: "20%", // ~1280px
              "2xl": "20%", // ~1536px
            }}
            mr={{
              base: "8%",
              sm: "3%",
              md: "2%",
              lg: "5%",
              xl: "5%",
              "2xl": "0%",
            }}
            mt={{
              base: "5%",
              sm: "5%",
              md: "2%",
              lg: "0%",
              xl: "0%",
              "2xl": "0%",
            }}
          >
            <InputGroup>
              <Input
                type="text"
                placeholder="Search Products"
                onChange={(e) => handleSearch(e)}
              />
              <InputRightAddon w="14%" pl="2%" borderRadius="0px">
                <Button>
                  <SearchIcon />
                </Button>
              </InputRightAddon>
            </InputGroup>
          </Box>
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
          <PopoverContent w="100%">
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Hi boAthead!</PopoverHeader>
            <PopoverBody>
              <Button
                onClick={handleModal}
                w="180px"
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
          <ModalContent
            ml="2%"
            w={{
              base: "90%",
              sm: "92%",
              md: "95%",
              lg: "98%",
              xl: "100%",
              "2xl": "100%",
            }}
            p={2}
          >
            <ModalHeader fontSize={25} textAlign={"center"}>
              Get <b>Started</b>
            </ModalHeader>
            <Text m="auto" fontSize="15px">
              Please Enter Your Mobile Number To Continue
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
          </ModalContent>
        </Modal>
        {/* Drawer */}
        <Button colorScheme="black" onClick={handleCartDrawer}>
          <Image
            w="20px"
            src="https://static-00.iconduck.com/assets.00/shopping-bag-icon-1769x2048-wv307ji8.png"
          />
        </Button>

        {/* for cart drawer  */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Your Cart</DrawerHeader>

            <DrawerBody>
              {cartData.length !== 0 ? (
                cartData.map((product, index) => (
                  <Box key={index} m="auto" w="60%">
                    <Image mt="50%" src={product.image} alt={product.name} />
                    <Text>Name :- {product.name}</Text>
                    <Text>Price :- {product.price}</Text>
                    <Text>Rating :- {product.rating}</Text>
                    <Button
                      ml="20%"
                      mt="5%"
                      onClick={() => handleDelete(product)}
                    >
                      Remove
                    </Button>
                  </Box>
                ))
              ) : (
                <Box m="auto" w="50%">
                  <Image
                    mt="50%"
                    src="https://static-00.iconduck.com/assets.00/shopping-bag-icon-1769x2048-wv307ji8.png"
                    alt="Dan Abramov"
                  />
                </Box>
              )}
              <Link to="/" style={{ marginLeft: "25%" }}>
                <Button
                  onClick={handleOrder}
                  mt="10%"
                  colorScheme="white"
                  bg="black"
                >
                  {cartData.length > 0 ? "Confirm Order" : "Start Shopping"}
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
