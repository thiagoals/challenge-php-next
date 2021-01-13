# Challenge-php-next

Esta é a aplicação front-end do projeto Challenge-php. Criado em NEXTJS, um framework React.

# Adicionando Bootstrap

Esta aplicação utiliza o React-bootstrap, um framework frontend do Bootstrap para o React, que também pode ser utilizada neste framework. O link para utilizar este framework é:
```
https://react-bootstrap.github.io/
```

# Axios

Axios é uma ferramenta importante para requisitar serviços de forma rápida e fácil. Utilizamos o npm para instalar a dependência:
```
npm install axios
```

# Alertas no aplicativo

O react-bs-notifier é uma dependência utilizada para criar notificações no aplivatico. Está sendo utilizado para, em caso de erro ou sucesso, mostrar alguma mensagem amigável para o usuário. O link do git é:
```
https://github.com/chadly/react-bs-notifier
```

# Serviço de upload de arquivos XML

Foi criado um serviço dentro do NEXTJS para envio de imagens para dentro da pasta public, juntamente com a data do envio e  os arquivos enviados. Ele só aceita arquivos xml. Alguns pacotes foram usados neste serviço, entre eles:
```
npm install slugify - para criar o slug do arquivo
```
```
npm install moment - para criar a pasta com a data atual (DD-MM-YYYY)
```
```
npm install formidable - para fazer o upload do arquivo
```

# Alterando path de consumo dos serviços
Dentro da pasta /page e /page/api, existem três arquivos que consomem serviços(admin,index e upload). Importante verificar a url caso você queira mudar algum dos serviços de porta, pois o mesmo utiliza localhost:porta para consumir os endpoins.

# About

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
