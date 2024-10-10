
export interface ItemModel {
    id: number;
    name: string;
    price: number;
    tags: string[];
    image: string;
  }

  enum FilterKeys {
    donna = "donna",
    uomo = "uomo",
    junior = "junior",
    caschi = "caschi",
    safety = "safety",
    cavallo = "cavallo",
    selleria = "selleria",
    saddleDivision = "saddleDivision",
    equniverse = "equniverse",
  }


export const pages = new Map<string, string>([
    [FilterKeys.donna, "Donna"],
    [FilterKeys.uomo, "Uomo"],
    [FilterKeys.junior, "Junior"],
    [FilterKeys.caschi, "Caschi"],
    [FilterKeys.safety, "Safety"],
    [FilterKeys.cavallo, "Cavallo"],
    [FilterKeys.selleria, "Selleria"],
    [FilterKeys.saddleDivision, "Saddle Division"],
    [FilterKeys.equniverse, "Eq Universe"],
  ]);

const data: ItemModel[] = [
  {
    id: 1,
    name: "Testiera Anatomica",
    price: 99.99,
    tags: [FilterKeys.cavallo],
    image:
      "https://www.equiline.it/media/catalog/product/cache/cf1c07b0b42447e353d32b38285c98b0/S/C/SC013PBD400006_SC013PBD4000001006_01_2.jpg",
  },
  {
    id: 2,
    name: "Testiera Anatomica",
    price: 99.99,
    tags: [FilterKeys.cavallo],
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Testiera Anatomica",
    price: 99.99,
    tags: [FilterKeys.cavallo],
    image: "https://via.placeholder.com/150",
  },
];

export function getFilterItems(key: string): ItemModel[] {
    switch(key) {
        case "donna":
            return data.filter(item => item.tags.includes(FilterKeys.donna));
        case "uomo":
            return data.filter(item => item.tags.includes(FilterKeys.uomo));
        case "junior":
            return data.filter(item => item.tags.includes(FilterKeys.junior));
        case "caschi":
            return data.filter(item => item.tags.includes(FilterKeys.caschi));
        case "safety":
            return data.filter(item => item.tags.includes(FilterKeys.safety));
        case "cavallo":
            return data.filter(item => item.tags.includes(FilterKeys.cavallo));
        case "selleria":
            return data.filter(item => item.tags.includes(FilterKeys.selleria));
        case "saddleDivision":
            return data.filter(item => item.tags.includes(FilterKeys.saddleDivision));
        case "equniverse":
            return data.filter(item => item.tags.includes(FilterKeys.equniverse));
        default:
            return data
    }
}