#!/bin/bash

mkdir -p ~/bin && ln -fs /usr/local/bin/node20 ~/bin/node && ln -fs /usr/local/bin/npm20 ~/bin/npm && source $HOME/.bash_profile
git pull && yarn && yarn build:prod -m -t && devil www restart pawel-wilczek.mojezapiski.pl
