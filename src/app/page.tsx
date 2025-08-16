import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { Cover } from "@/components/ui/cover";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        I&apos;m Vale, a cs grad looking <br /> to <ContainerTextFlip
      words={["learn", "design", "build", "grow"]}
    />
      </h1>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a recent {" "} <Highlight>computer science graduate</Highlight> with a passion for building reliable,
        efficient software. During my studies, I led an academic development team as
        {" "} <Highlight>Scrum Master</Highlight>, coordinating work while contributing as a developer. That
        experience sharpened both my technical skills and my ability to keep teams
        aligned and productive.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m now seeking a {" "} <Highlight>software engineering</Highlight> role where I can write clean, thoughtful code, tackle challenging
        problems, and grow as both an engineer and a teammate.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been <Cover>building</Cover>
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
