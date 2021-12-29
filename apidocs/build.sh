set -e

# instal go deps
go install github.com/GeertJohan/go.rice
go install github.com/GeertJohan/go.rice/rice

# Removes mac shitty things
find assets/ -type f -name '.DS_Store' -delete

# Put assets into the binary
rice embed-go

# Clean up data so it passes linter
gofmt -s -w rice-box.go

sed -i "s/package main/package apidocs/g" rice-box.go

echo "DOCS DONE!"
