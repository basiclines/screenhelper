#!/bin/bash

# -------------------------------------------------------
# Usage:
# cd build/
# ./deploy.sh (push the content from master branch to gh-pages branch)
# -------------------------------------------------------

cd ../
echo "Deploying...."
git checkout gh-pages
git pull origin master
git push origin gh-pages
git checkout master
echo "Finished"
