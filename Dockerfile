# --- Builder Stage ---
FROM node:20-alpine AS builder

ARG NEXTAUTH_SECRET
ARG NEXTAUTH_URL
ARG DATABASE_URL

ENV NEXTAUTH_SECRET=$NEXTAUTH_SECRET
ENV NEXTAUTH_URL=$NEXTAUTH_URL
ENV DATABASE_URL=$DATABASE_URL
WORKDIR /app

# 依存関係のインストール
COPY package*.json ./
RUN npm install

# アプリケーションソースのコピー
COPY . .

# Prisma Clientの生成
RUN npx prisma generate