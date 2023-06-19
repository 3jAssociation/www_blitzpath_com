FROM ghcr.io/aimed-labs/nginx:1.23.3-alpine-slim
LABEL AIMED_LABS=true
COPY ./build /usr/share/nginx/html
