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
} from "@chakra-ui/react";
import { StarIcon, ArrowForwardIcon } from "@chakra-ui/icons";

function Home() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [iconData, setIconData] = useState([]);
  const [shopCard, setShopCard] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      let res = await axios.get(
        `http://localhost:${import.meta.env.VITE_BOAT_SERVER_PORT}/products`
      );

      setData1(res.data.data1);
      setData2(res.data.data2);
      setData3(res.data.data3);
      setIconData(res.data.iconData);
      setShopCard(res.data.shopHoldings);
    } catch (error) {
      console.log(error);
    }
  }

function handleCart(product){
  
    // Step1.  if any old added data in the cart we'll retrieve it OR we can take an empty array if no data found in local storage
   const existingCartData = JSON.parse(localStorage.getItem('addToCart')) || []

// Step2.  here we'll add the product object in the existing array 
const updateCartData = [...existingCartData, product ]


// Step3. updata the local storage with the modified cart data
localStorage.setItem('addToCart', JSON.stringify(updateCartData))
}

  return (
    <>
      <SimpleGrid
     
        columns={4}
        w="95%"
        justifyContent={"space-around"}
        alignItems={"center"}
        m="auto"
        spacing="15px"
      >
        {data1.map((product, index) => (
          <Box key={index}>
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
                    <Button onClick={()=> handleCart(product)} fontSize="15px" bg="black" colorScheme="white">
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
      <br />

      <Text textDecoration="underline" fontSize="30px" mt="5%" ml="3%">
        Best of <b>BoAt</b>{" "}
      </Text>

      <Tabs variant="soft-rounded" colorScheme="gray">
        <TabList ml="3.8%" mt="2%">
          <Tab>Best Sellers</Tab>
          <Tab>Top Earbuds</Tab>
          <Tab>Top Watches</Tab>
          <Tab>Top Selection of Celebs</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {" "}
            <SimpleGrid
              columns={4}
              w="95%"
              justifyContent={"space-around"}
              alignItems={"center"}
              m="auto"
              spacing="15px"
            >
              {data3.map((product, index) => (
                <Box key={index}>
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
              columns={4}
              w="95%"
              justifyContent={"space-around"}
              alignItems={"center"}
              m="auto"
              spacing="15px"
            >
              {data1.map((product, index) => (
                <Box key={index}>
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
              columns={4}
              w="95%"
              justifyContent={"space-around"}
              alignItems={"center"}
              m="auto"
              spacing="15px"
            >
              {data2.map((product, index) => (
                <Box key={index}>
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
              w="98%"
              m="auto"
              columns={4}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={1}
            >
              {shopCard.map((card, index) => (
                <Box m="auto" key={index}>
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
        columns={4}
        w="95%"
        justifyContent={"space-around"}
        alignItems={"center"}
        m="auto"
        spacing="15px"
      >
        {data2.map((product, index) => (
          <Box key={index}>
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
                    <Button fontSize="15px" bg="black" colorScheme="white">
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
        columns={4}
        justifyContent={"space-around"}
        alignItems={"center"}
        w="90%"
        m="auto"
        p={10}
        spacing={10}
      >
        {iconData.map((data, index) => (
          <Box key={index} m="auto" height="80px">
            <Image w="120px" h="120px" m="auto" src={data.icon} />
            <Text textAlign={"center"}>{data.icon_name}</Text>
          </Box>
        ))}
      </SimpleGrid>

      <br />
      <br />

      {/* Shop by lifestyle celeb card */}
      <Text textDecoration="underline" fontSize="30px" mt="5%" ml="3%">
        Shop by <b>Lifestyle</b>{" "}
      </Text>

      <SimpleGrid
        w="98%"
        m="auto"
        columns={4}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={1}
      >
        {shopCard.map((card, index) => (
          <Box m="auto" key={index}>
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
    </>
  );
}

export default Home;
