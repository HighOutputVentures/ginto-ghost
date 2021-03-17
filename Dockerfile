FROM gintodev/node.base

COPY ./build.sh /root/build.sh

COPY ./config.js /root/config.js

RUN /root/build.sh

USER appuser

CMD cd /var/www/ghost && ghost run
