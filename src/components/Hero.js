import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Flex, Image, Heading, Stack, Text, Link } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export default function Hero({
title,
subtitle,
image,
ctaLink,
ctaText,
...rest
})
    {
        return(
            <Flex
                align="center"
                justify={{base: "center", md:"space-around", xl:"space-between"}}
                direction={{base: "column-reverse", md:"row"}}
                wrap="no-wrap"
                minH="70vh"
                px={8}
                mb={16}
                {...rest}
            >
                <Stack
                    spacing={4}
                    w={{base: "80%", md:"40%"}}
                    align={["center", "center", "flex-start", "flex-start"]}
                >
                    <Heading
                        as="h1"
                        size="xl"
                        fontWeight="bold"
                        color="purple.800"
                        textAlign={["center", "center", "left", "left"]}
                    >
                        {title}
                    </Heading>
                    <Heading
                        as="h2"
                        size="md"
                        fontWeight="normal"
                        color="purple.800"
                        opacity="0.8"
                        lineHeight={1.5}
                        textAlign={["center", "center", "left", "left"]}
                    >
                        {subtitle}
                    </Heading>
                    <Link _hover={{ textDecoration: "none" }} to={ctaLink}>
                        <Button
                            rightIcon={<ArrowForwardIcon />}
                            colorScheme="purple"
                            variant="solid"
                            borderRadius="8px"
                            py="4"
                            px="4"
                        >
                            {ctaText}
                        </Button>
                    </Link>
                    <Text
                        fontSize="xs"
                        mt={2}
                        textAlign="center"
                        color="purple.800"
                        opacity="0.6"
                    >
                        Shaping your Dreams.
                    </Text>
                </Stack>
                <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
                    <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
                </Box>
            </Flex>
        )   
    }

Hero.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    ctaLink: PropTypes.string,
    ctaText: PropTypes.string,
}

Hero.defaultProps = {
    title: "Design Xperts",
    subtitle: "Because it is For the modern living",
    image: "https://source.unsplash.com/collection/404339/800x600",
    ctaText: "Check our Services now",
    ctaLink: "/services",
}