import { BoxApp, BoxWithText, CodeBoxWithText } from "@/components/BoxApp";
import { LinkApp } from "@/components/LinkApp";
import { Text, List, Box } from "@mantine/core";
import { VFC } from "react";

const TextShow = () => {
  return (
    <>
      <BoxWithText
        title="文章構造と表示方法の分離"
        content={
          <List withPadding listStyleType="disc">
            <List.Item>スタイルを指定するHTMLタグを使わない</List.Item>
            <List.Item>
              クラスを通してスタイルを当てる
              <List withPadding>
                <List.Item>
                  <BoxApp title='&lt;ul&gt;&lt;li&gt;Item one&lt;/li&gt;&lt;li class="special"&gt;二つ目の項目&lt;/li&gt;&lt;li&gt;&lt;em&gt;三つ目&lt;/em&gt;の項目&lt;/li&gt;&lt;/ul&gt;.special {color: orange;font-weight: bold;}' />
                </List.Item>
              </List>
            </List.Item>
            <List.Item>
              文書構造と表示方法を分離するので、tailwindみたいな感じで、表示方法を意味するクラスを使わない
            </List.Item>
            <List.Item>
              名前の衝突を避ける
              <List withPadding>
                <List.Item>
                  <LinkApp href="https://qiita.com/takahirocook/items/01fd723b934e3b38cbbc" title="BEM記法" />
                </List.Item>
              </List>
            </List.Item>
            <List.Item>MDNの信頼できる情報を参照しに行って、正しい使い方を確認する</List.Item>
          </List>
        }
      />
      <BoxWithText
        title="レスポンシブな表示を支える技術"
        content={
          <List withPadding listStyleType="disc">
            <List.Item>
              pxに頼らず、
              <CodeBoxWithText title="em・rem・vw・vh" />
              などの相対長を使用する
            </List.Item>
            <List.Item>flexboxかgrid-layoutを使用する</List.Item>
          </List>
        }
      />
      <BoxWithText
        title="状態に応じたスタイルを実現する技術"
        content={
          <List withPadding listStyleType="disc">
            <List.Item>
              擬似クラス <CodeBoxWithText title="例：:focus" />
              とかを使用して見た目を変える
            </List.Item>
          </List>
        }
      />
      <BoxWithText
        title="マルチブラウザー対応のための技術"
        content={
          <List withPadding listStyleType="disc">
            <List.Item>
              <LinkApp
                href="https://github.com/hankchizljaw/modern-css-reset/blob/master/dist/reset.css"
                title="ModernCSS reset"
              />
              を使用する
            </List.Item>
            <List.Item>ベンダープレフィクス・flexbug-fixesを使用する</List.Item>
          </List>
        }
      />
    </>
  );
};

export const Basic: VFC = () => {
  return (
    <>
      <Text size="xl" weight="bold">
        現代的な使い方の基礎
      </Text>
      <TextShow />
    </>
  );
};
