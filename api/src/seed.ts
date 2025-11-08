import {prisma} from "./index.js";

const rawProducts = [
  {
    name: "Samsung Galaxy Book 4 Ultra",
    category: "Laptop",
    image: "https://www.google.com/imgres?q=galaxy%20book%204%20ultra&imgurl=https%3A%2F%2Fassets.mmsrg.com%2Fisr%2F166325%2Fc1%2F-%2FASSET_MMS_137383357%2Ffee_786_587_png&imgrefurl=https%3A%2F%2Fwww.mediamarkt.de%2Fde%2Fproduct%2F_samsung-galaxy-book-4-ultra-notebook-mit-16-zoll-display-touchscreen-intelr-evotm-plattform-intelr-coretm-ultra-9-185h-prozessor-32-gb-ram-1-tb-ssd-nvidia-geforce-rtxtm-4070-moonstone-gray-windows-11-home-64-bit-2915079.html%3Fsrsltid%3DAfmBOopKteMxN6yf-5wnTMmWlS8DOomVd1DbbjWrdl7BYxBjthL9dUkN&docid=cX3nF0h1EhXNCM&tbnid=mezcH97HgWobXM&vet=12ahUKEwjT9Zi89-KQAxWEm_0HHX9FKX4QM3oECBYQAA..i&w=786&h=587&hcb=2&ved=2ahUKEwjT9Zi89-KQAxWEm_0HHX9FKX4QM3oECBYQAA",
    variants: [
      {
        name: '1 TB',
        price: 3699,
        description: "16\", Intel@Core Ultra 9, 1TB, 32 GB, RTX 4070",
        amount: 2,
      },
      {
        name: '512 GB',
        price: 2799,
        description: "16\", Intel@Core Ultra 7, 512GB, 16 GB, RTX 4070",
        amount: 4,
      }
    ]
  },
  {
    name: "Samsung Galaxy Book 5",
    category: "Laptop",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvuUFodP9p_qFEpJlYnHErge3dnwbkcHHeew&s",
    variants: [
      {
        name: 'Ultra 5',
        price: 1149,
        description: "15.6\", Ultra 5, 16 GB",
        amount: 25,
      },
      {
        name: 'Ultra 7',
        price: 1249,
        description: "15.6\", Ultra 7, 16 GB",
        amount: 12,
      }
    ]
  },
  {
    name: "Samsung Galaxy Book 5 360",
    category: "Laptop",
    image: "https://www.google.com/imgres?q=galaxy%20book%205%20360&imgurl=https%3A%2F%2Fwww.e-systems.de%2Fmedia%2F34%2F28%2Fbd%2F1742381733%2FSamsung-Galaxy-Book-5-360.jpg&imgrefurl=https%3A%2F%2Fwww.e-systems.de%2FSamsung-Galaxy-Book-5-360-15-FHD-Intel-Ultra-7-32GB-LPDDR5x-512GB-SSD-Windows-11-Pro-Grau-Notebook%2F7046462%3Fsrsltid%3DAfmBOoqPdDBVdjMM2y-0olxxICpGbFbW9tzkKTNY3W4euUI08JO04qEn&docid=sovkpHRsJd0GnM&tbnid=0ChWDElbBxjJZM&vet=12ahUKEwiSo9rE-OKQAxVK2AIHHUyeN7UQM3oECBoQAA..i&w=1500&h=1026&hcb=2&ved=2ahUKEwiSo9rE-OKQAxVK2AIHHUyeN7UQM3oECBoQAA",
    variants: [
      {
        name: 'Ultra 5',
        price: 1499,
        description: "15.6\", Ultra 5, 16 GB, Copilot+ PC",
        amount: 5,
      },
      {
        name: 'Ultra 7',
        price: 2299,
        description: "16\", Ultra 7, 32 GB, Copilot+ PC",
        amount: 8,
      }
    ]
  },
  {
    name: "Samsung Galaxy Z Fold 7",
    category: "Mobile",
    image: "https://www.google.com/imgres?q=galaxy%20zfold%207&imgurl=https%3A%2F%2Fcdn.alza.cz%2FFoto%2For%2Farticles%2F46393%2Fimg%2Fsamsung-galaxy-z-fold7-modry.jpg&imgrefurl=https%3A%2F%2Fwww.alza.at%2Fsamsung-galaxy-z-fold7-test&docid=loZ1N2_u-lB3DM&tbnid=kWQsvFo6xPAiEM&vet=12ahUKEwj4oIO8-uKQAxUegv0HHYmUHnUQM3oECBsQAA..i&w=1300&h=850&hcb=2&ved=2ahUKEwj4oIO8-uKQAxUegv0HHYmUHnUQM3oECBsQAA",
    variants: [
      {
        name: '1 TB',
        price: 2299,
        amount: 11,
      },
      {
        name: '512 GB',
        price: 2099,
        amount: 16,
      },
      {
        name: '256 GB',
        price: 1779,
        amount: 18,
      },
    ]
  },
  {
    name: "Samsung Galaxy Z Flip 7",
    category: "Mobile",
    image: "https://www.google.com/imgres?q=galaxy%20zflip7&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51CSI9R3vNL.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.de%2FSamsung-Smartphone-Frontdisplay-50-MP-Weitwinkelkamera-Herstellergarantie%2Fdp%2FB0FBMC3C1W&docid=fSt1d0dCyieEOM&tbnid=DUo__mBF-8qoOM&vet=12ahUKEwje5Jbl-uKQAxXYhP0HHScpJpYQM3oECCEQAA..i&w=1450&h=1450&hcb=2&ved=2ahUKEwje5Jbl-uKQAxXYhP0HHScpJpYQM3oECCEQAA",
    variants: [
      {
        name: '512 GB',
        price: 1199,
        amount: 26,
      },
      {
        name: '256 GB',
        price: 1019,
        amount: 22,
      }
    ]
  },
  {
    name: "Samsung Galaxy S25 Ultra",
    category: "Mobile",
    image: "https://www.google.com/imgres?q=galaxy%20s25u&imgurl=https%3A%2F%2Fimages.samsung.com%2Fde%2Fsmartphones%2Fgalaxy-s25-ultra%2Fbuy%2F04_Color-Selection%2F04_1_Basic-Color%2FColor-Selection_Titanium-Black_MO.png%3Fimbypass%3Dtrue&imgrefurl=https%3A%2F%2Fwww.samsung.com%2Fde%2Fsmartphones%2Fgalaxy-s25-ultra%2Fbuy%2F&docid=QBRD5Gkw71eElM&tbnid=0WUkDLlWpJnppM&vet=12ahUKEwjMk4eK--KQAxVZ_rsIHQG7I9wQM3oECBYQAA..i&w=720&h=480&hcb=2&ved=2ahUKEwjMk4eK--KQAxVZ_rsIHQG7I9wQM3oECBYQAA",
    variants: [
      {
        name: '1 TB',
        price: 1569,
        amount: 0,
      },
      {
        name: '512 GB',
        price: 1349,
        amount: 0,
      },
      {
        name: '256 GB',
        price: 1249,
        amount: 5,
      }
    ]
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    category: "Mobile",
    image: "https://www.google.com/imgres?q=galaxy%20s24u&imgurl=https%3A%2F%2Fwww.dolby.com%2Fsiteassets%2Fxf-products%2Fmobile-phones%2Fgalaxy-s24-ultra%2Fsamsung_sm-s928bztheue-m_int_1.jpg&imgrefurl=https%3A%2F%2Fwww.dolby.com%2Fexperience%2Fmobile-entertainment%2Fgalaxy-s24-ultra%2F&docid=Hdm7Se6PXUUUWM&tbnid=fEM_WW1HLXsCJM&vet=12ahUKEwjrzNGz--KQAxWVhP0HHY6rD6YQM3oECBsQAA..i&w=2000&h=2000&hcb=2&ved=2ahUKEwjrzNGz--KQAxWVhP0HHY6rD6YQM3oECBsQAA",
    variants: [
      {
        name: '256 GB',
        price: 999,
        amount: 0,
      },
      {
        name: '512 GB',
        price: 1099,
        amount: 1,
      }
    ]
  },
  {
    name: "Samsung Galaxy Watch 8",
    category: "Wearable",
    image: "https://www.google.com/imgres?q=galaxy%20watch%208&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31HUZViz0AL.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.de%2FSamsung-Galaxy-Watch-Silver-SM-L320NZSAEUE%2Fdp%2FB0FMNDX8PP&docid=gadTOpQ-1xaQtM&tbnid=hHO_Om0k0GSHCM&vet=12ahUKEwii7v3n--KQAxVRgP0HHcONBsAQM3oECCQQAA..i&w=600&h=600&hcb=2&ved=2ahUKEwii7v3n--KQAxVRgP0HHcONBsAQM3oECCQQAA",
    variants: [
      {
        name: '40 mm',
        price: 329,
        amount: 20,
        description: "40 mm, Bluetooth",
      },
      {
        name: '44 mm',
        price: 359,
        amount: 20,
        description: "40 mm, Bluetooth",
      }
    ]
  },
  {
    name: "Samsung Galaxy Watch Ultra",
    category: "Wearable",
    image: "https://www.google.com/imgres?q=galaxy%20watch%20ultra&imgurl=https%3A%2F%2Fimages.samsung.com%2Fis%2Fimage%2Fsamsung%2Fp6pim%2Fde%2Ff2507%2Fgallery%2Fde-galaxy-watch-ultra-2025-l705-sm-l705fzb2dbt-thumb-547740445&imgrefurl=https%3A%2F%2Fwww.samsung.com%2Fde%2Fwatches%2Fgalaxy-watch%2Fgalaxy-watch-ultra-2025-47mm-titanium-blue-lte-sm-l705fzb2dbt%2F&docid=C0uV0kZ1oON5DM&tbnid=RDj23tx5zQOinM&vet=12ahUKEwj5n4uL_OKQAxUG87sIHcHuHL8QM3oECB0QAA..i&w=330&h=330&hcb=2&ved=2ahUKEwj5n4uL_OKQAxUG87sIHcHuHL8QM3oECB0QAA",
    variants: [
      {
        name: '47 mm',
        description: "47 mm, LTE",
        price: 999,
        amount: 20,
      }
    ]
  },
  {
    name: "Samsung Galaxy Buds 3",
    category: "Earbuds",
    image: "https://www.google.com/imgres?q=galaxy%20buds%203&imgurl=https%3A%2F%2Fimages.samsung.com%2Fis%2Fimage%2Fsamsung%2Fp6pim%2Fde%2F2407%2Fgallery%2Fde-galaxy-buds3-r530-sm-r530nzaadbt-542276987%3F%24624_468_PNG%24&imgrefurl=https%3A%2F%2Fwww.samsung.com%2Fde%2Faudio-sound%2Fgalaxy-buds%2Fgalaxy-buds3-silver-sm-r530nzaadbt%2F&docid=we7u5LUiz_hU0M&tbnid=ovNR3F6Diz0nkM&vet=12ahUKEwjosvu1_OKQAxV4gv0HHf2JAcsQM3oECBsQAA..i&w=624&h=468&hcb=2&ved=2ahUKEwjosvu1_OKQAxV4gv0HHf2JAcsQM3oECBsQAA",
    variants: [
      {
        name: 'Standard',
        price: 159,
        amount: 8,
      }
    ]
  },
  {
    name: "Samsung Galaxy Buds 3 Pro",
    category: "Earbuds",
    image: "https://www.google.com/imgres?q=galaxy%20buds%203&imgurl=https%3A%2F%2Fstatic01.galaxus.com%2Fproductimages%2F6%2F1%2F2%2F8%2F3%2F1%2F0%2F8%2F0%2F0%2F5%2F0%2F5%2F2%2F1%2F5%2F3%2F4%2F3%2F9396bc1a-8cc5-43df-8e7a-1bd61cdb1654_cropped.png_sea.jpeg&imgrefurl=https%3A%2F%2Fwww.galaxus.de%2Fde%2Fs1%2Fproduct%2Fsamsung-galaxy-buds3-pro-anc-6-h-kabellos-kopfhoerer-46785726&docid=7_p956TJwOv3PM&tbnid=xy6NjRdYrETwvM&vet=12ahUKEwjosvu1_OKQAxV4gv0HHf2JAcsQM3oECCIQAA..i&w=2880&h=2880&hcb=2&ved=2ahUKEwjosvu1_OKQAxV4gv0HHf2JAcsQM3oECCIQAA",
    variants: [
      {
        name: 'Standard',
        price: 229,
        amount: 10,
      }
    ]
  },
  {
    name: "Samsung Galaxy Tab S11 Ultra 5G",
    category: "Tablet",
    image: "https://www.google.com/imgres?q=galaxy%20s11%20tablet&imgurl=https%3A%2F%2Fassets.mmsrg.com%2Fisr%2F166325%2Fc1%2F-%2FASSET_MMS_161242286%3Fx%3D536%26y%3D402%26format%3Djpg%26quality%3D80%26sp%3Dyes%26strip%3Dyes%26trim%26ex%3D536%26ey%3D402%26align%3Dcenter%26resizesource%26unsharp%3D1.5x1%2B0.7%2B0.02%26cox%3D0%26coy%3D0%26cdx%3D536%26cdy%3D402&imgrefurl=https%3A%2F%2Fwww.mediamarkt.de%2Fde%2Fproduct%2F_samsung-galaxy-tab-s11-ultra-wi-fi-tablet-256-gb-145-zoll-gray-3008018.html%3Fsrsltid%3DAfmBOooKr_T-WCPUcbIqUT4OOWP19neYi4mPTcq0CMX6nz4z-Jw1bjDe&docid=Turyfy1gLrS-QM&tbnid=9qhekmDmxmgPtM&vet=12ahUKEwixxbKS_eKQAxWt8rsIHdQgL3kQM3oECBYQAA..i&w=536&h=402&hcb=2&ved=2ahUKEwixxbKS_eKQAxWt8rsIHdQgL3kQM3oECBYQAA",
    variants: [
      {
        name: '256 GB',
        description: "14.6\"",
        price: 1429,
        amount: 14,
      },
      {
        name: '512 GB',
        description: "14.6\"",
        price: 1549,
        amount: 16,
      },
      {
        name: '1 TB',
        description: "14.6\"",
        price: 1859,
        amount: 18,
      }
    ]
  },
  {
    name: "Samsung Galaxy Tab S11 Ultra Wi-Fi",
    category: "Tablet",
    image: "https://www.google.com/imgres?q=galaxy%20s11%20tablet&imgurl=https%3A%2F%2Fassets.mmsrg.com%2Fisr%2F166325%2Fc1%2F-%2FASSET_MMS_161242286%3Fx%3D536%26y%3D402%26format%3Djpg%26quality%3D80%26sp%3Dyes%26strip%3Dyes%26trim%26ex%3D536%26ey%3D402%26align%3Dcenter%26resizesource%26unsharp%3D1.5x1%2B0.7%2B0.02%26cox%3D0%26coy%3D0%26cdx%3D536%26cdy%3D402&imgrefurl=https%3A%2F%2Fwww.mediamarkt.de%2Fde%2Fproduct%2F_samsung-galaxy-tab-s11-ultra-wi-fi-tablet-256-gb-145-zoll-gray-3008018.html%3Fsrsltid%3DAfmBOooKr_T-WCPUcbIqUT4OOWP19neYi4mPTcq0CMX6nz4z-Jw1bjDe&docid=Turyfy1gLrS-QM&tbnid=9qhekmDmxmgPtM&vet=12ahUKEwixxbKS_eKQAxWt8rsIHdQgL3kQM3oECBYQAA..i&w=536&h=402&hcb=2&ved=2ahUKEwixxbKS_eKQAxWt8rsIHdQgL3kQM3oECBYQAA",
    variants: [
      {
        name: '256 GB',
        description: "14.6\"",
        price: 1429,
        amount: 14,
      },
      {
        name: '512 GB',
        description: "14.6\"",
        price: 1419,
        amount: 16,
      },
      {
        name: '1 TB',
        description: "14.6\"",
        price: 1709,
        amount: 18,
      }
    ]
  }
]

interface RawVariant {
  name: string;
  price: number;
  amount: number;
  description?: string;
}

interface RawProduct {
  name: string;
  category: string;
  image?: string;
  variants: RawVariant[];
}

async function main() {
  const created = await prisma.$transaction(
      (rawProducts as RawProduct[]).map(p =>
          prisma.product.create({
            data: {
              name: p.name,
              category: p.category,
              image: p.image ?? null,
              variants: {
                create: p.variants.map(v => ({
                  name: v.name.trim(),
                  price: v.price,
                  amount: v.amount,
                  description: v.description ?? null
                }))
              }
            }
          })
      )
  );

  console.log(`Inserted products: ${created.length}`);
}

main()
    .catch(err => {
      console.error("Seed error:", err);
      process.exitCode = 1;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
