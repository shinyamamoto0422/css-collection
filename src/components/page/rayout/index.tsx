import { Text, List, Box } from "@mantine/core";
import { TwoColumn } from "@/components/TwoColumn";

const GridCenter = () => {
  return (
    <div className="grid place-items-center bg-gray-800 rounded px-4 py-2">
      <Text size="md" weight="bold" color="white">
        grid
      </Text>
    </div>
  );
};

const FlexCenter = () => {
  return (
    <div className="flex justify-center items-center bg-gray-800 rounded px-4 py-2">
      <Text size="md" weight="bold" color="white">
        flex
      </Text>
    </div>
  );
};

const array = [
  {
    left: {
      title: "grid",
      text: "grid center",
      code: "&lt;div className=&quot;grid place-items-center&quot;&gt;&lt;/div&gt;",
    },
    right: <GridCenter />,
  },
  {
    left: {
      title: "flex",
      text: "flex center",
      code: "&lt;div className=&quot;flex justify-center items-center&quot;&gt;&lt;/div&gt;",
    },
    right: <FlexCenter />,
  },
];

export const Rayout = () => {
  return (
    <div>
      <Box>
        <Text size="xl" weight="bold">
          中央寄せ
        </Text>
        <Text size="md">
          レイアウトのために安易に使うと収拾がつかなくなるので、使う場合は包含ブロックを生成して影響範囲を限定して使用する
        </Text>
      </Box>
      {array.map((item, index) => {
        return <TwoColumn key={index} left={item.left} right={item.right} />;
      })}
    </div>
  );
};
