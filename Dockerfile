FROM node:22 as builder

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .
RUN yarn build


FROM node:22 as production

WORKDIR /app

ENV NODE_ENV=production


COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static


EXPOSE 3000

ENV PORT=3000

CMD HOSTNAME="0.0.0.0" node server.js