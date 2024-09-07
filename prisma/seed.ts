import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      title: 'Pelúcia da Kuromi',
      description: 'Pelúcia da Kuromi fofinha e perfeita para presentear.',
      price: 29.99,
      image: '/logo/produtos/peluciakitty.jpg',
      createdAt: new Date(),
    },
    {
      title: 'Pelúcia da Hello Kitty',
      description: 'A clássica pelúcia da Hello Kitty com seu visual icônico.',
      price: 34.99,
      image: '/logo/produtos/peluciakitty.jpg',
      createdAt: new Date(),
    },
    {
      title: 'Copo Térmico da My Melody',
      description: 'Copo térmico da My Melody para manter sua bebida na temperatura ideal.',
      price: 19.99,
      image: '/logo/produtos/peluciakitty.jpg',
      createdAt: new Date(),
    },
    {
      title: 'Chaveiro da Cinnamoroll',
      description: 'Chaveiro fofo da Cinnamoroll, ideal para mochilas e bolsas.',
      price: 9.99,
      image: '/logo/produtos/peluciakitty.jpg',
      createdAt: new Date(),
    },
    {
      title: 'Mochila da Badtz-Maru',
      description: 'Mochila estilosa da Badtz-Maru, perfeita para o dia a dia.',
      price: 39.99,
      image: '/logo/produtos/peluciakitty.jpg',
      createdAt: new Date(),
    },
    {
      title: 'Estojo Escolar da Pompompurin',
      description: 'Estojo escolar com estampa da Pompompurin para organizar seus materiais.',
      price: 12.99,
      image: '/logo/produtos/peluciakitty.jpg',
      createdAt: new Date(),
    },
    {
      title: 'Caderno da Little Twin Stars',
      description: 'Caderno com ilustrações da Little Twin Stars, perfeito para anotações.',
      price: 7.99,
      image: '/logo/produtos/peluciakitty.jpg',
      createdAt: new Date(),
    },
    {
      title: 'Adesivos da Chococat',
      description: 'Pacote de adesivos da Chococat para decorar seu caderno ou laptop.',
      price: 4.99,
      image: '/logo/produtos/peluciakitty.jpg',
      createdAt: new Date(),
    },
    {
      title: 'Pelúcia da Kuromi',
      description: 'Pelúcia da Kuromi fofinha e perfeita para presentear.',
      price: 29.99,
      image: '/logo/produtos/peluciakitty.jpg',
      createdAt: new Date(),
    },
    {
      title: 'Pelúcia da Hello Kitty',
      description: 'A clássica pelúcia da Hello Kitty com seu visual icônico.',
      price: 34.99,
      image: '/logo/produtos/peluciakitty.jpg',
      createdAt: new Date(),
    },
    {
      title: 'Copo Térmico da My Melody',
      description: 'Copo térmico da My Melody para manter sua bebida na temperatura ideal.',
      price: 19.99,
      image: '/logo/produtos/peluciakitty.jpg',
      createdAt: new Date(),
    },
    {
      title: 'Chaveiro da Cinnamoroll',
      description: 'Chaveiro fofo da Cinnamoroll, ideal para mochilas e bolsas.',
      price: 9.99,
      image: '/logo/produtos/peluciakitty.jpg',
      createdAt: new Date(),
    },
    {
      title: 'Mochila da Badtz-Maru',
      description: 'Mochila estilosa da Badtz-Maru, perfeita para o dia a dia.',
      price: 39.99,
      image: '/logo/produtos/peluciakitty.jpg',
      createdAt: new Date(),
    },
    {
      title: 'Estojo Escolar da Pompompurin',
      description: 'Estojo escolar com estampa da Pompompurin para organizar seus materiais.',
      price: 12.99,
      image: '/logo/produtos/peluciakitty.jpg',
      createdAt: new Date(),
    },
    {
      title: 'Caderno da Little Twin Stars',
      description: 'Caderno com ilustrações da Little Twin Stars, perfeito para anotações.',
      price: 7.99,
      image: '/logo/produtos/peluciakitty.jpg',
      createdAt: new Date(),
    },
    {
      title: 'Adesivos da Chococat',
      description: 'Pacote de adesivos da Chococat para decorar seu caderno ou laptop.',
      price: 4.99,
      image: '/logo/produtos/peluciakitty.jpg',
      createdAt: new Date(),
    }
  ];
  

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
