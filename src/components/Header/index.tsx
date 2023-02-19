import React from "react";
import { useRouter } from "next/router";

import Button from "components/Button";
import Flex from "components/Flex";
import Text from "components/Text";

import Link from "next/link";
import { ul } from "./style";

export function Header() {
  const router = useRouter();

  const navItems = [{ label: "Dashboard", href: "/", css: {} }];

  return (
    <Flex
      as="nav"
      gap="small"
      padding="medium"
      align="center"
      bgColor="lightGray"
      direction={{ "@xSmDown": "column" }}
    >
      <Link href="/" style={{ textDecoration: "none" }}>
        <Text size="h3" fontWeight="bold">
          Crypto Charts
        </Text>
      </Link>

      <ul className={ul({ css: { "@xSmDown": { padding: 0 } } })}>
        {navItems.map(({ label, href, css }) => (
          <li key={label}>
            <Link href={href}>
              <Button
                round
                css={
                  router.pathname !== href
                    ? {
                        ...css,
                        backgroundColor: "transparent",
                        "&:hover": {
                          backgroundColor: "$gray300",
                        },
                      }
                    : { ...css, backgroundColor: "$primary", color: "$white" }
                }
              >
                {label}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </Flex>
  );
}

export default Header;
