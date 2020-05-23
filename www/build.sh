set -e

# install packages
yarn install

# instal go deps
go get -u github.com/GeertJohan/go.rice
go get -u github.com/GeertJohan/go.rice/rice

# Builds CSS from SCSS
echo "gulp Gulp GULP"
gulp sass

# Removes mac shitty things
find assets/ -type f -name '.DS_Store' -delete

# Put assets into the binary
rice embed-go

# Clean up data so it passes linter
gofmt -s -w rice-box.go

echo "THAT WAS EASY!"
