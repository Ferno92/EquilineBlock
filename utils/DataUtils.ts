
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
    name: "Sella Dressage Comfort",
    price: 99.99,
    tags: [FilterKeys.cavallo],
    image: "https://www.equiline.it/media/catalog/product/cache/cf1c07b0b42447e353d32b38285c98b0/S/C/SC013PSJ450006_SC013PSJ450_E5_006_1.jpg",
  },
  {
    id: 3,
    name: "Stivaletti da Equitazione Impermeabili",
    price: 89.99,
    tags: [FilterKeys.cavallo],
    image: "https://www.barcastores.com/media/catalog/product/cache/4c104745db28e78d991a39ada755980e/1/9/19_270294NE-xl_5.jpg",
  },
  {
    id: 4,
    name: "Coperta per Cavalli Invernale",
    price: 149.99,
    tags: [FilterKeys.cavallo],
    image: "https://www.equiline.it/media/catalog/product/cache/cf1c07b0b42447e353d32b38285c98b0/E/C/EC018PA11204002_181MA11204002_01_1.jpg",
  },
  {
    id: 5,
    name: "Redini in Cuoio Premium",
    price: 39.99,
    tags: [FilterKeys.cavallo],
    image: "https://www.equiline.it/media/catalog/product/cache/cf1c07b0b42447e353d32b38285c98b0/S/C/SC013PRN0003006_SC013PRN00030001006_01.jpg",
  },
  {
    id: 6,
    name: "Casco da Equitazione Sicurezza Plus",
    price: 129.99,
    tags: [FilterKeys.cavallo],
    image: "https://www.equiline.it/media/catalog/product/cache/cf1c07b0b42447e353d32b38285c98b0/E/C/EC018PC1001000002_B2C_EC018PC10010_00002_01_2.jpg",
  },
  {
    id: 7,
    name: "Sottosella Traspirante Sportivo",
    price: 49.99,
    tags: [FilterKeys.cavallo],
    image: "https://www.equiline.it/media/catalog/product/cache/cf1c07b0b42447e353d32b38285c98b0/E/S/ES124PB11302002_B2C_ES124PB11302_002_01.jpg",
  },
  {
    id: 8,
    name: "Giacca da Equitazione Softshell Donna",
    price: 119.99,
    tags: [FilterKeys.donna],
    image: "https://www.equiline.it/media/catalog/product/cache/cf1c07b0b42447e353d32b38285c98b0/E/S/ES124PM08738262_B2C_ES124PM08738_262_01.jpg",
  },
  {
    id: 9,
    name: "Pantaloni da Equitazione Elasticizzati",
    price: 89.99,
    tags: [FilterKeys.donna],
    image: "https://www.equiline.it/media/catalog/product/cache/cf1c07b0b42447e353d32b38285c98b0/E/C/EC018PN08981002_B2C_EC018PN08981_002_01.jpg",
  },
  {
    id: 10,
    name: "Stivaletti da Equitazione Donna in Pelle",
    price: 99.99,
    tags: [FilterKeys.donna],
    image: "https://www.barcastores.com/media/catalog/product/cache/4c104745db28e78d991a39ada755980e/1/9/19_3190NE-xl_2_1.jpg",
  },
  {
    id: 11,
    name: "Guanti da Equitazione Traspiranti",
    price: 29.99,
    tags: [FilterKeys.donna],
    image: "https://www.equiline.it/media/catalog/product/cache/cf1c07b0b42447e353d32b38285c98b0/E/C/EC018PT11234006_EC018PT11234006_01.jpg",
  },
  {
    id: 12,
    name: "Casco da Equitazione Leggero con Finiture Opache",
    price: 139.99,
    tags: [FilterKeys.donna],
    image: "https://www.equiline.it/media/catalog/product/cache/cf1c07b0b42447e353d32b38285c98b0/E/W/EW124PC10021064_B2C_EW124PC10021_064_01_1.jpg",
  }
];