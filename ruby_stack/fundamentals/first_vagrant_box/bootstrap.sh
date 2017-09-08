#!/usr/bin/env bash
# upgrade and update the system
echo upgrading and updating the system
sudo apt-get update
sudo apt-get -y upgrade
# install node.js for js runtime when using Rails
echo installing nodejs for ExecJS runtime and git
sudo apt-get install -y nodejs
sudo apt-get install -y git
# install RVM
echo installing RVM
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
\curl -sSL https://get.rvm.io | bash -s stable
source /home/vagrant/.rvm/scripts/rvm
rvm requirements
# install Ruby and make 2.3.1 the default
echo installing ruby
rvm install 2.3.1
rvm use 2.3.1 --default
# install Bundler and Rails
echo installing bundler and rails
gem install bundler --no-ri --no-rdoc
gem install rails -v 4.2.7 --no-ri --no-rdoc
# install postgres and its dependencies
echo installing psql and its dependencies
sudo apt-get install -y postgresql postgresql-contrib libpq-dev