// Package apidocs serves a Swagger-page on an api at the path /page/
package apidocs

import (
	"fmt"
	"mime"
	"net/http"

	rice "github.com/GeertJohan/go.rice"

	"github.com/sirupsen/logrus"
)

const (
	// Prefix is the http path that renders the page
	Prefix = "/ui/"
)

type page struct {
	logger *logrus.Entry
}

func init() {
}

// Serve runs the page using the path `/page/`
func Serve(mux *http.ServeMux, logger *logrus.Entry) {
	mime.AddExtensionType(".svg", "image/svg+xml")
	p := page{logger: logger} // todo - pass in option
	docMux, err := p.newMux()
	if err != nil {
		logger.Fatalf("Unable to process swagger page - %v", err)
	}

	mux.Handle(Prefix, docMux)
}

func (p *page) newMux() (*http.ServeMux, error) {
	loadAssets()

	mux := http.NewServeMux()

	// Register asset folders we want served externally
	for _, path := range assetPaths {
		var metaHTTPBox *rice.HTTPBox
		urlPath := fmt.Sprintf("%s%s/", Prefix, path) // Wrap in slashes

		// @TODO find cleaner solution, to iterate `assetPaths`
		switch path {
		case assetPaths[0]:
			metaHTTPBox = jsBox.HTTPBox()
		case assetPaths[1]:
			metaHTTPBox = cssBox.HTTPBox()
		case assetPaths[2]:
			metaHTTPBox = imagesBox.HTTPBox()
		}

		mux.Handle(urlPath, http.StripPrefix(urlPath, http.FileServer(metaHTTPBox)))
	}

	mux.HandleFunc(Prefix, func(res http.ResponseWriter, req *http.Request) {
		res.WriteHeader(http.StatusOK)
		res.Header().Set("Content-Type", "text/html; charset=UTF-8")

		err := tmpl.ExecuteTemplate(res, homeTemplate, p)
		if err != nil {
			p.logger.Panicf("Unable to render swaggerpage index %v", err)
		}
	})

	return mux, nil
}
