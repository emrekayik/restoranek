import React, { useEffect } from "react";
import Link from "next/link";
import {
  Center,
  Title,
  Paragraph
} from "@/utils/theme";

export default function Custom404() {

  return(
    <Center>
      <Title>404</Title>
      <Link href="/">
        <Paragraph>
          AnaSayfa
        </Paragraph>
      </Link>
    </Center>
  )
}