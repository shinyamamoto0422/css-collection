import { Text, Box } from "@mantine/core";
import { FC, VFC, ReactNode } from "react";

type Props = {
  title: string;
};

export const BoxApp: FC<Props> = ({ title }) => {
  return (
    <span className="flex justify-center items-center bg-gray-800 rounded px-4 py-2">
      <Text size="md" weight="bold" color="white">
        {title}
      </Text>
    </span>
  );
};

type BoxWithTextProps = {
  title: string;
  content: ReactNode;
};
export const BoxWithText: VFC<BoxWithTextProps> = ({ title, content }) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
      })}
    >
      <Text size="md" weight="bold">
        {title}
      </Text>
      {content}
    </Box>
  );
};

type CodeBoxWithTextProps = {
  title: string;
};
export const CodeBoxWithText: FC<CodeBoxWithTextProps> = ({ title }) => {
  return <span className=" bg-gray-200 rounded px-2 py-1">{title}</span>;
};
