import { Text, List } from "@mantine/core";
import Link from "next/link";
import { VFC } from "react";

export const NotDo: VFC = () => {
  return (
    <>
      <Text size="xl" weight="bold">
        べからず集
      </Text>

      <List withPadding>
        <List.Item>
          <Text size="lg" weight="bold">
            inline-blockは使うな
          </Text>
          <List withPadding listStyleType="disc">
            <List.Item>要素を横並びにする目的では使わない方がいい</List.Item>
            <List.Item>
              インライン要素はアセンダー・ディセンダーやベースラインの関係から、微妙な位置のずれが出ます。しかもOSによって異なったりします。レイアウトには心底向いていないです。フォントが混在する行のベースラインとかline-heightとか完全に落とし穴です。避けましょう。
              アイコンのように「要素を文字として扱いたい場合」などに使うのであれば、使ってよいと思います。
            </List.Item>
          </List>
        </List.Item>
        <hr />
        <List.Item>
          <Text size="lg" weight="bold">
            table / display: table は使うな
          </Text>
          <List withPadding listStyleType="disc">
            <List.Item>レイアウトがずれる</List.Item>
            <List.Item>
              CSS2の仕様にもあるように、レイアウトが定められていない。なので、ブラウザによって表示が異なる可能性がある。
            </List.Item>
          </List>
        </List.Item>
      </List>
      <Link href="https://qiita.com/lhankor_mhy/items/bdcede71b1aad3b7ee94">
        <a className="text-blue-800 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
          初心者向けCSSべからず集
        </a>
      </Link>
    </>
  );
};
