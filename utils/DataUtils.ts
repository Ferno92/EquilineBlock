
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
    image: "https://files.oaiusercontent.com/file-84CSBfTloxBxLwoWtkbp5GK4?se=2024-10-13T07%3A01%3A29Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D819354af-e54f-43f7-b964-1089b5a0b311.webp&sig=kltOy1jUJfeDBhOljSY9lAU6rUhD5YYqa/bCJTPuZ0Y%3D",
  },
  {
    id: 3,
    name: "Stivaletti da Equitazione Impermeabili",
    price: 89.99,
    tags: [FilterKeys.cavallo],
    image: "https://files.oaiusercontent.com/file-yKn7NcI9JpPko4gFIa8xVYUA?se=2024-10-13T07%3A03%3A11Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db58612a2-863d-4de2-93ed-e99c30e33df6.webp&sig=LPps1ph7jT4bURIcKz5LegqivHX30m5AwBgpAe1hkeM%3D",
  },
  {
    id: 4,
    name: "Coperta per Cavalli Invernale",
    price: 149.99,
    tags: [FilterKeys.cavallo],
    image: "https://files.oaiusercontent.com/file-I1dOkwalbiMvHnInThqvt8bP?se=2024-10-13T07%3A03%3A41Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dea918dfa-c145-4773-8f8b-4d56b7e7cc8d.webp&sig=zUEObXbQzxJySmHVbcc7zvxye/2o8M9H2UwSZbCSlBw%3D",
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