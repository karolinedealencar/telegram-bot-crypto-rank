FROM ubuntu@sha256:82becede498899ec668628e7cb0ad87b6e1c371cb8a1e597d83a47fac21d6af3

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

WORKDIR /usr/src/app

RUN apt-get update \
    && apt-get install -y wget gnupg \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
      --no-install-recommends \
    && curl -sL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y --no-install-recommends nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*

ADD https://github.com/Yelp/dumb-init/releases/download/v1.2.2/dumb-init_1.2.2_x86_64 /usr/local/bin/dumb-init
RUN chmod +x /usr/local/bin/dumb-init

COPY package*.json ./

RUN npm ci --only=production

COPY . /usr/src/app

EXPOSE 8080
CMD ["dumb-init", "node", "src/index.js" ]