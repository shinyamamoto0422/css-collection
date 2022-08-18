import { FC } from "react";
import { Text, List } from "@mantine/core";
import { convertHTMLTextValue } from "@/utils/convertHTMLTextValue";

type TwoColumnProps = {
  left: {
    title: string;
    text: string;
    code: string;
  };
  right: React.ReactNode;
};
export const TwoColumn: FC<TwoColumnProps> = ({ left, right }) => {
  return (
    <div className="mb-5 mx-4">
      <div className="md:grid md:grid-cols-2 gap-4">
        <div className="md:col-span-1  rounded p-1">
          <List withPadding>
            <List.Item>
              <Text size="lg" weight="bold">
                {left.title}
              </Text>
              <List withPadding className="bg-gray-700 px-4 py-2">
                <List.Item className="text-white font-mono font-bold text-sm">
                  {convertHTMLTextValue(left.code)}
                </List.Item>
              </List>
            </List.Item>
          </List>
        </div>
        <div className="md:col-span-1 bg-gray-200 p-5 rounded">{right}</div>
      </div>
    </div>
  );
};
