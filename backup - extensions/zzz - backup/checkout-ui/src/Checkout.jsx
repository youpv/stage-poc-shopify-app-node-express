import {
  reactExtension,
  BlockStack,
  InlineStack,
  Button,
  Image,
  Text,
  useTranslate,
} from "@shopify/ui-extensions-react/checkout";
import { useState } from "react";

export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {
  const translate = useTranslate();
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
  };

  return (
    <InlineStack>
      <Image source="/url/for/image" />
      <BlockStack>
        <Text size="large">
          {translate("heading")}
        </Text>
        <Text size="small">{translate("description",)}</Text>
      </BlockStack>
      <Button
        onPress={handlePress}
      >
        {count}
      </Button>
    </InlineStack>
  );
}
