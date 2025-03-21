FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Prisma Clientを事前に生成しておく（任意）
RUN npx prisma generate

CMD ["npm", "run", "start"]
