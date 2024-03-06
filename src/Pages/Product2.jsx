import axios from "axios";
import { useEffect, useState } from "react";
import {
  SimpleGrid,
  Box,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Flex,
  Text,
  Spacer,
  Button,
  Link,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  useDisclosure,
  useToast,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { StarIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function Product2() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [iconData, setIconData] = useState([]);
  const [shopCard, setShopCard] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  //  To store cart data in the variable so we can display in the drawer
  const [cartData, setCartData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      // let res = await axios.get(`http://localhost:${import.meta.env.VITE_BOAT_SERVER_PORT}/products`);
      let res = await axios.get(`https://iamnaveen8851.github.io/Mock-Product-Server/db.json`);

     
      setData1(res.data.products.data1);
      setData2(res.data.products.data2);
      setData3(res.data.products.data3);
      setIconData(res.data.products.iconData);
      setShopCard(res.data.products.shopHoldings);
    } catch (error) {
      console.log(error);
    }
  }
  //   To add data in the local storage
  function handleCart(product) {
    onOpen();

    // Step1.  if any old added data in the cart we'll retrieve it OR we can take an empty array if no data found in local storage
    const existingCartData =
      JSON.parse(localStorage.getItem("addToCart")) || [];

    // Step2.  here we'll add the product object in the existing array
    const updateCartData = [...existingCartData, product];

    // Step3. updata the local storage with the modified cart data
    localStorage.setItem("addToCart", JSON.stringify(updateCartData));

    // To set the cart data in state variable
    setCartData(updateCartData);
  }

  // To delete from the cart
  function handleDelete(product) {
    let filteredData = cartData.filter((ele, index) => {
      return ele !== product;
    });

    localStorage.setItem("addToCart", JSON.stringify(filteredData));
    setCartData(filteredData);
  }

  // to confirm order
  const toast = useToast();
  function handleOrder() {
    if (cartData.length === 0) {
      navigate("/product");
    } else {
      const examplePromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(200), 1400);
      });

      toast.promise(examplePromise, {
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
    }
  }

  return (
    <>
      {/* Shop by lifestyle celeb card */}
      <Text textDecoration="underline" fontSize="30px" mt="5%" ml="3%">
        Shop by <b>Lifestyle</b>{" "}
      </Text>

      <SimpleGrid
        columns={{
          base: "1", // 0px
          sm: "2", // ~480px. em is a relative unit and is dependant on the font size.
          md: "2", // ~768px
          lg: "3", // ~992px
          xl: "4", // ~1280px
          "2xl": "4", // ~1536px
        }}
        w={{
          base: "90%", // 0px
          sm: "100%", // ~480px. em is a relative unit and is dependant on the font size.
          md: "100%", // ~768px
          lg: "100%", // ~992px
          xl: "100%", // ~1280px
          "2xl": "100%", // ~1536px
        }}
        m={{
          base: "auto", // 0px
          sm: "auto", // ~480px. em is a relative unit and is dependant on the font size.
          md: "auto", // ~768px
          lg: "auto", // ~992px
          xl: "auto", // ~1280px
          "2xl": "auto", // ~1536px
        }}
        // ml={{
        //   base: "8%", // 0px
        // }}
        mt={{
          base: "20%",
          md: "", // ~768px
          lg: "", // ~992px
          xl: "", // ~1280px
          "2xl": "", // ~1536px
        }}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={{
          base: "15%",
          sm: "10%",
          md: "8%",
          lg: "6%",
          xl: "1%", // ~1280px
          "2xl": "1%", // ~1536px
        }}
      >
        {shopCard.map((card, index) => (
          <Box
            h={{
              base: "450px",
            }}
            m="auto"
            // mt={{
            //   base: "20%", // 0px
            //   sm: "20%", // ~480px. em is a relative unit and is dependant on the font size.
            //   md: "50%", // ~768px
            //   lg: "45%", // ~992px
            //   xl: "30%", // ~1280px
            //   "2xl": "20%", // ~1536px
            // }}
            key={index}
          >
            <Card m="auto" boxShadow="none">
              <CardBody>
                <Image src={card.image} />
                <Box bg="#EBF8FF" borderBottomRadius="20px" p={3}>
                  <Heading fontSize="20px" mt="2%" textAlign="center">
                    {card.msg}
                  </Heading>
                  <Link fontSize="16px" ml="35%">
                    View all {<ArrowForwardIcon />}{" "}
                  </Link>
                </Box>
              </CardBody>
            </Card>
          </Box>
        ))}
      </SimpleGrid>
      <br />
      <br />
      <br />

      <Text textDecoration="underline" fontSize="30px" mt="5%" ml="3%">
        Best of <b>BoAt</b>{" "}
      </Text>

      <Tabs variant="soft-rounded" colorScheme="gray">
        <TabList ml="3.8%" mt="2%">
          <Tab
            fontSize={{
              base: "12px",
              sm: "14px",
              md: "16",
              lg: "20px",
              xl: "22px",
              "2xl": "22px",
            }}
          >
            Best Sellers
          </Tab>
          <Tab
            fontSize={{
              base: "12px",
              sm: "14px",
              md: "16",
              lg: "20px",
              xl: "22px",
              "2xl": "22px",
            }}
          >
            Top Earbuds
          </Tab>
          <Tab
            fontSize={{
              base: "12px",
              sm: "14px",
              md: "16",
              lg: "20px",
              xl: "22px",
              "2xl": "22px",
            }}
          >
            Top Watches
          </Tab>
          <Tab
            fontSize={{
              base: "12px",
              sm: "14px",
              md: "16",
              lg: "20px",
              xl: "22px",
              "2xl": "22px",
            }}
          >
            Top Selection of Celebs
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {" "}
            <SimpleGrid
              columns={{
                base: "1", // 0px
                sm: "2", // ~480px. em is a relative unit and is dependant on the font size.
                md: "2", // ~768px
                lg: "3", // ~992px
                xl: "4", // ~1280px
                "2xl": "4", // ~1536px
              }}
              w={{
                base: "90%", // 0px
                sm: "100%", // ~480px. em is a relative unit and is dependant on the font size.
                md: "100%", // ~768px
                lg: "100%", // ~992px
                xl: "100%", // ~1280px
                "2xl": "100%", // ~1536px
              }}
              m={{
                base: "auto", // 0px
                sm: "auto", // ~480px. em is a relative unit and is dependant on the font size.
                md: "auto", // ~768px
                lg: "auto", // ~992px
                xl: "auto", // ~1280px
                "2xl": "auto", // ~1536px
              }}
              // ml={{
              //   base: "8%", // 0px
              // }}
              justifyContent={"space-around"}
              alignItems={"center"}
              spacing="15px"
            >
              {data3.map((product, index) => (
                <Box
                  h={{
                    base: "450px",
                  }}
                  key={index}
                >
                  <Card borderRadius="20px">
                    <CardBody>
                      <Image
                        w="350px"
                        h="240px"
                        src={product.image}
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                      />
                      <Stack mt="6" spacing="3">
                        <Heading size="sm">{product.name}</Heading>
                        <Heading size="sm">{product.price}</Heading>
                        <Flex display="flex">
                          <Text color="gold">{<StarIcon />}</Text>
                          <Text color="black" fontSize="18px" pl={1}>
                            {product.rating}
                          </Text>
                          <Spacer />
                          <Button
                            onClick={() => handleCart(product)}
                            fontSize="15px"
                            bg="black"
                            colorScheme="white"
                          >
                            Add To Cart
                          </Button>
                        </Flex>
                      </Stack>
                    </CardBody>
                  </Card>
                </Box>
              ))}
            </SimpleGrid>
          </TabPanel>
          {/* Earbuds */}
          <TabPanel>
            <SimpleGrid
              columns={{
                base: "1", // 0px
                sm: "2", // ~480px. em is a relative unit and is dependant on the font size.
                md: "2", // ~768px
                lg: "3", // ~992px
                xl: "4", // ~1280px
                "2xl": "4", // ~1536px
              }}
              w={{
                base: "90%", // 0px
                sm: "100%", // ~480px. em is a relative unit and is dependant on the font size.
                md: "100%", // ~768px
                lg: "100%", // ~992px
                xl: "100%", // ~1280px
                "2xl": "100%", // ~1536px
              }}
              m={{
                base: "auto", // 0px
                sm: "auto", // ~480px. em is a relative unit and is dependant on the font size.
                md: "auto", // ~768px
                lg: "auto", // ~992px
                xl: "auto", // ~1280px
                "2xl": "auto", // ~1536px
              }}
              // ml={{
              //   base: "8%", // 0px
              // }}
              justifyContent={"space-around"}
              alignItems={"center"}
              spacing="15px"
            >
              {data1.map((product, index) => (
                <Box
                  h={{
                    base: "450px",
                  }}
                  key={index}
                >
                  <Card borderRadius="20px">
                    <CardBody>
                      <Image
                        w="350px"
                        h="240px"
                        src={product.image}
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                      />
                      <Stack mt="6" spacing="3">
                        <Heading size="sm">{product.name}</Heading>
                        <Heading size="sm">{product.price}</Heading>
                        <Flex display="flex">
                          <Text color="gold">{<StarIcon />}</Text>
                          <Text color="black" fontSize="18px" pl={1}>
                            {product.rating}
                          </Text>
                          <Spacer />
                          <Button
                            onClick={() => handleCart(product)}
                            fontSize="15px"
                            bg="black"
                            colorScheme="white"
                          >
                            Add To Cart
                          </Button>
                        </Flex>
                      </Stack>
                    </CardBody>
                  </Card>
                </Box>
              ))}
            </SimpleGrid>
          </TabPanel>

          {/* Top watches */}
          <TabPanel>
            {" "}
            <SimpleGrid
              columns={{
                base: "1", // 0px
                sm: "2", // ~480px. em is a relative unit and is dependant on the font size.
                md: "2", // ~768px
                lg: "3", // ~992px
                xl: "4", // ~1280px
                "2xl": "4", // ~1536px
              }}
              w={{
                base: "90%", // 0px
                sm: "100%", // ~480px. em is a relative unit and is dependant on the font size.
                md: "100%", // ~768px
                lg: "100%", // ~992px
                xl: "100%", // ~1280px
                "2xl": "100%", // ~1536px
              }}
              m={{
                base: "auto", // 0px
                sm: "auto", // ~480px. em is a relative unit and is dependant on the font size.
                md: "auto", // ~768px
                lg: "auto", // ~992px
                xl: "auto", // ~1280px
                "2xl": "auto", // ~1536px
              }}
              // ml={{
              //   base: "8%", // 0px
              // }}
              justifyContent={"space-around"}
              alignItems={"center"}
              spacing="15px"
            >
              {data2.map((product, index) => (
                <Box
                  h={{
                    base: "450px",
                  }}
                  key={index}
                >
                  <Card borderRadius="20px">
                    <CardBody>
                      <Image
                        w="350px"
                        h="240px"
                        src={product.image}
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                      />
                      <Stack mt="6" spacing="3">
                        <Heading size="sm">{product.name}</Heading>
                        <Heading size="sm">{product.price}</Heading>
                        <Flex display="flex">
                          <Text color="gold">{<StarIcon />}</Text>
                          <Text color="black" fontSize="18px" pl={1}>
                            {product.rating}
                          </Text>
                          <Spacer />
                          <Button
                            onClick={() => handleCart(product)}
                            fontSize="15px"
                            bg="black"
                            colorScheme="white"
                          >
                            Add To Cart
                          </Button>
                        </Flex>
                      </Stack>
                    </CardBody>
                  </Card>
                </Box>
              ))}
            </SimpleGrid>
          </TabPanel>

          {/* Celebs Selections */}
          <TabPanel>
            <SimpleGrid
              columns={{
                base: "1", // 0px
                sm: "2", // ~480px. em is a relative unit and is dependant on the font size.
                md: "2", // ~768px
                lg: "3", // ~992px
                xl: "4", // ~1280px
                "2xl": "4", // ~1536px
              }}
              w={{
                base: "90%", // 0px
                sm: "100%", // ~480px. em is a relative unit and is dependant on the font size.
                md: "100%", // ~768px
                lg: "100%", // ~992px
                xl: "100%", // ~1280px
                "2xl": "100%", // ~1536px
              }}
              m={{
                base: "auto", // 0px
                sm: "auto", // ~480px. em is a relative unit and is dependant on the font size.
                md: "auto", // ~768px
                lg: "auto", // ~992px
                xl: "auto", // ~1280px
                "2xl": "auto", // ~1536px
              }}
              // ml={{
              //   base: "8%", // 0px
              // }}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={1}
            >
              {shopCard.map((card, index) => (
                <Box
                  h={{
                    base: "450px",
                  }}
                  m="auto"
                  key={index}
                >
                  <Card m="auto" boxShadow="none">
                    <CardBody>
                      <Image src={card.image} />
                      <Box bg="#EBF8FF" borderBottomRadius="20px" p={3}>
                        <Heading fontSize="20px" mt="2%" textAlign="center">
                          {card.msg}
                        </Heading>
                        <Link fontSize="16px" ml="35%">
                          View all {<ArrowForwardIcon />}{" "}
                        </Link>
                      </Box>
                    </CardBody>
                  </Card>
                </Box>
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <br />
      <br />
      <br />
      <Text textDecoration="underline" fontSize="30px" ml="3%">
        New <b>Launches</b>{" "}
      </Text>
      <SimpleGrid
        columns={{
          base: "1", // 0px
          sm: "2", // ~480px. em is a relative unit and is dependant on the font size.
          md: "2", // ~768px
          lg: "3", // ~992px
          xl: "4", // ~1280px
          "2xl": "4", // ~1536px
        }}
        w={{
          base: "90%", // 0px
          sm: "100%", // ~480px. em is a relative unit and is dependant on the font size.
          md: "100%", // ~768px
          lg: "100%", // ~992px
          xl: "100%", // ~1280px
          "2xl": "100%", // ~1536px
        }}
        m={{
          base: "auto", // 0px
          sm: "auto", // ~480px. em is a relative unit and is dependant on the font size.
          md: "auto", // ~768px
          lg: "auto", // ~992px
          xl: "auto", // ~1280px
          "2xl": "auto", // ~1536px
        }}
        // ml={{
        //   base: "8%", // 0px
        // }}
        justifyContent={"space-around"}
        alignItems={"center"}
        spacing="15px"
      >
        {data2.map((product, index) => (
          <Box
            h={{
              base: "450px",
            }}
            key={index}
          >
            <Card borderRadius="20px">
              <CardBody m="auto">
                <Image
                  w="350px"
                  h="240px"
                  src={product.image}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="sm">{product.name}</Heading>
                  <Heading size="sm">{product.price}</Heading>
                  <Flex display="flex">
                    <Text color="gold">{<StarIcon />}</Text>
                    <Text color="black" fontSize="18px" pl={1}>
                      {product.rating}
                    </Text>
                    <Spacer />
                    <Button
                      onClick={() => handleCart(product)}
                      fontSize="15px"
                      bg="black"
                      colorScheme="white"
                    >
                      Add To Cart
                    </Button>
                  </Flex>
                </Stack>
              </CardBody>
            </Card>
          </Box>
        ))}
      </SimpleGrid>

      <br />
      <br />

      {/* icon details about shipping, replacement and warranty */}
      <SimpleGrid
        columns={{
          base: "1", // 0px
          sm: "2", // ~480px. em is a relative unit and is dependant on the font size.
          md: "2", // ~768px
          lg: "3", // ~992px
          xl: "4", // ~1280px
          "2xl": "4", // ~1536px
        }}
        w={{
          base: "100%", // 0px
          sm: "100%", // ~480px. em is a relative unit and is dependant on the font size.
          md: "100%", // ~768px
          lg: "100%", // ~992px
          xl: "100%", // ~1280px
          "2xl": "100%", // ~1536px
        }}
        m={{
          base: "auto", // 0px
          sm: "auto", // ~480px. em is a relative unit and is dependant on the font size.
          md: "auto", // ~768px
          lg: "auto", // ~992px
          xl: "auto", // ~1280px
          "2xl": "auto", // ~1536px
        }}
        ml={{
          base: "3%", // 0px
        }}
        alignItems={"center"}
        p={10}
        spacing={{
          base: "20", // 0px
          sm: "20", // ~480px. em is a relative unit and is dependant on the font size.
          md: "20", // ~768px
          lg: "20", // ~992px
          xl: "18", // ~1280px
          "2xl": "18", // ~1536px
        }}
      >
        {iconData.map((data, index) => (
          <Box
            h={{
              base: "450px",
            }}
            key={index}
            m="auto"
            height="80px"
          >
            <Image w="120px" h="120px" m="auto" src={data.icon} />
            <Text textAlign={"center"}>{data.icon_name}</Text>
          </Box>
        ))}
      </SimpleGrid>

      <br />
      <br />

      <SimpleGrid
        columns={{
          base: "1", // 0px
          sm: "2", // ~480px. em is a relative unit and is dependant on the font size.
          md: "2", // ~768px
          lg: "3", // ~992px
          xl: "4", // ~1280px
          "2xl": "4", // ~1536px
        }}
        w={{
          base: "90%", // 0px
          sm: "100%", // ~480px. em is a relative unit and is dependant on the font size.
          md: "100%", // ~768px
          lg: "100%", // ~992px
          xl: "100%", // ~1280px
          "2xl": "100%", // ~1536px
        }}
        m={{
          base: "auto", // 0px
          sm: "auto", // ~480px. em is a relative unit and is dependant on the font size.
          md: "auto", // ~768px
          lg: "auto", // ~992px
          xl: "auto", // ~1280px
          "2xl": "auto", // ~1536px
        }}
        // ml={{
        //   base: "1%", // 0px
        // }}
        justifyContent={"space-around"}
        alignItems={"center"}
        spacing="15px"
      >
        {data1.map((product, index) => (
          <Box
            h={{
              base: "450px",
            }}
            key={index}
            ml="auto"
          >
            <Card m="auto" borderRadius="20px">
              <CardBody>
                <Image
                  w="350px"
                  h="240px"
                  src={product.image}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="sm">{product.name}</Heading>
                  <Heading size="sm">{product.price}</Heading>
                  <Flex display="flex">
                    <Text color="gold">{<StarIcon />}</Text>
                    <Text color="black" fontSize="18px" pl={1}>
                      {product.rating}
                    </Text>
                    <Spacer />
                    <Button
                      onClick={() => handleCart(product)}
                      fontSize="15px"
                      bg="black"
                      colorScheme="white"
                    >
                      Add To Cart
                    </Button>
                  </Flex>
                </Stack>
              </CardBody>
            </Card>
          </Box>
        ))}
      </SimpleGrid>

      {/* for cart drawer  */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>

          <DrawerBody>
            {cartData.map((product, index) => (
              <Box key={index} m="auto" w="60%">
                <Image mt="50%" src={product.image} alt={product.name} />
                <Text>Name :- {product.name}</Text>
                <Text>Price :- {product.price}</Text>
                <Text>Rating :- {product.rating}</Text>
                <Button ml="20%" mt="5%" onClick={() => handleDelete(product)}>
                  Remove
                </Button>
              </Box>
            ))}
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
    </>
  );
}

export default Product2;
