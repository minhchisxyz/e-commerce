import {Router, Request, Response} from "express";
import {prisma} from "./index.js";
import {z} from "zod";

const productRouter = Router()

const variantCreateSchema = z.object({
  name: z.string().min(1, "name is required"),
  price: z.coerce.number().positive("price must be > 0"),
  description: z.string().optional().default(""),
  amount: z.coerce.number().int().min(0, "amount must be >= 0").optional().default(0),
});

const productCreateSchema = z.object({
  name: z.string().min(1, "name is required"),
  category: z.string().min(1, "category is required"),
  image: z.string().optional().default(`https://placehold.co/600x400?text=Product`),
  variants: z.array(variantCreateSchema).optional().default([]),
});

productRouter.get("/", async (req: Request<{}, {}, {}, { category?: string }>, res: Response) => {
  const {category} = req.query
  if (category) {
    const products = await prisma.product.findMany({
      where: {category},
      include: { variants: true },
    })
    res.json(products)
  } else {
    const products = await prisma.product.findMany({
      include: { variants: true },
    })
    res.json(products)
  }
})

productRouter.get('/categories', async (req: Request, res: Response) => {
  const categories = await prisma.product.findMany({
    distinct: ['category'],
    select: {
      category: true
    }
  })
  return res.json(categories.map(category => category.category))
})

productRouter.get("/:id", async (req: Request, res: Response) => {
  const {id} = req.params
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(id || '0')
    },
    include: { variants: true },
  })
  if (!product) {
    return res.status(404).json({
      message: `Product with id ${id} not found`
    })
  }
  res.json(product)
})

productRouter.post("/", async (req: Request, res: Response) => {
  const parsed = productCreateSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      message: "Invalid request body",
      errors: z.treeifyError(parsed.error),
    });
  }
  const { name, image, category, variants } = parsed.data;

  const product = await prisma.product.create({
    data: {
      name,
      image,
      category,
      variants: {
        create: variants,
      },
    },
    include: { variants: true },
  });
  res.status(201).json(product)
})

export default productRouter