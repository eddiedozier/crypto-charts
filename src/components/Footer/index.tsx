import Flex from "components/Flex";
import Text from "components/Text";
import React from "react";

export function Footer() {
  return (
    <Flex
      as="footer"
      gap="small"
      padding="medium"
      align="center"
      bgColor="lightGray"
      mt="auto"
      justify="center"
    >
      <Text size="body" fontWeight="bold" color="mediumGray" align="center">
        &#169; {new Date().getFullYear()} Crypto Charts. All rights reserved.
      </Text>
    </Flex>
  );
}

export default Footer;
