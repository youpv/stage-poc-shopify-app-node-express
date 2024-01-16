//Combine all your webhooks here
import { DeliveryMethod } from "@shopify/shopify-api";
import shopify from "../../utils/shopifyConfig.js";
import appUninstallHandler from "./app_uninstalled.js";


const webhookRegistrar = async () => {
  shopify.webhooks.addHandlers({
    APP_UNINSTALLED: {
      deliveryMethod: DeliveryMethod.Http,
      callbackUrl: "/webhooks/app_uninstalled",
      callback: appUninstallHandler,
    },
  });
};

export default webhookRegistrar;
