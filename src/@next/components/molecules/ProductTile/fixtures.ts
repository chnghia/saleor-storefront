import { ProductList_products_edges_node } from "@sdk/queries/types/ProductList";

export const PRODUCT: ProductList_products_edges_node = {
  __typename: "Product",
  category: {
    __typename: "Category",
    id: "Q2F0ZWdvcnk6MTQ=",
    name: "Juices",
  },
  id: "UHJvZHVjdDo3Mg==",
  name: "Apple Juice",
  pricing: {
    __typename: "ProductPricingInfo",
    onSale: true,
    priceRange: {
      __typename: "TaxedMoneyRange",
      start: {
        __typename: "TaxedMoney",
        gross: {
          __typename: "Money",
          amount: 1.8,
          currency: "USD",
          localized: "$1.80",
        },
        net: {
          __typename: "Money",
          amount: 1.8,
          currency: "USD",
          localized: "$1.80",
        },
      },
      stop: {
        __typename: "TaxedMoney",
        gross: {
          __typename: "Money",
          amount: 4.2,
          currency: "USD",
          localized: "$4.20",
        },
        net: {
          __typename: "Money",
          amount: 4.2,
          currency: "USD",
          localized: "$4.20",
        },
      },
    },
    priceRangeUndiscounted: {
      __typename: "TaxedMoneyRange",
      start: {
        __typename: "TaxedMoney",
        gross: {
          __typename: "Money",
          amount: 3,
          currency: "USD",
          localized: "$3.00",
        },
        net: {
          __typename: "Money",
          amount: 3,
          currency: "USD",
          localized: "$3.00",
        },
      },
      stop: {
        __typename: "TaxedMoney",
        gross: {
          __typename: "Money",
          amount: 7,
          currency: "USD",
          localized: "$7.00",
        },
        net: {
          __typename: "Money",
          amount: 7,
          currency: "USD",
          localized: "$7.00",
        },
      },
    },
  },
  thumbnail: {
    __typename: "Image",
    alt: "",
    url:
      "http://localhost:8000/media/__sized__/products/saleordemoproduct_fd_juice_06_102xcfi-thumbnail-255x255.png",
  },
  thumbnail2x: {
    __typename: "Image",
    url:
      "http://localhost:8000/media/__sized__/products/saleordemoproduct_fd_juice_06_102xcfi-thumbnail-510x510.png",
  },
};