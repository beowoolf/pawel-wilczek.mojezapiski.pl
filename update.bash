#!/bin/bash

mkdir -p ~/bin && ln -fs /usr/local/bin/node26 ~/bin/node && ln -fs /usr/local/bin/npm26 ~/bin/npm && source $HOME/.bash_profile
# sharp FreeBSD uses WASM (@img/sharp-freebsd-wasm32 + @img/sharp-wasm32); no --ignore-platform
# so Nitro does not ship every platform binary into .output
git pull && yarn install && yarn build && devil www restart pawel-wilczek.mojezapiski.pl
