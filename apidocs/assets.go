package apidocs

import (
	"fmt"
	"html/template"
	"os"

	rice "github.com/GeertJohan/go.rice"
)

var (
	// asset folders that are served directly
	assetPaths = []string{"js", "css", "images"}

	// All templates in this foilder will be loaded
	homeTemplate = "assets/templates/index.tmpl"

	tmpl         *template.Template
	loadingState = false
	jsBox        *rice.Box
	cssBox       *rice.Box
	imagesBox    *rice.Box
	langBox      *rice.Box
	libBox       *rice.Box

	templatesBox *rice.Box
)

func loadAssets() bool {
	// @TODO find better, clean solution for the double init, may happen in tests only.
	if loadingState {
		return true
	}

	loadingState = true

	initAllTemplates()

	jsBox = rice.MustFindBox("assets/js")
	cssBox = rice.MustFindBox("assets/css")
	imagesBox = rice.MustFindBox("assets/images")

	return true
}

// initializes templateHolder
func initAllTemplates() {
	templatesBox = rice.MustFindBox("assets/templates")
	template.New("HTMLTemplates")
	templatesBox.Walk("", func(path string, i os.FileInfo, e error) error {
		urlPath := fmt.Sprintf("assets/templates/%s", path) // Wrap in slashes
		if i.IsDir() {
			return nil
		}

		str, err := templatesBox.String(path)
		if err != nil {
			panic(fmt.Sprintf("Failed to load template: %v\n%v\n", urlPath, err))
		}

		tmpl, err = template.New(urlPath).Parse(string(str))
		if err != nil {
			panic(fmt.Sprintf("Failed to load template: %v\n", err))
		}

		return nil
	})
}
